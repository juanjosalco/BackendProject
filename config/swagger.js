const options = {
    swaggerDefinition : {
        info: {
            version: "1.0.0",
            title: "LibraVerse API"
        }
    },
    apis: ["./routes/users.js"]
}

module.exports = options;