const { Sequelize } = require("sequelize");

// node env development switch database
if (process.env.NODE_ENV === "development") {
	sequelize = new Sequelize(
		process.env.PGDATABASE,
		process.env.PGUSER,
		process.env.PGPASSWORD,
		{
			URL: process.env.DATABASE_URL,
			host: process.env.PGHOST,
			dialect: "sqlite",
			port: process.env.PORT,
		}
	);
} else {
	sequelize = new Sequelize(
		process.env.PGDATABASE,
		process.env.PGUSER,
		process.env.PGPASSWORD,
		{
			host: process.env.PGHOST,
			dialect: "postgres",
			port: process.env.PORT,
			dialectOptions: {
				ssl: {
					require: true,
					rejectUnauthorized: false,
				},
			},
		}
	);
}

module.exports = sequelize;
