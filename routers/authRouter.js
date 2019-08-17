const { Router } = require('express')
const authRouter = Router()
const { passport, jwtSign } = require('../auth/auth')

authRouter.post('/signup', async(req, res, next) => {
  passport.authenticate('signup', async(err, user, info = {}) => {
    try{

      if (err) {return next(err)}

      if(!user){
        let error = new Error(info.message || 'An error occurred during signup')
        error.status = 400
        return next(error)
      }

      const { email, id } = user
      const payload = { email, id }
      const token = jwtSign(payload)

      return res.json({user, token, message: "user successfully created"})
    }catch(e){
      return next(e)
    }
  })(req, res, next)
})

authRouter.post('/login', async(req, res, next) =>{
  passport.authenticate('login', async (err, user, info) => {
    try{
      //user has not been authenticated
      if(err ) {return next(err)}
      
      if(!user){
        let error = new Error(info.message || 'An error occured during login.')
        error.status = 400
        return next(error)
      }

      //login if there is a user
      req.login(user, { session: false }, async (error) =>{
        //if logging in returns an error, send it to the next middleware
        if(error) return next(error)

        //if login successful, create token and send the user object over
        const {email, id} = user
        const payload = { email, id }
        const token = jwtSign(payload)

        return res.json({ user, token })
      })
    }catch(e){
      return next(e)
    }
  })(req,res, next)
  
})

module.exports = authRouter