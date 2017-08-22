
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_author', (table)=>{
    table.increments();
    table.integer('book_id').notNullable();
    table.integer('author_id').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book_author');
};
