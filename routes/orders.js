const router = require("express").Router();
const auth = require("../config/auth");
const passport = require("passport");

const authpassport = passport.authenticate("bearer", {
	session: false,
	assignProperty: "user",
});

const {
	createOrder,
	getOrder,
	getOrders,
	updateOrder,
	deleteOrder,
} = require("../controllers/orders");

router.get(
	"/",
	/*authpassport,
auth.required,*/ getOrders
);

router.get(
	"/:id",
	/* authpassport,
auth.required,*/ getOrder
);

router.post(
	"/",
	/*authpassport,
auth.required,*/ createOrder
);

router.patch(
	"/:id",
	/*authpassport,
auth.isAdmin,*/ updateOrder
);

router.delete(
	"/:id",
	/*authpassport,
auth.isAdmin,*/ deleteOrder
);

module.exports = router;
