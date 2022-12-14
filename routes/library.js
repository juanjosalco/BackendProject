const router = require("express").Router();
const auth = require("../config/auth");
const passport = require("passport");

const authpassport = passport.authenticate("bearer", {
	session: false,
	assignProperty: "user",
});

const {
	getLibraries,
	getLibrary,
	createLibrary,
	updateLibrary,
	deleteLibrary,
} = require("../controllers/library");

router.get(
	"/",
	auth.isAdmin,
	getLibraries
	/*
  #swagger.tags = ['Libraries'];
  #swagger.summary = 'Get all Libraries';
  #swagger.description = 'API to get all Libraries';
  #swagger.responses[200] = {
			description: 'all Libraries successfully obtained.',
			schema: {
				id: '1',
				
			}
		}
		#swagger.security = [{
               "bearer": []
        }]
  */
);
router.get(
	"/id/:id",
	// authpassport,
	auth.isAdmin,
	getLibrary
	/*
  #swagger.tags = ['Libraries'];
  #swagger.summary = 'Get Library by ID';
  #swagger.description = 'API to get Library based on Library ID';
  #swagger.consumes = ['application/json'];
  #swagger.parameters['id'] = {
		  in: 'path',
		  required: true,
		  type: 'number',
		  description: 'Library ID that will be search',
		  example: 1
	}
	  #swagger.responses[200] = {
			description: 'Library successfully obtained.',
			schema: {
				id: 1,
			}
		}
	  #swagger.responses[400] = {
			description: 'Library not found.',
			schema: {
				error: 'Library not found.'
			}
		}
	#swagger.security = [{
               "bearer": []
        }]
  */
);
router.post(
	"/create",
	// authpassport,
	auth.isUser,
	createLibrary
	/*
  #swagger.tags = ['Libraries'];
  #swagger.summary = 'Create a new Library';
  #swagger.description = 'API to create a new Library';
  #swagger.requestBody['createLibrary'] = {
	description: 'Library',
	required: true,
	type: 'object',
	schema: { $ref: "#/definitions/Library" }
  }
  #swagger.security = [{
               "bearer": []
        }]
  */
);

router.put(
	"/id/:id",
	auth.isUser,
	updateLibrary
	/*
  #swagger.tags = ['Libraries'];
  #swagger.summary = 'Update a Library';
  #swagger.description = 'API to update a Library';
  #swagger.consumes = ['application/json'];
  #swagger.parameters['id'] = {
		  in: 'path',
		  required: true,
		  type: 'number',
		  description: 'Library ID that will be updated',
		  example: 1
	}
   #swagger.requestBody['edit'] = {
	description: 'Library',
	required: true,
	type: 'object',
	schema: { $ref: "#/definitions/Library" }
  }
  #swagger.security = [{
               "bearer": []
        }]
  */
);
router.delete(
	"/id/:id",
	// authpassport,
	auth.isUser,
	deleteLibrary
	/*
  #swagger.tags = ['Libraries'];
  #swagger.summary = 'Delete Library by ID';
  #swagger.description = 'API to delete Library based on Library ID';
  #swagger.consumes = ['application/json'];
  #swagger.parameters['id'] = {
		  in: 'path',
		  required: true,
		  type: 'number',
		  description: 'Library ID that will be deleted',
		  example: 1
	}
	  #swagger.responses[200] = {
			description: 'Library successfully deleted.',
		}
	  #swagger.responses[400] = {
			description: 'Library not found.',	
			schema: {
				error: 'Library not found.'
			}
		}
		#swagger.security = [{
               "bearer": []
        }]
  */
);

module.exports = router;
