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
	getLibraries /*
  #swagger.tags = ['Libraries'];
  */
);
router.get(
	"/id/:id",
	authpassport,
	auth.required,
	getLibrary /*
  #swagger.tags = ['Libraries'];
  */
);
router.post(
	"/create",
	authpassport,
	auth.required,
	createLibrary /*
  #swagger.tags = ['Libraries'];
  */
);

router.patch(
	"/id/:id",
	authpassport,
	auth.required,
	updateLibrary /*
  #swagger.tags = ['Libraries'];
  */
);
router.delete(
	"/id/:id",
	authpassport,
	auth.required,
	deleteLibrary /*
  #swagger.tags = ['Libraries'];
  */
);

module.exports = router;
