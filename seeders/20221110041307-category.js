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
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					genre: "adventure",
					description:
						"Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement. Some adventure fiction also satisfies the literary definition of romance fiction.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 3,
					genre: "animals",
					description: "Stories containtion animals",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 4,
					genre: "childrens",
					description: "books made with kids in mind",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 5,
					genre: "classics",
					description: "timeless books with meanful thems",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 6,
					genre: "contemporary",
					description: "books with moden themes",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 7,
					genre: "drama",
					description: "Mandatory mission-critical circuit",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 8,
					genre: "fantasy",
					description: "Re-engineered bottom-line help-desk",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 9,
					genre: "fiction",
					description: "Monitored mobile standardization",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 10,
					genre: "historical",
					description: "Secured demand-driven migration",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 11,
					genre: "historical",
					description: "Customer-focused upward-trending complexity",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 12,
					genre: "horror",
					description: "Robust logistical extranet",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 13,
					genre: "humor",
					description: "Customer-focused exuding knowledge base",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 14,
					genre: "literature",
					description: "Persevering directional Graphic Interface",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 15,
					genre: "mystory",
					description: "Up-sized directional capacity",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 16,
					genre: "picture ",
					description: "Persistent contextually-based ability",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 17,
					genre: "plays",
					description: "Face to face mobile moratorium",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 18,
					genre: "politics",
					description: "Focused disintermediate protocol",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 19,
					genre: "romance",
					description: "Organized analyzing product",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 20,
					genre: "school",
					description: "Managed discrete task-force",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 21,
					genre: "sci-fi",
					description: "Quality-focused content-based pricing structure",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 22,
					genre: "teen",
					description: "Exclusive 24 hour time-frame",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 23,
					genre: "thriller",
					description: "Diverse tertiary structure",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 24,
					genre: "war",
					description: "Enterprise-wide global access",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 25,
					genre: "young adult",
					description: "Function-based fault-tolerant analyzer",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Category", null, {});
	},
};
