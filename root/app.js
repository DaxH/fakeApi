const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 5010

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10mb' }))

const router = require('./routes/index/index')

const corsOpts = {

	origin: '*',

	methods: [
		'GET',
		'POST',
	],

	allowedHeaders: ['*'],
};

app.use(cors(corsOpts))
app.use(express.static('public'));
app.use('/api', router)

app.listen(port)
// console.log('API escuchando en el puerto ' + port)
