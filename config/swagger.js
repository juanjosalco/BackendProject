// swagger definition
const swaggerOptions = {
	definition: {
		info: {
			title: "Libroverse",
			description: "Welcome to BEDU Team 6 Book API!",
			servers: ["http://localhost:3000/"],
		},
		openapi: "3.0.3",
		components: {
			securitySchemes: {
				// bearerAuth: {
				// 	type: "http",
				// 	scheme: "bearer",
				// 	bearerFormat: "JWT",
				// 	value: "Bearer <JWT token here>",
				// },
			},
		},
	},
	apis: ["./routes/*.js"],
};

// export swaggerOptions
module.exports = swaggerOptions;
