const { Sequelize } = require("sequelize");
const Category = require("../models/category");
const Book = require("../models/book");

function createCategory(req, res) {
	try {
		const body = req.body;
		Category.create(body).then((cat) => {
			return res.status(201).json(cat);
		});
	} catch (error) {
		res
			.status(400)
			.json({ info: "Error in request", error: "description " + error });
	}
}

async function getCategory(req, res) {
	try {
		const genre = req.params.genre;
		const cat = await Category.findByPk(genre, {
			include: Book,
		});
		res.status(200).json(cat);
	} catch (error) {
		res
			.status(400)
			.json({ info: "Error in request", error: "description " + error });
	}
}

async function getCategories(req, res) {
	try {
		const categories = await Category.findAll({
			include: Book,
		});
		res.status(200).json(categories);
	} catch (err) {
		res
			.status(400)
			.json({ info: "Error in request", error: "description " + error });
	}
}

async function updateCategory(req, res) {
	try {
		const genre = req.params.genre;
		const cat = req.body;

		const newCat = await Category.findByPk(genre);

		for (const key in cat) {
			if (!newCat[key] && newCat[key] != null) {
				console.log("no encontrado");
				return res
					.status(400)
					.json({ Error: "Attribute not update, attribute not valid" });
			}
		}

		const update = await Category.update(cat, { where: { genre } });

		res.status(200).json({ status: "Attribute was updated", cat: cat });
	} catch (error) {
		res
			.status(400)
			.json({ info: "Error in request", error: "description " + error });
	}
}

async function deleteCategory(req, res) {
	try {
		const genre = req.params.genre;

		const destruido = Category.destroy({ where: { genre } });
		res.status(200).json({ destruido });
	} catch (error) {
		res
			.status(400)
			.json({ info: "Error in request", error: "description " + error });
	}
}

module.exports = {
	createCategory,
	updateCategory,
	getCategories,
	getCategory,
	deleteCategory,
};
