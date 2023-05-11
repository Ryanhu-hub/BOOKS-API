const router = require('express').Router()
const Books = require('../models/books')
//  const db = require('../models')
const books = require('../models/books')

//Index
router.get('/', (req, res) => {
    Books.find()
    .then(foundBooks => {
        res.send(foundBooks)
    })
    .catch(err => {
        res.send(err)
    })
})

//SHOW
router.get('/id', (req,res) => {
    let id = req.params.id
    Books.findByIdAndUpdate(id, req.body, {new: true})
    .then(foundBook => {
        console.log(foundBook)
        res.redirect('/books')
    })
})

// CREATE
router.post('/', (req, res) => {
    books.create(req.body)
    res.redirect('/books')

  })

//Edit Method
router.put('/id', (req, res) => {
    Books.findByIdAndUpdate(id, req.body, {new: true})
    .then(updatedBook => {
        console.log(updatedBook)
        res.redirect(`/books/${id}`)
    })
    .catch(err => {
        console.log('err', err)
    })
})

//Delete
router.delete('/:id', (req, res) => {
    let id = req.params.id
    books.findByIdAndDelete(id)
    .then(deletedBook => {
        res.status(303).redirect('/books')
    })
})

// //Error 404
// router.get('/', (req, res) => {
//     books.find()
//     .then(places => {
//         res.send(places)
//     })
//     .catch(err => {
//         console.log('err', err)
//         res.render('error404')
//     })
// })



module.exports = router