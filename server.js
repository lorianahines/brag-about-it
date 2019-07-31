const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 4567

app.get('/', async(req, res) =>{
    try{
        res.json({msg: 'Initial test point.'})
    }catch(err){
        console.log(err)
    }
})

app.listen(PORT, () => console.log(`Brag About It listening on PORT ${PORT}`))