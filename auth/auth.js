//require dependencies
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../models')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

const SECRET = process.env.SECRET

const jwtSign = (payload) => {
  return jwt.sign(payload, SECRET)
}

//middleware to implement jwtstrategy
passport.use(new JWTStrategy({
  secretOrKey: SECRET,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
}, async(token,done) => {
  try{
    const user = await User.findByPk(token.id)
    user ? done(null, user) : done(null, false)
  }catch(e){
    done(e)
  }
})) 

//passport strategy to handle signup
passport.use('signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  try{
    const { name, username } = req.body
    const user = await User.create({
      name: name,
      username: username,
      email: email,
      password: password
    })

    if(!user){
      return done(null, false, { message: 'Unable to sign up user.'})
    }
    done(null, user)

  }catch(e){
    done(e)
  }
}))

//passport strategy to handle login requests
passport.use('login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try{

    //find user by email
    const user = await User.findOne({ where: {email: email}})

    //if user doesn't exist pass on false and message to nect middleware function
    if(!user){
      return done(null, false, {message: "User not found. You don't even go here."})
    }
    //after we get the user, compare the entered password with the one in the database
    const validate = await bcrypt.compare(password, user.password)
    console.log(`***** validated: ${validate} *****`)
    //wrong password
    if(!validate){
      return done(null, false, { message: "Wrong password."})
    }
    //correct password
    console.log("successfull login")
    return done(null, user, {message: 'Logged in successfully!'})

  }catch(e){
    return done(e)
  }
}))

//midleware for checking auth with jwt
const authorized = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, async (error, user) => {
    if (error || !user ) {
      console.log(error)
      let err = new Error('No bueno, no access allowed.')
      err.status = 401
      return next(err)
    }

    req.user = user
    return next()
  })(req, res, next)
}


module.exports = {
  passport,
  jwtSign,
  authorized
}