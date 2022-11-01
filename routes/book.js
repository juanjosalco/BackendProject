const router = require("express").Router();
const auth = require("../config/auth");
const passport = require("passport");
const authpassport = passport.authenticate("bearer", {
	session: false,
	assignProperty: "user",
});

const {
	getBook,
	getBooks,
	updateBook,
	createBook,
	deleteBook,
} = require("../controllers/book");

router.get(
	"/",
	getBooks
	/*
  #swagger.tags = ['Books'];
  */
);
router.get(
	"/id/:id",
	authpassport,
	auth.required,
	getBook
	/*
  #swagger.tags = ['Books'];
  */
);
router.post(
	"/",
	authpassport,
	auth.required,
	createBook
	/*
  #swagger.tags = ['Books'];
  */
);
router.patch(
	"/id/:id",
	authpassport,
	auth.required,
	updateBook
	/*
  #swagger.tags = ['Books'];
  */
);
router.delete(
	"/id/:id",
	authpassport,
	auth.required,
	deleteBook
	/*
  #swagger.tags = ['Books'];
  */
);

module.exports = router;
