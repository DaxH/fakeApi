const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const swaggerDefinition = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Simuladores",
			version: "1.0.0",
			description: "Simuladores API",
		},
		servers: [{
			url: "http://20.115.89.86:5010",
		}],
	},
	apis: [`${path.join(__dirname, "./routes/*/*.js")}`], // Path to the API routes in your Node.js application
};


const swaggerSpec = swaggerJSDoc(swaggerDefinition);
module.exports = swaggerSpec;