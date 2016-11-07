'use strict'

const express=require('express')
const bodyParser=require('body-parser')

const app=express()
app.listen(3000,()=>{
    console.log('API REST corriendo en http://localhost:3000');
});