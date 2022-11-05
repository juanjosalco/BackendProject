const { text } = require("body-parser");
const { INTEGER } = require("sequelize");

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
		{
			name: "Roles",
			description: "Roles API for all the users",
		},
	],
	securityDefinitions: {
		bearer: {
			type: "http",
			scheme: "bearer",
			bearerFormat: "JWT",
		},
	},
	definitions: {
		Roles: {
			id: "2",
			rol: "user",
		},
		Users: {
			username: "kingofthenorth",
			firstname: "jon",
			lastname: "snow",
			address: "123 winderfell",
			email: "winter@fell.com",
			phonenumber: "1234567890",
			rol: "1",
		},
		Library: {
			name: "King's Landing",
			description: "The capital of the seven kingdoms",
		},
		Book: {
			book_name: "A Game of thrones",
			author: "George RR martin",
			description: "a song of ice and fire",
			publication_date: "1996",
			category: "fantasy",
		},
		Category: {
			genre: "fantasy",
			description: "a genre of fiction",
		},
	},
};

// run swagger using declared values
swaggerAutogen(outputFile, endpointsFiles, config);
