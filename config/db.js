const { Sequelize, DATE } = require("sequelize");

let sequelize = "";
// node env development/staging/production switch databases

if (process.env.NODE_ENV === "development") {
	sequelize = new Sequelize(
		process.env.DBDEV,
		process.env.USERDEV,
		process.env.PASSWDDEV,
		{
			//URL: process.env.DATABASE_URL,
			host: process.env.HOSTDEV,
			dialect: process.env.DIALECTDEV,
			port: process.env.PORTDBDEV,
		}
	);
} else if (process.env.NODE_ENV === "staging") {
	sequelize = new Sequelize(
		process.env.DBSTG,
		process.env.USERSTG,
		process.env.PASSWDSTG,
		{
			//URL: process.env.DATABASE_URL,
			host: process.env.HOSTSTG,
			dialect: process.env.DIALECTSTG,
			port: process.env.PORTDBSTG,
		}
	);
} else if (process.env.NODE_ENV === "production") {
	sequelize = new Sequelize(
		process.env.DBPRD,
		process.env.USERPRD,
		process.env.PASSWDPRD,
		{
			//URL: process.env.DATABASE_URL,
			host: process.env.HOSTPRD,
			dialect: process.env.DIALECTPRD,
			port: process.env.PORTDBPRD,
		}
	);
}

// authenticate sequelize and send console log
try {
	sequelize.authenticate().then(() => {
		console.log("DB Authenticated");
	});
	sequelize.sync({ force: false }).then(() => {
		console.log("DB syncronized " + process.env.NODE_ENV);
	});

	// console log with date as text
	console.log("Connected to DB as of " + new Date().toUTCString());
} catch (error) {
	console.log("Unable to connect to DB:", { error: "description " + error });
}

module.exports = sequelize;
