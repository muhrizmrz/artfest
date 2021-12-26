const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const db_connection = require('./backend/config/db_connection')


const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.json("working")
})

db_connection.connect((err)=>{
    if(err) return err
    else console.log("Database connected")
})

const port = 5000

app.listen(port,()=>{
    console.log("backend running")
})