const express = require('express') 
const app = express()       
const bodyParser = require('body-parser')        
const cors = require('cors')

const port = process.env.PORT || 8080 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            

const router = require('./routes/index/index')

const corsOpts = {
	origin: '*',

	methods: [
		'GET',
		'POST',
	],

	allowedHeaders: [
		'Content-Type',
	],
};

app.use(cors(corsOpts))
app.use('/api', router)

app.listen(port)
console.log('API escuchando en el puerto ' + port)
