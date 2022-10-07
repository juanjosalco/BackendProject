const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index');
const swaggerOptions = require('./config/swagger');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
app.use(express.json());
app.use('/', routes);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

try {
    sequelize.authenticate().then(()=>{
        console.log('DB Authenticated')
    })
    sequelize.sync().then(()=>{
        console.log('DB syncronized')
    })

    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB:', error);
}

let PORT = (process.env.PORT || 5432);
app.listen(PORT, () => {

    console.log("Server listening on PORT 5432 Postgress DB");
});

