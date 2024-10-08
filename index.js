const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
// app.use(cors({
//     origin : process.env.FRONTEND_URL,
//     credentials : true
// }))
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://65.2.37.169:3000');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
  });

app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 4000 || process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World, from express');
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
