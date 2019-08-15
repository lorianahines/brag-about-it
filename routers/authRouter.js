const { Router } = require('express')
const authRouter = Router()
const { passport } = require('../auth/auth')

authRouter.post('/login', async(req, res, next) =>{
  passport.authenticate('login', async (err, user, info) => {
    try{
      //user has not been authenticated
      if(err || !user) {
        console.log("user not authenticated", err, user, info)
        // const error = new Error('An error occurred')
        return next(err)
      }

      //login if there is a user
      req.login(user, { session: false }, async (error) =>{
        //if logging in returns an error, send it to the next middleware
        if(error) return next(error)

        //if login successful, send the user object over
        return res.json({ user })
      })
    }catch(e){
      console.log("passport authenticate", e)
      return next(e)
    }
  })(req,res, next)
  
})

module.exports = authRouter