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

// swagger documentation
/**
 * @swagger
 * /users:
 *  get:
 *   tags:
 *    - Users
 *   summary: Users page for Libroverse
 *   description: view all registerd users
 *   responses:
 *    200:
 *     description: a welcome message
 */

router.get("/", getUsers);
router.get("/id/:id", authpassport, auth.required, getUser);

// swagger documentation
/**
 * @swagger
 * /users/signUp:
 *   post:
 *     tags:
 *       - Users
 *     summary: sign up
 *     description: sign up a new user
 *     requestBody:
 *       description: user object that will be created and added to the database
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: ok
 */
router.post("/signUp", signUp);

router.patch("/id/:id", authpassport, auth.required, updateUser);
router.delete("/id/:id", authpassport, auth.isAdmin, deleteUser);
router.get("/search/atributos", bringByAttributes);
router.get("/search/rol/:rol", authpassport, auth.required, bringByRol);

/**
 * @swagger
 * /users/logIn:
 *   post:
 *     tags:
 *       - Users
 *     summary: user login
 *     description: login with username and password
 *     requestBody:
 *       description: user object that will be created and added to the database
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/logIn'
 *     responses:
 *       200:
 *         description: ok
 *       4001:
 *         description: unauthorized you need to be an admin
 *       403:
 *         description: forbidden
 */
router.post("/logIn", logIn);
module.exports = router;

// schema : users
/**
 *@swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: jon
 *         lastname:
 *           type: string
 *           example: snow
 *         username:
 *           type: string
 *           example: kingofthenorth
 *         email:
 *           type: string
 *           example: jon@thewall.com
 *         address:
 *           type: string
 *           example: 123 IN THE NORTH AVE
 *         userpass:
 *           type: string
 *           example: 12345
 *         membersince:
 *           type: string
 *           example: 1900
 *         phonenumber:
 *           type: string
 *           example: 3333333333
 *         rol:
 *           type: string
 *           example: user
 *     logIn:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: kingofthenorth
 *        userpass:
 *          type: string
 *          example: 12345
 */
