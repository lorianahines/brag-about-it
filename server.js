//express setup
const express = require('express')
const cors = require('cors')
const app = express()

//require middleware
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())


app.use(logger('dev'))

const PORT = process.env.PORT || 4567

app.get('/', async(req, res) =>{
    try{
        res.json({msg: 'Initial test point.'})
    }catch(err){
        console.log(err)
    }
})

app.listen(PORT, () => console.log(`Brag About It listening on PORT ${PORT}`))