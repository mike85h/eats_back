const knex = require('./knex')

module.exports = {
  getBooks: function() {
    return knex('book').select('*')
  },
  getBooksById: function(id) {
    return knex('book').select().where('id', id)
  },
  deleteBooksById: function(id) {
    return knex('book').delete().where('id',id)
  },
  getSAuthorsById: function(id) {
    return knex('secrets')
      .select('id', 'secret')
      .where('user_id', id)
  },
  getAuthorsByBookId: function(book_id){
    return knex('book').select('author.*')
      .join('book_author', 'book.id', 'book_author.book_id')
      .join('author', 'author.id', 'book_author.author.id')
      .where('book.id', 'book_id')
  }
}
