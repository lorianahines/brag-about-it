const { Router } = require('express')
const { Brag, Comment } = require('../models')
const { Op } = require('sequelize')

const bragRouter = Router()

//get all brags (include comments)
bragRouter.get('/all', async (req,res) =>{
  try{
    const allBrags = await Brag.findAll({
      raw: true,
      include: {
        model: Comment,
        on:{
          id:{
            [Op.eq] : Comment.brag_id
          }
        }
      }
    })
    console.log(allBrags)
    res.json(allBrags)
  }catch(e){
    console.log(e)
    res.send(e.message)
  }
})

//get



module.exports = bragRouter