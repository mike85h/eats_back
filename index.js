const express = require('express')
const knex = require('./db/knex.js')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')
const bodyParser = require('body-parser')
const queries = require('./db/queries')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//GET ALL BOOKS
app.get('/books', (req,res)=>{
  // knex('book').select('*')
  queries.getBooks()
  .then((books)=>{
    res.json(books);
  })
  .catch(error => res.json({ error }))
})

//GET BOOKS BY ID
app.get('/books/:id', (req,res)=>{
  queries.getBooksById(req.params.id)
  .then((booksById)=>{
    res.json(booksById);
  })
  .catch(error => res.json({error}))
})

//DELETE A BOOK
app.delete('/books/:id', (req, res)=>{
  queries.deleteBookById(req.params.id)
  .then(id=>{
    console.log(id)
  })
  .catch(error => res.json({error}))
})

app.post('/books', (req, res)=>{

})

app.put('/books/:id', (req, res)=>{

})

app.get('/authors', (req, res) =>{
  knex('author').select('*')
  .then((authors)=>{
    res.json(authors);
  })
})

module.exports = app
app.listen(port)
