const { Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    "postgres://vsjzsncyduaglx:97b577fa35e5b13ad0407973e5907e984a1bd1501fb6e1ad40f4bde160353980@ec2-54-164-40-66.compute-1.amazonaws.com:5432/d8ovmcqvs357ps",
    {
        database: "d8ovmcqvs357ps",
        port:5432,
        ssl:true,
        dialect : 'postgres'
        ,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
        
    }
);

module.exports = sequelize;