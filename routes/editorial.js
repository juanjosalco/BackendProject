const router = require("express").Router();
const auth = require("../config/auth");
const passport = require("passport");
const authpassport = passport.authenticate("bearer", {
	session: false,
	assignProperty: "user",
});

const {
	getEditorial,
	getEditorials,
	updateEditorial,
	deleteEditorial,
	createEditorial,
} = require("../controllers/editorial");

router.get(
	"/",
	getEditorials
	/*
  #swagger.tags = ['Editorials'];
  */
);
router.get(
	"/id/:name",
	authpassport,
	auth.required,
	getEditorial
	/*
  #swagger.tags = ['Editorials'];
  */
);
router.post(
	"/",
	authpassport,
	auth.required,
	createEditorial
	/*
  #swagger.tags = ['Editorials'];
  */
);
router.patch(
	"/id/:name",
	authpassport,
	auth.required,
	updateEditorial
	/*
  #swagger.tags = ['Editorials'];
  */
);
router.delete(
	"/id/:name",
	authpassport,
	auth.isAdmin,
	deleteEditorial
	/*
  #swagger.tags = ['Editorials'];
  */
);

module.exports = router;
