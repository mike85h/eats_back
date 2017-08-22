
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_author', (table)=>{
    table.increments();
    table.integer('book_id').references('book.id').onDelete('cascade');
    table.integer('author_id').references('author.id').onDelete('cascade');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book_author');
};
