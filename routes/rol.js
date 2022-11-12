const router = require("express").Router();
const auth = require("../config/auth");

const {
	createRol,
	getRol,
	getRoles,
	updateRol,
	deleteRol,
} = require("../controllers/rol");

router.get(
	"/",
	auth.isAdmin,
	getRoles
	/*
  #swagger.tags = ['Roles'];
  #swagger.summary = 'Get all Roles';
  #swagger.description = 'API to get all Roles';
  #swagger.responses[200] = {
			description: 'all Roles successfully obtained.',
			schema: {
				id: '1',
				rol: 'admin',
			}
		}
  #swagger.security = [{
               "bearer": []
        }]
	
  */
);
router.get(
	"/:id",
	auth.isAdmin,
	getRol
	/*
  #swagger.tags = ['Roles'];
  #swagger.summary = 'Get Role by ID';
  #swagger.description = 'API to get Role based on Role ID';
  #swagger.consumes = ['application/json'];
  #swagger.parameters['id'] = {
		  in: 'path',
		  required: true,
		  type: 'number',
		  description: 'Role ID that will be search',
		  example: 1
	}
	  #swagger.responses[200] = {
			description: 'Role successfully obtained.',
			schema: {
				id: 1,
			}
		}
	  #swagger.responses[400] = {
			description: 'Role not found.',
			schema: {
				error: 'Role not found.'
			}
		}	
	  #swagger.security = [{
               "bearer": []
        }]
  */
);
router.post(
	"/",
	auth.isAdmin,
	createRol
	/*
  #swagger.tags = ['Roles'];
  #swagger.summary = 'Create a new Role';
  #swagger.description = 'API to create a new Role';
  #swagger.requestBody['signup'] = {
	description: 'Rol',
	required: true,
	type: 'object',
	schema: { $ref: "#/definitions/Roles" }
  }
    #swagger.security = [{
               "bearer": []
        }]
  */
);
router.put(
	"/:id",
	auth.isAdmin,
	updateRol
	/*
  #swagger.tags = ['Roles'];
  #swagger.summary = 'Update a Role';
  #swagger.description = 'API to update a Role';
  #swagger.consumes = ['application/json'];
  #swagger.parameters['id'] = {
		  in: 'path',
		  required: true,
		  type: 'number',
		  description: 'Role ID that will be updated',
		  example: 1
	}
   #swagger.requestBody['edit'] = {
	description: 'Rol',
	required: true,
	type: 'object',
	schema: { $ref: "#/definitions/Roles" }
  }
    #swagger.security = [{
               "bearer": []
        }]
  */
);
router.delete(
	"/:id",
	auth.isAdmin,
	deleteRol
	/*
  #swagger.tags = ['Roles'];
  #swagger.summary = 'Delete Role by ID';
  #swagger.description = 'API to delete Role based on Role ID';
  #swagger.consumes = ['application/json'];
  #swagger.parameters['id'] = {
		  in: 'path',
		  required: true,
		  type: 'number',
		  description: 'Role ID that will be deleted',
		  example: 1
	}
	  #swagger.responses[200] = {
			description: 'Role successfully deleted.',
		}
	  #swagger.responses[400] = {
			description: 'Role not found.',	
			schema: {
				error: 'Role not found.'
			}
		}
		  #swagger.security = [{
               "bearer": []
        }]
  */
);

module.exports = router;
