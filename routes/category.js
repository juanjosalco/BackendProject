const router = require("express").Router();
const auth = require("../config/auth");
const passport = require("passport");
const authpassport = passport.authenticate("bearer", {
	session: false,
	assignProperty: "user",
});

const {
	getCategories,
	getCategory,
	updateCategory,
	createCategory,
	deleteCategory,
} = require("../controllers/category");

router.get(
	"/",
	getCategories
	/*
  #swagger.tags = ['Categories'];
  */
);
router.get(
	"/id/:genre",
	authpassport,
	auth.required,
	getCategory
	/*
  #swagger.tags = ['Categories'];
  */
);
router.post(
	"/",
	authpassport,
	auth.isAdmin,
	createCategory
	/*
  #swagger.tags = ['Categories'];
  */
);
router.patch(
	"/id/:genre",
	authpassport,
	auth.required,
	updateCategory
	/*
  #swagger.tags = ['Categories'];
  */
);
router.delete(
	"/id/:genre",
	authpassport,
	auth.isAdmin,
	deleteCategory
	/*
  #swagger.tags = ['Categories'];
  */
);

module.exports = router;
