'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('LibraryUser', [{"id":1,"LibraryId":27,"UserId":8,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":2,"LibraryId":20,"UserId":47,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":3,"LibraryId":10,"UserId":1,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":4,"LibraryId":26,"UserId":17,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":5,"LibraryId":15,"UserId":17,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":6,"LibraryId":21,"UserId":28,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":7,"LibraryId":6,"UserId":28,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":8,"LibraryId":18,"UserId":46,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":9,"LibraryId":21,"UserId":13,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":10,"LibraryId":38,"UserId":28,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":11,"LibraryId":17,"UserId":32,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":12,"LibraryId":38,"UserId":27,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":13,"LibraryId":8,"UserId":10,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":14,"LibraryId":20,"UserId":42,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":15,"LibraryId":10,"UserId":11,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":16,"LibraryId":18,"UserId":18,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":17,"LibraryId":39,"UserId":41,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":18,"LibraryId":32,"UserId":35,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":19,"LibraryId":18,"UserId":25,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":20,"LibraryId":16,"UserId":11,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":21,"LibraryId":15,"UserId":16,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":22,"LibraryId":22,"UserId":24,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":23,"LibraryId":26,"UserId":46,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":24,"LibraryId":8,"UserId":30,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":25,"LibraryId":5,"UserId":17,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":26,"LibraryId":43,"UserId":39,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":27,"LibraryId":35,"UserId":34,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":28,"LibraryId":25,"UserId":49,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":29,"LibraryId":31,"UserId":15,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":30,"LibraryId":40,"UserId":44,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":31,"LibraryId":42,"UserId":22,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":32,"LibraryId":26,"UserId":6,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":33,"LibraryId":20,"UserId":23,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":34,"LibraryId":26,"UserId":12,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":35,"LibraryId":3,"UserId":44,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":36,"LibraryId":40,"UserId":21,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":37,"LibraryId":2,"UserId":3,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":38,"LibraryId":27,"UserId":32,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":39,"LibraryId":45,"UserId":9,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":40,"LibraryId":15,"UserId":17,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":41,"LibraryId":34,"UserId":20,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":42,"LibraryId":34,"UserId":28,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":43,"LibraryId":28,"UserId":19,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":44,"LibraryId":28,"UserId":4,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":45,"LibraryId":40,"UserId":2,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":46,"LibraryId":6,"UserId":40,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":47,"LibraryId":29,"UserId":19,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":48,"LibraryId":27,"UserId":44,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":49,"LibraryId":50,"UserId":36,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":50,"LibraryId":12,"UserId":14,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":51,"LibraryId":25,"UserId":35,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":52,"LibraryId":12,"UserId":31,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":53,"LibraryId":20,"UserId":4,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":54,"LibraryId":15,"UserId":30,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":55,"LibraryId":7,"UserId":33,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":56,"LibraryId":20,"UserId":9,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":57,"LibraryId":14,"UserId":35,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":58,"LibraryId":30,"UserId":48,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":59,"LibraryId":7,"UserId":47,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":60,"LibraryId":7,"UserId":5,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":61,"LibraryId":35,"UserId":50,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":62,"LibraryId":25,"UserId":1,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":63,"LibraryId":14,"UserId":1,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":64,"LibraryId":15,"UserId":6,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":65,"LibraryId":47,"UserId":31,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":66,"LibraryId":44,"UserId":27,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":67,"LibraryId":3,"UserId":16,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":68,"LibraryId":44,"UserId":18,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":69,"LibraryId":41,"UserId":23,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":70,"LibraryId":5,"UserId":27,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":71,"LibraryId":9,"UserId":6,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":72,"LibraryId":32,"UserId":35,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":73,"LibraryId":28,"UserId":1,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":74,"LibraryId":13,"UserId":50,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":75,"LibraryId":41,"UserId":15,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":76,"LibraryId":5,"UserId":3,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":77,"LibraryId":28,"UserId":34,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":78,"LibraryId":22,"UserId":6,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":79,"LibraryId":18,"UserId":27,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":80,"LibraryId":21,"UserId":17,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":81,"LibraryId":7,"UserId":49,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":82,"LibraryId":30,"UserId":48,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":83,"LibraryId":23,"UserId":30,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":84,"LibraryId":48,"UserId":21,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":85,"LibraryId":3,"UserId":30,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":86,"LibraryId":20,"UserId":1,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":87,"LibraryId":50,"UserId":15,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":88,"LibraryId":46,"UserId":4,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":89,"LibraryId":45,"UserId":47,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":90,"LibraryId":18,"UserId":39,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":91,"LibraryId":2,"UserId":30,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":92,"LibraryId":14,"UserId":35,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":93,"LibraryId":31,"UserId":41,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":94,"LibraryId":16,"UserId":30,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":95,"LibraryId":30,"UserId":42,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":96,"LibraryId":24,"UserId":8,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":97,"LibraryId":26,"UserId":33,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":98,"LibraryId":46,"UserId":12,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":99,"LibraryId":32,"UserId":4,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":100,"LibraryId":4,"UserId":18,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":101,"LibraryId":37,"UserId":39,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":102,"LibraryId":17,"UserId":17,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":103,"LibraryId":49,"UserId":45,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":104,"LibraryId":16,"UserId":44,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":105,"LibraryId":26,"UserId":17,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":106,"LibraryId":50,"UserId":50,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":107,"LibraryId":13,"UserId":42,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":108,"LibraryId":20,"UserId":24,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":109,"LibraryId":41,"UserId":33,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":110,"LibraryId":13,"UserId":1,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":111,"LibraryId":14,"UserId":24,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":112,"LibraryId":24,"UserId":39,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":113,"LibraryId":47,"UserId":11,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":114,"LibraryId":7,"UserId":30,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":115,"LibraryId":12,"UserId":26,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":116,"LibraryId":10,"UserId":26,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":117,"LibraryId":27,"UserId":12,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":118,"LibraryId":49,"UserId":4,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":119,"LibraryId":20,"UserId":34,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":120,"LibraryId":41,"UserId":46,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":121,"LibraryId":33,"UserId":28,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":122,"LibraryId":26,"UserId":14,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":123,"LibraryId":45,"UserId":4,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":124,"LibraryId":42,"UserId":21,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":125,"LibraryId":24,"UserId":17,"createdAt":new Date(),"updatedAt":new Date()}], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('LibraryUser', null, {});
  }
};
