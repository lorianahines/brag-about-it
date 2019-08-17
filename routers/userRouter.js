const express = require('express')
const userRouter = express.Router()
const { Brag } = require('../models')
const { passport } = require('../auth/auth')
const { Op } = require('sequelize')

userRouter.get('/protected', passport.authenticate('jwt', { session:false }),
  async (req, res) => {
    res.json({user:req.user, message: 'authenticated hoe'})
  }
)

userRouter.get('/:user_id/brags', passport.authenticate('jwt', { session:false }), 
  async(req, res) => {
    try{
      const userBrags = await Brag.findAll({ where: { user_id: { [Op.eq]: req.params.user_id}}})
      res.json(userBrags)
    }catch(err){
      res.send(err)
    }
  })

module.exports = userRouter