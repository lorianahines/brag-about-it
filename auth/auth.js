//require dependencies
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//set salt rounds and  token key
const SALT_ROUNDS = 12
const TOKEN_KEY = process.env.TOKEN_KEY

//hash user's password before entering it into the database
const hashPassword = async (password) =>{
  const passwordDigest = await bcrypt.hash(password, SALT_ROUNDS)
  return passwordDigest
}

//check the password when user logins 
const checkPassword = async (password, password_digest) =>{
  const isValidated = await bcrypt.compare(password, password_digest)
  return isValidated
}

//create a token by passing user data and using jwt.sign
const createToken = (tokenData) => {
  return jwt.sign(tokenData, TOKEN_KEY)
}

module.exports = {
  hashPassword,
  checkPassword,
  createToken
}