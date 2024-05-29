require('dotenv').config({ path:'./.env' })

const express = require('express')

const port = process.env.PORT;

const app = express();

app.use(express.json())

app.use(express.static('public'))

app.use("/api/auth", require('./routes/auth'))

app.listen(port, ()=>{
    console.log("Corriendo en ",port)
})