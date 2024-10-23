require('dotenv').config()

const express = require('express')
const empServer = express()
require('./Connection/db')
const cors = require('cors')

const routes = require('./Routes/route')

empServer.use(cors())
empServer.use(express.json())
empServer.use(routes)
const PORT = 3000 || process.env.PORT

empServer.listen(PORT,()=>{
    console.log(`Server Running at: ${PORT}`)
})

