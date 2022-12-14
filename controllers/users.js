const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const User = require("../models/users");
const Library = require("../models/library");

async function signUp(req, res) {
	return await User.create(req.body)
		.then((user) => {
			const body = req.body;
			// check if body has username password and email
			if (!req.body.username || !req.body.userpass || !req.body.email) {
				return res.status(400).send({
					message: "You might be missing your username password or email!",
				});
			}
			// if first name and last name is emp
			if (!req.body.firstname || !req.body.lastname) {
				return res.status(400).send({
					message: "first and last name are missing!",
				});
			}
			try {
				// takes userpass into salt and hash
				const { salt, hash } = User.createPassword(body["userpass"]);
				user.password_hash = hash;
				user.password_salt = salt;

				// add member since date now
				user.membersince = new Date().toDateString();

				// if credit card exists hash it
				if (req.body.credit_card) {
					const card = User.hashCard(body["credit_card"], salt);
					user.credit_card = card;
				}

				// save user
				user.save();
				return res
					.status(200)
					.json({ message: "User successfully created", user });
			} catch (err) {
				return res
					.status(500)
					.json({ info: "Check error", error: "description " + err });
			}
		})
		.catch((err) => {
			switch (err) {
				// validation error
				case "SequelizeValidationError":
					return res.status(400).json({
						message: "Validation Error",

						info: "Error in request",
						error: "description " + err,
					});
				// unique constraint error
				case "SequelizeUniqueConstraintError":
					return res.status(400).json({
						message: "Your email or Username might already in use",

						info: "Error in request",
						error: "description " + err,
					});
				// foregin key error
				case "SequelizeForeignKeyConstraintError":
					return res.status(400).json({
						message:
							"That role doesnt exist yet, can you create it or reqest it with your web master",

						info: "Error in request",
						error: "description " + err,
					});
				default:
					return res.status(500).json({
						info: "Error in request",
						error: "description " + err,
					});
			}
		});
}

async function getUser(req, res) {
	return await User.findOne({
		where: { id: req.params.id },
		include: [
			{
				model: Library,
				as: "Libraries",
				attributes: ["id", "name", "description"],
			},
		],
	})
		.then((user) => {
			if (!user) {
				return res.status(404).json({
					message: "User not found",
				});
			}
			return res.status(200).json({ message: "heres your user", user });
		})
		.catch((err) => {
			return res.status(500).json({
				info: "Error in request",
				error: "description " + err,
			});
		});
}

// confirm if deletable
async function getUsers(req, res) {
	return await User.findAll()
		.then((users) => {
			if (users == "") {
				return res.status(404).json({
					message: "No users found, maybe you should create some",
				});
			}
			res.status(200).json({ message: "here are all the users", users });
		})
		.catch((err) => {
			res
				.status(400)
				.json({ info: "Check error", error: "description " + err });
		});
}

async function updateUser(req, res) {
	return await User.findByPk(req.params.id).then((user) => {
		const body = req.body;
		if (!user) {
			return res.status(404).json({
				message: "User Not Found",
			});
		}
		// // declare salt from user password
		const salt = user.password_salt;

		// // if credit card exists hash it
		if (req.body.credit_card) {
			const card = User.hashCard(body["credit_card"], salt);
			user.credit_card = card;
		}
		return (
			user
				.update({
					username: body["username"],
					firstname: body["firstname"],
					lastname: body["lastname"],
					address: body["address"],
					email: body["email"],
					phonenumber: body["phonenumber"],
					rol: body["rol"],
					credit_card: user.credit_card,
				})
				// return updated user
				.then(() =>
					res.status(200).json({ message: "User successfully updated", user })
				)

				// catch error
				.catch((error) =>
					res.status(400).json({
						info: "Error in request",
						error: "description " + error,
					})
				)
		);
	});
}

async function deleteUser(req, res) {
	return await User.findByPk(req.params.id).then((user) => {
		// if user exists
		if (!user) {
			return res.status(404).json({
				message: "User Not Found",
			});
		}
		// delete user
		return user
			.destroy()
			.then(() =>
				res.status(200).json({ message: "User successfully deleted", user })
			)
			.catch((error) =>
				res.status(400).json({
					info: "Error in request",
					error: "description " + error,
				})
			);
	});
}

async function bringByAttributes(req, res) {
	//search/atributos?firstname=jarret
	return await User.findAll({
		where: req.query,
	})
		.then((users) => {
			if (users == "") {
				return res.status(404).json({
					message: "No users found, maybe you should create some",
				});
			}
			res.status(200).json({ message: "here are all the users", users });
		})
		.catch((err) => {
			res
				.status(400)
				.json({ info: "Check error", error: "description " + err });
		});
}

async function bringByRol(req, res) {
	try {
		const rol = req.params.rol;
		const user = await User.findAll({ where: { rol } });
		if (user == "") {
			return res.status(404).json({
				message:
					"No users found under that role maybe it doesnt exist or users have not been created",
			});
		}
		const users = user.map((user) => {
			return {
				id: user.id,
				username: user.username,
				firstname: user.firstname,
				lastname: user.lastname,
				rol: user.rol,
			};
		});
		res.status(200).json({ message: "here are all the users", users });
	} catch (error) {
		res
			.status(400)
			.json({ info: "Error in request", error: "description " + error });
	}
}

async function logIn(req, res) {
	try {
		const body = req.body;
		const user = await User.findOne({ where: { username: body.username } });
		if (!user) {
			return res
				.status(404)
				.json({ error: "user:" + body.username + " not found" });
		}
		if (
			User.validatePassword(
				body.userpass,
				user.password_salt,
				user.password_hash
			)
		) {
			return res.status(200).json({
				user: user.username,
				email: user.email,
				//role: user.rol,
				token: User.generateJWT(user),
			});
		} else {
			return res
				.status(400)
				.json({ mensaje: "Password incorrect, please try again" });
		}
	} catch (error) {
		res
			.status(400)
			.json({ info: "Error in request", error: "description " + error });
	}
}

module.exports = {
	signUp,
	logIn,
	getUser,
	getUsers,
	updateUser,
	deleteUser,
	bringByRol,
	bringByAttributes,
};
