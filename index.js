'use strict'

const express=require('express')
const bodyParser=require('body-parser')

const app=express()
const port=process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(3000, function(){
    console.log(`API REST corriendo en http://localhost:${port}`)
});