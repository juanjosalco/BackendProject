"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Editorial",
			[
				{
					id: 1,
					name: "Thoughtmix",
					country: "Indonesia",
					editorial_desc:
						"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
				},
				{
					id: 2,
					name: "Jayo",
					country: "Malta",
					editorial_desc:
						"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
				},
				{
					id: 3,
					name: "Babbleblab",
					country: "Chile",
					editorial_desc:
						"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
				},
				{
					id: 4,
					name: "DabZ",
					country: "Russia",
					editorial_desc:
						"Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
				},
				{
					id: 5,
					name: "Oyope",
					country: "Egypt",
					editorial_desc:
						"Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
				},
				{
					id: 6,
					name: "Browsetype",
					country: "Morocco",
					editorial_desc:
						"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
				},
				{
					id: 7,
					name: "Voonte",
					country: "Indonesia",
					editorial_desc:
						"Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
				},
				{
					id: 8,
					name: "Brainsphere",
					country: "Brazil",
					editorial_desc:
						"Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
				},
				{
					id: 9,
					name: "Yozio",
					country: "Czech Republic",
					editorial_desc: "Nulla ut erat id mauris vulputate elementum.",
				},
				{
					id: 10,
					name: "Divanoodle",
					country: "China",
					editorial_desc:
						"Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
				},
				{
					id: 11,
					name: "Gabtype",
					country: "China",
					editorial_desc:
						"Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
				},
				{
					id: 12,
					name: "Yacero",
					country: "Indonesia",
					editorial_desc:
						"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
				},
				{
					id: 13,
					name: "Layo",
					country: "Poland",
					editorial_desc:
						"Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
				},
				{
					id: 14,
					name: "Kanoodle",
					country: "France",
					editorial_desc:
						"Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
				},
				{
					id: 15,
					name: "Feedbug",
					country: "Portugal",
					editorial_desc: "Nunc rhoncus dui vel sem. Sed sagittis.",
				},
				{
					id: 16,
					name: "Quimm",
					country: "Argentina",
					editorial_desc:
						"Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
				},
				{
					id: 17,
					name: "JumpXS",
					country: "Malaysia",
					editorial_desc: "In hac habitasse platea dictumst.",
				},
				{
					id: 18,
					name: "Meemm",
					country: "Pakistan",
					editorial_desc: "Aenean fermentum.",
				},
				{
					id: 19,
					name: "Feedfire",
					country: "Germany",
					editorial_desc: "Suspendisse potenti.",
				},
				{
					id: 20,
					name: "Oyope",
					country: "Japan",
					editorial_desc:
						"Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
				},
				{
					id: 21,
					name: "Skimia",
					country: "Poland",
					editorial_desc:
						"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
				},
				{
					id: 22,
					name: "Oyonder",
					country: "China",
					editorial_desc:
						"Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
				},
				{
					id: 23,
					name: "Yakijo",
					country: "Indonesia",
					editorial_desc: "Integer ac leo. Pellentesque ultrices mattis odio.",
				},
				{
					id: 24,
					name: "Gigabox",
					country: "Russia",
					editorial_desc:
						"Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
				},
				{
					id: 25,
					name: "Rooxo",
					country: "Indonesia",
					editorial_desc:
						"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Editorial", null, {});
	},
};
