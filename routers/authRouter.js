const { Router } = require('express')
const authRouter = Router()
// const { User } = require('../models')
// const { hashPassword, checkPassword, createToken } = require('../auth/auth')


// const addAuthResponse = (user) => {
//   const userData = {
//     id: user.id,
//     username: user.username,
//     email: user.email
//   }
//   const token = createToken(userData)

//   return {
//     user: userData,
//     token
//   }
// }

//register
authRouter.post('/login', async(req, res, next) =>{
  res.status(200).json({message: "so far so good"})
  // try{
  //   const { name, username, email, password } = req.body
  //   const hashedPassword = await hashPassword(password)

  //   const newUser = await User.create({
  //     name,
  //     username, 
  //     email,
  //     password: hashedPassword
  //   })

  //   const authData = await addAuthResponse(newUser)

  //   res.json({...authData})

  // }catch(e){
  //   res.json(e.message)
  // }
})

module.exports = authRouter