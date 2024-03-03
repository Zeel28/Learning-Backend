require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
     res.send('MY APP')
})

app.get('/dashboard', function (req, res) {
  res.send('dashboard')
})

app.listen(process.env.PORT,()=>{
     console.log('App is runing');
})