const router = require("express").Router();
const auth = require("../config/auth");
const passport = require("passport");

const authpassport = passport.authenticate("bearer", {
	session: false,
	assignProperty: "user",
});

const {
	createReview,
	getReview,
	getReviews,
	updateReview,
	deleteReview,
} = require("../controllers/reviews");

router.get(
	"/",

	getReviews
	/*
	#swagger.tags = ['Reviews'];
	#swagger.summary = 'Get all Reviews';
	#swagger.description = 'API to get all Reviews';
	#swagger.responses[200] = {
		description: 'all Reviews successfully obtained.',
	}
	*/
);

router.get(
	"/:id",
	getReview
	/*
	#swagger.tags = ['Reviews'];
	#swagger.summary = 'Get Review by ID';
	#swagger.description = 'API to get Review based on Review ID';
	#swagger.consumes = ['application/json'];
	#swagger.parameters['id'] = {
		in: 'path',
		required: true,
		type: 'number',
		description: 'Review ID that will be search',
		example: 1
	}
	#swagger.responses[200] = {
		description: 'Review successfully obtained.',}
	#swagger.responses[404] = {
		description: 'ID not found.',
		schema: {
			error: 'Review ID doesnt exist in DB.'
		}
	}
	*/
);

router.post(
	"/",
	authpassport,
	auth.isUser,
	createReview

	/*
	#swagger.tags = ['Reviews'];
	#swagger.summary = 'Create a Review';
	#swagger.description = 'API to create a Review';
	#swagger.consumes = ['application/json'];
	#swagger.requestBody['Review'] = {
		in: 'body',
		required: true,
		type: 'object',
		description: 'Review object that will be created',
		schema: {
			$ref: '#/definitions/Reviews'
		}
	}
	#swagger.responses[200] = {
		description: 'Review successfully created.',
	}
	#swagger.responses[400] = {
		description: 'Review not created.',
		schema: {
			error: 'Review not created.'
		}
	}
	*/
);

router.put(
	"/:id",
	authpassport,
	auth.isUser,
	updateReview
	/*
	#swagger.tags = ['Reviews'];
	#swagger.summary = 'Update a Review';
	#swagger.description = 'API to update a Review';
	#swagger.consumes = ['application/json'];
	#swagger.parameters['id'] = {
		in: 'path',
		required: true,
		type: 'number',
		description: 'Review ID that will be updated',
		example: 1
	}
	#swagger.requestBody['Review'] = {
		in: 'body',
		required: true,
		type: 'object',
		description: 'Review object that will be updated',
		schema: {
			$ref: '#/definitions/Reviews'
		}
	}
	#swagger.responses[200] = {
		description: 'Review successfully updated.',
	}
	#swagger.responses[400] = {
		description: 'Attributes not update, attributes not valid',
		schema: {
			error: 'Attributes not update, attributes not valid'
		}
	}
	#swagger.responses[404] = {
		description: 'Review ID doesnt exist in DB',
		schema: {
			error: 'Review ID doesnt exist in DB'
		}
	}
	*/
);

router.delete(
	"/:id",
	authpassport,
	auth.isAdmin,
	deleteReview
	/*
	#swagger.tags = ['Reviews'];
	#swagger.summary = 'Delete a Review';
	#swagger.description = 'API to delete a Review';
	#swagger.consumes = ['application/json'];
	  #swagger.parameters['id'] = {
			  in: 'path',
			  required: true,
			  type: 'number',
			  description: 'Order ID that will be deleted',
			  example: 1
		}
	#swagger.responses[200] = {
		description: 'Review successfully deleted.',
	}
	#swagger.responses[400] = {
		description: 'Error in request.',
		schema: {
			error: 'info: Error in request, error: description error'
		}
	}
	#swagger.responses[404] = {
		description: 'Review not deleted.',
		schema: {
			error: 'Review not found.'
		}
	}
	*/
);

module.exports = router;
