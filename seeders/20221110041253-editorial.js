'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Editorial', [{"id":1,"name":"Great white pelican","country":"Brazil","editorial_desc":"Programmable radical standardization","createdAt":new Date(),"updatedAt":new Date()},
    {"id":2,"name":"American bighorn sheep","country":"Brazil","editorial_desc":"Object-based demand-driven open system","createdAt":new Date(),"updatedAt":new Date()},
    {"id":3,"name":"Dark-winged trumpeter","country":"United States","editorial_desc":"Triple-buffered zero administration extranet","createdAt":new Date(),"updatedAt":new Date()},
    {"id":4,"name":"Southern sea lion","country":"Brazil","editorial_desc":"Total mobile project","createdAt":new Date(),"updatedAt":new Date()},
    {"id":5,"name":"Blue catfish","country":"Brazil","editorial_desc":"Up-sized intermediate open system","createdAt":new Date(),"updatedAt":new Date()},
    {"id":6,"name":"Giant heron","country":"Canada","editorial_desc":"Enterprise-wide solution-oriented secured line","createdAt":new Date(),"updatedAt":new Date()},
    {"id":7,"name":"Yellow-rumped siskin","country":"Brazil","editorial_desc":"Function-based full-range framework","createdAt":new Date(),"updatedAt":new Date()},
    {"id":8,"name":"White-winged black tern","country":"Argentina","editorial_desc":"Sharable coherent concept","createdAt":new Date(),"updatedAt":new Date()},
    {"id":9,"name":"South American sea lion","country":"France","editorial_desc":"Robust heuristic hardware","createdAt":new Date(),"updatedAt":new Date()},
    {"id":10,"name":"Cat, cape wild","country":"Brazil","editorial_desc":"Multi-channelled well-modulated adapter","createdAt":new Date(),"updatedAt":new Date()},
    {"id":11,"name":"Waxbill, black-cheeked","country":"Canada","editorial_desc":"Cross-group impactful monitoring","createdAt":new Date(),"updatedAt":new Date()},
    {"id":12,"name":"Azara's zorro","country":"Brazil","editorial_desc":"Stand-alone 24/7 challenge","createdAt":new Date(),"updatedAt":new Date()},
    {"id":13,"name":"Pocket gopher (unidentified)","country":"Chile","editorial_desc":"Sharable exuding parallelism","createdAt":new Date(),"updatedAt":new Date()},
    {"id":14,"name":"Swamp deer","country":"United States","editorial_desc":"Cross-platform reciprocal challenge","createdAt":new Date(),"updatedAt":new Date()},
    {"id":15,"name":"Crane, black-crowned","country":"Brazil","editorial_desc":"Future-proofed hybrid solution","createdAt":new Date(),"updatedAt":new Date()},
    {"id":16,"name":"Red meerkat","country":"Brazil","editorial_desc":"Versatile bottom-line forecast","createdAt":new Date(),"updatedAt":new Date()},
    {"id":17,"name":"Woodcock, american","country":"France","editorial_desc":"User-centric needs-based hierarchy","createdAt":new Date(),"updatedAt":new Date()},
    {"id":18,"name":"Green vine snake","country":"France","editorial_desc":"Devolved optimizing methodology","createdAt":new Date(),"updatedAt":new Date()},
    {"id":19,"name":"Paca","country":"Brazil","editorial_desc":"Streamlined multi-tasking forecast","createdAt":new Date(),"updatedAt":new Date()},
    {"id":20,"name":"Tiger snake","country":"Mexico","editorial_desc":"Multi-lateral asymmetric complexity","createdAt":new Date(),"updatedAt":new Date()},
    {"id":21,"name":"Buttermilk snake","country":"United States","editorial_desc":"Cross-platform actuating hub","createdAt":new Date(),"updatedAt":new Date()},
    {"id":22,"name":"Killer whale","country":"France","editorial_desc":"Reduced needs-based knowledge base","createdAt":new Date(),"updatedAt":new Date()},
    {"id":23,"name":"Fringe-eared oryx","country":"United States","editorial_desc":"Right-sized web-enabled policy","createdAt":new Date(),"updatedAt":new Date()},
    {"id":24,"name":"Heron, goliath","country":"Brazil","editorial_desc":"Focused 6th generation software","createdAt":new Date(),"updatedAt":new Date()},
    {"id":25,"name":"Small-toothed palm civet","country":"Brazil","editorial_desc":"Configurable multi-tasking pricing structure","createdAt":new Date(),"updatedAt":new Date()}], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Editorial', null, {});
  }
};
