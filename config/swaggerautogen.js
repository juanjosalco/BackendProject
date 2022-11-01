// use swagger autogen
const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.3" });

// where the output swagger jsn will go
const outputFile = "../config/swagger.json";

// where swagger will get initial routes from
const endpointsFiles = ["../routes/index.js"];

// declare configuation setting for swagger
const config = {
	info: {
		title: "Libraryverse",
		description: "Welcome to BEDU Team 6 Book API!",
	},
	servers: [
		{
			url: "http://localhost:3000/",
			description: "Local server",
		},
		{
			url: "https://libroverse-production.up.railway.app/",
			description: "railway server",
		},
	],
	openapi: "3.0.3",
	tags: [
		{
			name: "Home",
			description: "Home page for Libroverse",
		},
		{
			name: "Users",
			description: "Users API",
		},
		{
			name: "Categories",
			description: "Categories API",
		},
		{
			name: "Editorials",
			description: "Editorials API",
		},
		{
			name: "Books",
			description: "Books API",
		},
		{
			name: "Libraries",
			description: "Libraries API",
		},
	],
	securityDefinitions: {
		bearer: {
			type: "http",
			scheme: "bearer",
			bearerFormat: "JWT",
		},
	},
};

// run swagger using declared values
swaggerAutogen(outputFile, endpointsFiles, config);
