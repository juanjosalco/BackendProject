const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use('/', routes);

try {
    sequelize.authenticate().then(()=>{
        console.log('DB Authenticated')
    })
    sequelize.sync({force: true}).then(()=>{
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

