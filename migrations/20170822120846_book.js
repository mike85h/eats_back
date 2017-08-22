
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', (table) =>{
    table.increments();
    table.text('title').notNullable().unique();
    table.text('genre').notNullable();
    table.text('description');
    table.text('coverURL');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book');
};
