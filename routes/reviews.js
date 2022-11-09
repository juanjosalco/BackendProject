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

router.get("/", getReviews);

router.get("/:id", getReview);

router.post(
	"/",
	/* authpassport,
auth.required,*/ createReview
);

router.patch(
	"/:id",
	/*authpassport,
auth.required,*/ updateReview
);

router.delete(
	"/:id",
	/*authpassport,
auth.isAdmin,*/ deleteReview
);

module.exports = router;
