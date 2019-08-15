const { Router } = require('express')
const { Brag } = require('../models')

const bragRouter = Router()

//get all brags
bragRouter.get('/all', async (req,res) =>{
  try{
    const allBrags = await Brag.findAll()
    console.log(allBrags)
    res.json(allBrags)
  }catch(e){
    res.send(e.message)
  }
})



module.exports = bragRouter