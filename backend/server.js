require('dotenv').config()
const express = require('express')
const errorConstant = require('./utils/const')
const port = process.env.PORT || 5000

const app = express()

// middleware
const whitelist = ["https://pms-mernapp-demo.netlify.app/","http://localhost:3000"]
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

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/auth', require('./routes/auth_route'))

app.all('/', (req, res) =>{
	res.send('I am ready XD')
})

// Common error handler
app.use((err, req, res, next) => {
	console.log(err)
	switch (err.message) {
		case errorConstant.DUPLICATE_ENTRY:
			res.status(401).send({msg: 'Duplicate entry'})
			break;
		case '400':
			res.status(400).send({ msg: 'Invalid Authentication' })
			break;
		default:
			res.status(500).send({ msg: 'Internal Server Error' })
	}
})

app.listen(port, () => {
	console.log(`Server started on port ${port} `)
})
