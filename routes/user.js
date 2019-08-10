const { Router } = require('express')
const { User } = require('../models')
const { hashPassword, checkPassword, createToken } = require('../auth/auth')

const authRouter = Router()

const addAuthResponse = (user) => {
  const userData = {
    id: user.id,
    username: user.username,
    email: user.email
  }
  const token = createToken(userData)

  return {
    user: userData,
    token
  }
}

//register
authRouter.post('/register', async(req, res) =>{
  try{
    const { name, username, email, password } = req.body

  }catch(e){
    res.send(e.message)
  }
})