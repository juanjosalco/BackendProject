'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Category', [{"id":1,"genre":"Cougar","description":"Open-source transitional knowledge base","createdAt":new Date(),"updatedAt":new Date()},
    {"id":2,"genre":"Jackrabbit, white-tailed","description":"Ameliorated interactive groupware","createdAt":new Date(),"updatedAt":new Date()},
    {"id":3,"genre":"Bushbaby, large-eared","description":"Networked composite task-force","createdAt":new Date(),"updatedAt":new Date()},
    {"id":4,"genre":"Black-winged stilt","description":"Grass-roots user-facing encryption","createdAt":new Date(),"updatedAt":new Date()},
    {"id":5,"genre":"Thrasher, curve-billed","description":"Polarised maximized customer loyalty","createdAt":new Date(),"updatedAt":new Date()},
    {"id":6,"genre":"Cormorant, javanese","description":"Enhanced solution-oriented matrix","createdAt":new Date(),"updatedAt":new Date()},
    {"id":7,"genre":"Capuchin, brown","description":"Expanded neutral Graphical User Interface","createdAt":new Date(),"updatedAt":new Date()},
    {"id":8,"genre":"Dove, laughing","description":"Enterprise-wide web-enabled alliance","createdAt":new Date(),"updatedAt":new Date()},
    {"id":9,"genre":"Common palm civet","description":"Multi-channelled real-time interface","createdAt":new Date(),"updatedAt":new Date()},
    {"id":10,"genre":"Carmine bee-eater","description":"Object-based intermediate firmware","createdAt":new Date(),"updatedAt":new Date()},
    {"id":11,"genre":"Possum, pygmy","description":"Profound 6th generation challenge","createdAt":new Date(),"updatedAt":new Date()},
    {"id":12,"genre":"Lizard, desert spiny","description":"Monitored regional array","createdAt":new Date(),"updatedAt":new Date()},
    {"id":13,"genre":"Cormorant, large","description":"Monitored 3rd generation emulation","createdAt":new Date(),"updatedAt":new Date()},
    {"id":14,"genre":"Pine siskin","description":"Visionary motivating benchmark","createdAt":new Date(),"updatedAt":new Date()},
    {"id":15,"genre":"Pheasant, common","description":"Automated reciprocal attitude","createdAt":new Date(),"updatedAt":new Date()},
    {"id":16,"genre":"Elephant, asian","description":"Public-key cohesive matrix","createdAt":new Date(),"updatedAt":new Date()},
    {"id":17,"genre":"Nubian bee-eater","description":"Cross-platform object-oriented system engine","createdAt":new Date(),"updatedAt":new Date()},
    {"id":18,"genre":"Common langur","description":"Triple-buffered transitional application","createdAt":new Date(),"updatedAt":new Date()},
    {"id":19,"genre":"Common boubou shrike","description":"Advanced fault-tolerant leverage","createdAt":new Date(),"updatedAt":new Date()},
    {"id":20,"genre":"Arctic lemming","description":"Persevering regional paradigm","createdAt":new Date(),"updatedAt":new Date()},
    {"id":21,"genre":"Bee-eater, carmine","description":"Monitored well-modulated synergy","createdAt":new Date(),"updatedAt":new Date()},
    {"id":22,"genre":"Squirrel, golden-mantled ground","description":"Enhanced hybrid methodology","createdAt":new Date(),"updatedAt":new Date()},
    {"id":23,"genre":"Stork, saddle-billed","description":"Managed well-modulated migration","createdAt":new Date(),"updatedAt":new Date()},
    {"id":24,"genre":"Eastern diamondback rattlesnake","description":"Polarised actuating leverage","createdAt":new Date(),"updatedAt":new Date()},
    {"id":25,"genre":"Sage grouse","description":"Synchronised bandwidth-monitored encoding","createdAt":new Date(),"updatedAt":new Date()}], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Category', null, {});
  }
};
