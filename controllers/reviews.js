//FromS5
const { Sequelize, DataTypes, Op } = require("sequelize");
const Review = require("../models/reviews");

// create function
// http://localhost:3000/reviews/
/* {
	"review": "Esta bien chida!",
	"rating": 5,
	"user_id": 1,
	"product_id": 3
} */
async function createReview(req, res) {
	const body = req.body;
	try {
		/*Arrrow Func first dev, 
    * move to asyncawait Server Validation 
    * Constraint returns properly form DB 
    Review.create(body).then(review => {
        res.status(201).json(review);
    });
    */
		const review = await Review.create(body);
		res.status(201).json(review);
	} catch (err) {
		if (
			["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(
				err.name
			)
		) {
			return res.status(400).json({
				error: err.errors.map((e) => e.message),
			});
		} else {
			throw err;
		}
	}
}

/*No validation required
 * Returns Empty Brackets{} in case or a query where id to table returns empty.
 * 				Brackets{id record in table}
 */
async function getReview(req, res) {
	const id = req.params.id;
	const review = await Review.findByPk(id);
	if (!review){
		return res.status(404).json({Error : "ID doesnt exist in DB", id})
	}
	return res.status(200).json(review);
}

/*No validation required
 * Returns Empty Brackets{} in case or a query all table returns empty.
 * 				Brackets{all records in table}
 */
async function getReviews(req, res) {
	const reviews = await Review.findAll();
	res.status(200).json(reviews);
}

async function updateReview(req, res) {
	
	try {
		const id = req.params.id;
		const review = req.body;
		const review_updated = await Review.findByPk(id);
		
		if (!review_updated){
			return res
			.status(404)
			.json({Error : "ID doesn't exist in DB",id})
		}
		for (const key in review) {
			if (!review_updated[key] && review_updated[key] != null || review_updated[key] == undefined) {
				console.log("no encontrado");
				return res
					.status(400)
					.json({ Error: "Attributes not update, attribute not valid" ,key });
			}
			
		}

		await Review.update(review, { where: { id: id } });		
		res.status(200).json(review_updated);
	} catch (err) {
		if (
			["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(
				err.name
			)
		) {
			return res.status(400).json({
				error: err.errors.map((e) => e.message),
			});
		} else {
			throw err;
		}
	}
}

/*No validation performed, if userExists, if id exists in DB
 * Either way the DB returna 200 Error Code
 * Only if a GetAll or GetById call return if user exists
 */
async function deleteReview(req, res) {
	
	try {
		const id = req.params.id;
		const reviewToDeleted = await Review.findByPk(id);
		if (!reviewToDeleted) {
			return res.status(404).json({ message: "Review not found" });
		}
		await reviewToDeleted.destroy();
		res.status(200).json({ message: "Review deleted", reviewToDeleted });
	} catch (error) {
		res
			.status(400)
			.json({ info: "Error in request", error: "description " + error });
	}



}

module.exports = {
	createReview,
	getReview,
	getReviews,
	updateReview,
	deleteReview,
};
