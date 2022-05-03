require('dotenv').config();
const express = require('express');
const errorConstant = require('./utils/const');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/auth', require('./routes/auth_route'));

app.all('/', (req, res) =>{
	res.send('I am ready XD');
});

// Common error handler
app.use((err, req, res, next) => {
	console.log(err);
	switch (err.message) {
		case errorConstant.DUPLICATE_ENTRY:
			res.status(401).send({msg: 'Duplicate id and email'});
			break;
		case errorConstant.DUPLICATE_EMAIL:
			res.status(401).send({msg: 'Duplicate email'});
			break;
		case errorConstant.DUPLICATE_ID:
			res.status(401).send({msg: 'Duplicate id'});
			break;
		case '400':
			res.status(400).send({ msg: 'Invalid Authentication' });
			break;
		default:
			res.status(500).send({ msg: 'Internal Server Error' });
	}
})

app.listen(port, () => {
	console.log(`Server started on port ${port} `);
})
