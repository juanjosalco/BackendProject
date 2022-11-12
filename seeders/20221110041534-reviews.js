'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [{"id":1,"review":"Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.","rating":2.2,"user_id":37,"book_id":139,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":2,"review":"Cras non velit nec nisi vulputate nonummy.","rating":4.2,"user_id":25,"book_id":47,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":3,"review":"Maecenas rhoncus aliquam lacus.","rating":2.7,"user_id":6,"book_id":197,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":4,"review":"Aenean fermentum.","rating":1.0,"user_id":43,"book_id":20,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":5,"review":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.","rating":1.9,"user_id":21,"book_id":93,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":6,"review":"Aenean fermentum.","rating":3.6,"user_id":46,"book_id":43,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":7,"review":"Etiam justo. Etiam pretium iaculis justo.","rating":4.1,"user_id":11,"book_id":44,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":8,"review":"Suspendisse accumsan tortor quis turpis. Sed ante.","rating":1.6,"user_id":24,"book_id":29,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":9,"review":"Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","rating":4.1,"user_id":12,"book_id":69,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":10,"review":"Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","rating":3.8,"user_id":46,"book_id":196,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":11,"review":"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.","rating":2.2,"user_id":34,"book_id":53,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":12,"review":"Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","rating":4.1,"user_id":22,"book_id":49,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":13,"review":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.","rating":3.1,"user_id":9,"book_id":194,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":14,"review":"Nulla facilisi.","rating":4.1,"user_id":40,"book_id":45,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":15,"review":"Morbi non quam nec dui luctus rutrum. Nulla tellus.","rating":2.2,"user_id":40,"book_id":77,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":16,"review":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.","rating":4.7,"user_id":10,"book_id":2,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":17,"review":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.","rating":3.8,"user_id":28,"book_id":96,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":18,"review":"Proin risus.","rating":2.3,"user_id":28,"book_id":75,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":19,"review":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.","rating":1.7,"user_id":34,"book_id":138,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":20,"review":"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.","rating":1.9,"user_id":20,"book_id":98,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":21,"review":"Nullam molestie nibh in lectus. Pellentesque at nulla.","rating":4.8,"user_id":41,"book_id":108,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":22,"review":"Aliquam erat volutpat. In congue.","rating":3.8,"user_id":27,"book_id":93,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":23,"review":"Vestibulum rutrum rutrum neque.","rating":4.3,"user_id":6,"book_id":21,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":24,"review":"Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","rating":4.5,"user_id":13,"book_id":51,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":25,"review":"Aliquam non mauris. Morbi non lectus.","rating":5.0,"user_id":23,"book_id":134,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":26,"review":"Etiam vel augue.","rating":2.3,"user_id":47,"book_id":195,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":27,"review":"Proin eu mi. Nulla ac enim.","rating":4.6,"user_id":33,"book_id":172,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":28,"review":"Phasellus sit amet erat. Nulla tempus.","rating":4.5,"user_id":11,"book_id":14,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":29,"review":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","rating":2.6,"user_id":17,"book_id":78,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":30,"review":"Integer a nibh. In quis justo.","rating":4.0,"user_id":22,"book_id":37,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":31,"review":"Phasellus in felis.","rating":2.5,"user_id":40,"book_id":38,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":32,"review":"In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","rating":3.4,"user_id":6,"book_id":20,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":33,"review":"Fusce consequat.","rating":1.4,"user_id":44,"book_id":126,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":34,"review":"In congue. Etiam justo.","rating":3.1,"user_id":22,"book_id":60,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":35,"review":"Nulla suscipit ligula in lacus.","rating":2.2,"user_id":13,"book_id":70,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":36,"review":"Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","rating":4.6,"user_id":15,"book_id":53,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":37,"review":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.","rating":2.0,"user_id":14,"book_id":183,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":38,"review":"Integer ac neque. Duis bibendum.","rating":3.9,"user_id":50,"book_id":166,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":39,"review":"Proin interdum mauris non ligula pellentesque ultrices.","rating":5.0,"user_id":9,"book_id":181,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":40,"review":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","rating":1.0,"user_id":12,"book_id":190,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":41,"review":"Curabitur at ipsum ac tellus semper interdum.","rating":4.9,"user_id":28,"book_id":92,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":42,"review":"Morbi ut odio.","rating":3.6,"user_id":49,"book_id":157,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":43,"review":"Integer tincidunt ante vel ipsum.","rating":5.0,"user_id":33,"book_id":190,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":44,"review":"Proin at turpis a pede posuere nonummy. Integer non velit.","rating":1.6,"user_id":19,"book_id":20,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":45,"review":"In eleifend quam a odio.","rating":2.4,"user_id":21,"book_id":33,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":46,"review":"Duis at velit eu est congue elementum. In hac habitasse platea dictumst.","rating":1.5,"user_id":1,"book_id":74,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":47,"review":"Proin at turpis a pede posuere nonummy.","rating":4.7,"user_id":50,"book_id":79,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":48,"review":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.","rating":3.0,"user_id":15,"book_id":106,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":49,"review":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","rating":3.9,"user_id":18,"book_id":160,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":50,"review":"Nunc purus. Phasellus in felis.","rating":3.0,"user_id":33,"book_id":38,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":51,"review":"Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.","rating":4.8,"user_id":1,"book_id":50,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":52,"review":"Nulla nisl.","rating":1.6,"user_id":38,"book_id":123,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":53,"review":"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","rating":4.8,"user_id":20,"book_id":21,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":54,"review":"Cras non velit nec nisi vulputate nonummy.","rating":1.8,"user_id":49,"book_id":123,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":55,"review":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.","rating":1.4,"user_id":41,"book_id":14,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":56,"review":"Nulla ac enim.","rating":4.0,"user_id":36,"book_id":177,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":57,"review":"In congue.","rating":3.6,"user_id":42,"book_id":127,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":58,"review":"Etiam pretium iaculis justo.","rating":2.8,"user_id":46,"book_id":107,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":59,"review":"Pellentesque ultrices mattis odio.","rating":4.7,"user_id":47,"book_id":32,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":60,"review":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.","rating":4.3,"user_id":3,"book_id":200,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":61,"review":"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.","rating":3.8,"user_id":36,"book_id":33,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":62,"review":"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.","rating":1.8,"user_id":11,"book_id":91,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":63,"review":"Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","rating":3.6,"user_id":24,"book_id":177,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":64,"review":"Donec semper sapien a libero.","rating":2.2,"user_id":32,"book_id":105,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":65,"review":"Proin at turpis a pede posuere nonummy. Integer non velit.","rating":4.4,"user_id":20,"book_id":17,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":66,"review":"Nunc purus.","rating":5.0,"user_id":47,"book_id":84,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":67,"review":"Donec ut dolor.","rating":3.4,"user_id":43,"book_id":123,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":68,"review":"Pellentesque eget nunc.","rating":2.0,"user_id":48,"book_id":7,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":69,"review":"Nunc rhoncus dui vel sem. Sed sagittis.","rating":1.1,"user_id":3,"book_id":31,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":70,"review":"Quisque ut erat. Curabitur gravida nisi at nibh.","rating":4.0,"user_id":36,"book_id":87,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":71,"review":"Vivamus in felis eu sapien cursus vestibulum.","rating":4.5,"user_id":8,"book_id":13,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":72,"review":"Donec quis orci eget orci vehicula condimentum.","rating":3.0,"user_id":37,"book_id":5,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":73,"review":"Donec vitae nisi.","rating":1.9,"user_id":25,"book_id":133,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":74,"review":"Donec quis orci eget orci vehicula condimentum.","rating":3.4,"user_id":46,"book_id":148,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":75,"review":"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","rating":2.3,"user_id":24,"book_id":120,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":76,"review":"Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.","rating":4.8,"user_id":2,"book_id":121,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":77,"review":"Phasellus in felis. Donec semper sapien a libero.","rating":1.6,"user_id":13,"book_id":33,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":78,"review":"Mauris ullamcorper purus sit amet nulla.","rating":4.2,"user_id":1,"book_id":155,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":79,"review":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.","rating":3.0,"user_id":43,"book_id":49,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":80,"review":"In hac habitasse platea dictumst. Etiam faucibus cursus urna.","rating":2.1,"user_id":3,"book_id":112,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":81,"review":"Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.","rating":1.3,"user_id":20,"book_id":139,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":82,"review":"Proin risus. Praesent lectus.","rating":4.9,"user_id":31,"book_id":35,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":83,"review":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.","rating":3.8,"user_id":1,"book_id":137,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":84,"review":"Sed accumsan felis.","rating":1.8,"user_id":27,"book_id":73,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":85,"review":"Ut tellus. Nulla ut erat id mauris vulputate elementum.","rating":3.9,"user_id":48,"book_id":118,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":86,"review":"Sed ante. Vivamus tortor.","rating":3.7,"user_id":39,"book_id":91,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":87,"review":"Integer a nibh. In quis justo.","rating":3.0,"user_id":34,"book_id":44,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":88,"review":"Proin risus.","rating":2.3,"user_id":31,"book_id":8,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":89,"review":"Nulla suscipit ligula in lacus.","rating":1.0,"user_id":22,"book_id":147,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":90,"review":"Proin risus.","rating":1.1,"user_id":20,"book_id":173,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":91,"review":"Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","rating":2.8,"user_id":40,"book_id":43,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":92,"review":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.","rating":1.6,"user_id":36,"book_id":132,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":93,"review":"Integer a nibh.","rating":2.0,"user_id":48,"book_id":67,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":94,"review":"Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","rating":4.6,"user_id":23,"book_id":162,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":95,"review":"Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","rating":2.8,"user_id":11,"book_id":69,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":96,"review":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.","rating":3.0,"user_id":43,"book_id":63,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":97,"review":"Pellentesque viverra pede ac diam.","rating":3.2,"user_id":41,"book_id":151,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":98,"review":"Integer ac leo.","rating":1.9,"user_id":47,"book_id":113,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":99,"review":"Vestibulum sed magna at nunc commodo placerat. Praesent blandit.","rating":4.4,"user_id":15,"book_id":95,"createdAt":new Date(),"updatedAt":new Date()},
    {"id":100,"review":"Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","rating":1.1,"user_id":20,"book_id":61,"createdAt":new Date(),"updatedAt":new Date()}], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};