 
const express = require("express")
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT  || 5000
const connectDB = require('./config/db')
const cors = require('cors')
 


connectDB()

const app = express()


const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))


// app.use(cors({
//     origin: `https://pms-mernapp-demo.herokuapp.com`,  //react's address
//     credentials: true
// }));

// const corsOptions = {
//     origin: ["https://pms-mernapp-demo.herokuapp.com"],
//     preflightContinue:false,
//     credentials: true
//   }
  
//   app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/patient', require('./routes/patientRegsister'))



app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})