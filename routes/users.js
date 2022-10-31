const router = require("express").Router();
const auth = require("../config/auth");
const passport = require("passport");

const authpassport = passport.authenticate("bearer", {
	session: false,
	assignProperty: "user",
});
const {
	getUser,
	getUsers,
	signUp,
	logIn,
	deleteUser,
	updateUser,
	bringByRol,
	bringByAttributes,
} = require("../controllers/users");

router.get(
	"/",
	getUsers
	/*
  #swagger.tags = ['Users'];
  #swagger.summary = 'Get all users';
  #swagger.description = 'API to get all users';
  #swagger.responses[200] = {
            description: 'all users successfully obtained.',
            schema: { 
				$name: 'Jhon Doe',
				$age: 29,
				about: ''
            }
  }
  */
);
router.get(
	"/id/:id",
	authpassport,
	auth.required,
	getUser
	/*
  #swagger.tags = ['Users'];
  #swagger.summary = 'Get user by ID';
  #swagger.description = 'API to get user based on user ID';
  #swagger.consumes = ['application/json'];
  #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'number',
          description: 'User ID that will be search',
          example: 1
  }
  #swagger.responses[200] = {
            description: 'User successfully obtained.',
            schema: { 
              id: 1,
            }
  }
  #swagger.responses[400] = {
			description: 'User not found.',
			schema: {
				error: 'User not found.'
			}
  }
  #swagger.security = [{
               "bearer": []
        }] 
  */
);

router.post(
	"/signUp",
	signUp
	/*
  #swagger.tags = ['Users'];
  #swagger.summary = 'Sign up';
  */
);
router.patch(
	"/id/:id",
	authpassport,
	auth.required,
	updateUser
	/*
  #swagger.tags = ['Users'];
  */
);
router.delete(
	"/id/:id",
	authpassport,
	auth.isAdmin,
	deleteUser /*
  #swagger.tags = ['Users'];
  */
);
router.get(
	"/search/atributos",
	bringByAttributes /*
  #swagger.tags = ['Users'];
  */
);
router.get(
	"/search/rol/:rol",
	authpassport,
	auth.required,
	bringByRol /*
  #swagger.tags = ['Users'];
  */
);
router.post(
	"/logIn",
	logIn /*
  #swagger.tags = ['Users'];
  */
);
module.exports = router;
