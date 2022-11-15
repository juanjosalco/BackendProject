//FromS5
const { Sequelize, DataTypes, Op } = require("sequelize");
const Order = require("../models/orders");
const User = require("../models/users");

async function createOrder(req, res) {
	return await Order.create(req.body)
		.then((order) => {
			// if payment amount or user id not filled
			if (!order.payment_amount || !order.user_id) {
				return res.status(404).send({
					message: "were missing some information",
				});
			}
			// if user id is not found
			User.findByPk(order.user_id).then((user) => {
				if (!user) {
					return res.status(404).send({
						message: "user not found",
					});
				}
			});
			// if payment amount is not a number
			if (isNaN(order.payment_amount)) {
				return res.status(404).send({
					message: "payment amount must be a number",
				});
			}
			// if payment amount is less than 0
			if (order.payment_amount < 0) {
				return res.status(404).send({
					message: "payment amount cannot be negative",
				});
			}

			return res
				.status(200)
				.send({ message: "order successfully created", order });
		})
		.catch((error) =>
			res
				.status(400)
				.send({ info: "error in request", error: "description" + error })
		);
}

async function getOrder(req, res) {
	return await Order.findByPk(req.params.id)
		.then((order) => {
			if (!order) {
				return res.status(404).send({
					message: "Order not found",
				});
			}
			return res
				.status(200)
				.send({ message: "Heres the order you were looking for", order });
		})
		.catch((error) =>
			res
				.status(400)
				.send({ info: "error in request", error: "description" + error })
		);
}

async function getOrders(req, res) {
	return await Order.findAll()
		.then((orders) => {
			if (!orders) {
				return res.status(404).send({
					message: "No orders found",
				});
			}
			return res
				.status(200)
				.send({ message: "Heres the orders you were looking for", orders });
		})
		.catch((error) =>
			res
				.status(400)
				.send({ info: "error in request", error: "description" + error })
		);
}

async function updateOrder(req, res) {
	return await Order.findByPk(req.params.id)
		.then((order) => {
			if (!order) {
				return res.status(404).send({
					message: "Order not found",
				});
			}
			return order
				.update({
					...req.body,
				})
				.then(() =>
					res.status(200).send({ message: "order successfully updated", order })
				)
				.catch((error) =>
					res
						.status(400)
						.send({ info: "error in request", error: "description" + error })
				);
		})
		.catch((error) =>
			res
				.status(400)
				.send({ info: "error in request", error: "description" + error })
		);
}

async function deleteOrder(req, res) {
	return await Order.findByPk(req.params.id)
		.then((order) => {
			if (!order) {
				return res.status(404).send({
					message: "Order not found",
				});
			}
			return order
				.destroy()
				.then(() =>
					res.status(200).send({ message: "order successfully deleted", order })
				)
				.catch((error) =>
					res
						.status(400)
						.send({ info: "error in request", error: "description" + error })
				);
		})
		.catch((error) =>
			res
				.status(400)
				.send({ info: "error in request", error: "description" + error })
		);
}

module.exports = {
	createOrder,
	getOrder,
	getOrders,
	updateOrder,
	deleteOrder,
};
