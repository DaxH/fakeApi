const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUI = require("swagger-ui-express")
const swaggerSpec = require("./swagger")

const port = 5010

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10mb' }))

const router = require('./routes/index')

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
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.listen(port)
// console.log('API escuchando en el puerto ' + port)
