
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_author', (table)=>{
    table.increments();
    table.integer('book_id').references('id').inTable('book').notNull().onDelete('CASCADE');
    table.integer('author_id').references('id').inTable('author').notNull().onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book_author');
};
