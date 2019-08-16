//require dependencies
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../models')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

const jwtSign = (payload) => {
  return jwt.sign(payload, SECRET)
}

//passport strategy to handle signup
passport.use('signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  try{
    const { body: {name}} = req
    const user = await User.create({
      name: name,
      email: email,
      password: password
    })

    if(!user){
      return done(null, false, { message: 'Unable to sign up user.'})
    }
    done(null, user)

  }catch(e){
    console.log(e)
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
    console.log("this is the user email" , user.email)

    //if user doesn't exist pass on false and message to nect middleware function
    if(!user){
      console.log("User not found. You don't even go here.")
      return done(null, false, {message: "User not found. You don't even go here."})
    }
    //after we get the user, compare the entered password with the one in the database
    const validate = await bcrypt.compare(password, user.password)
    console.log(`***** validated: ${validate} *****`)
    //wrong password
    if(!validate){
      console.log("wrong password")
      return done(null, false, { message: "Wrong password."})
    }
    //correct password
    console.log("successfull login")
    return done(null, user, {message: 'Logged in successfully!'})

  }catch(e){
    console.log("auth localstrategy", e)
    return done(e)
  }
}))


module.exports = {
  passport,
  jwtSign
}