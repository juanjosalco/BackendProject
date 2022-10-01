const express = require('express');
const sequelize = require('./config/db');

const app = express();

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

const PORT = 5432;
app.listen(PORT, () => {
    console.log("Server listening on PORT 5432 Postgress DB");
});



