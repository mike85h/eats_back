
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author',(table) =>{
      table.increments();
      table.text('fname').notNullable();
      table.text('lname').notNullable();
      table.text('bio').notNullable();
      table.text('portraitURL').notNullable();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author');
};
