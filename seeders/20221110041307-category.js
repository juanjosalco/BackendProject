"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Category",
			[
				{
					id: 1,
					genre: "action",
					description:
						"Action fiction is a form of genre fiction whose subject matter is characterized by emphasis on exciting action sequences. This does not always mean they exclude character development or story-telling.",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 2,
					genre: "adventure",
					description:
						"Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement. Some adventure fiction also satisfies the literary definition of romance fiction.",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 3,
					genre: "animals",
					description: "Stories containtion animals",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 4,
					genre: "childrens",
					description: "books made with kids in mind",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 5,
					genre: "classics",
					description: "timeless books with meanful thems",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 6,
					genre: "contemporary",
					description: "books with moden themes",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 7,
					genre: "drama",
					description: "Mandatory mission-critical circuit",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 8,
					genre: "fantasy",
					description: "Re-engineered bottom-line help-desk",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 9,
					genre: "fiction",
					description: "Monitored mobile standardization",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 10,
					genre: "historical",
					description: "Secured demand-driven migration",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 11,
					genre: "historical",
					description: "Customer-focused upward-trending complexity",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 12,
					genre: "horror",
					description: "Robust logistical extranet",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 13,
					genre: "humor",
					description: "Customer-focused exuding knowledge base",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 14,
					genre: "literature",
					description: "Persevering directional Graphic Interface",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 15,
					genre: "mystory",
					description: "Up-sized directional capacity",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 16,
					genre: "picture ",
					description: "Persistent contextually-based ability",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 17,
					genre: "plays",
					description: "Face to face mobile moratorium",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 18,
					genre: "politics",
					description: "Focused disintermediate protocol",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 19,
					genre: "romance",
					description: "Organized analyzing product",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 20,
					genre: "school",
					description: "Managed discrete task-force",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 21,
					genre: "sci-fi",
					description: "Quality-focused content-based pricing structure",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 22,
					genre: "teen",
					description: "Exclusive 24 hour time-frame",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 23,
					genre: "thriller",
					description: "Diverse tertiary structure",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 24,
					genre: "war",
					description: "Enterprise-wide global access",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
				{
					id: 25,
					genre: "young adult",
					description: "Function-based fault-tolerant analyzer",
					createdAt: Date.now(),
					updatedAt: Date.now(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Category", null, {});
	},
};
