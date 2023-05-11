const router = require('express').Router()
const Books = require('../models/books')
//  const db = require('../models')
const books = require('../models/books')

// router.get('/seed', (req, res) => {
//     books.insertMany([{
//         "title": "The Shinobi Initiative",
//         "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//         "year": 2014,
//         "quantity": 10,
//         "imageURL": "https://imgur.com/LEqsHy5.jpeg"
//       },
//       {
//         "title": "Tess the Wonder Dog",
//         "description": "The tale of a dog who gets super powers",
//         "year": 2007,
//         "quantity": 3,
//         "imageURL": "https://imgur.com/cEJmGKV.jpg"
//       },
//       {
//         "title": "The Annals of Arathrae",
//         "description": "This anthology tells the intertwined narratives of six fairy tales.",
//         "year": 2016,
//         "quantity": 8,
//         "imageURL": "https://imgur.com/VGyUtrr.jpeg"
//       },
//       {
//         "title": "Wâˆ€RP",
//         "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
//         "year": 2010,
//         "quantity": 4,
//         "imageURL": "https://imgur.com/qYLKtPH.jpeg"
//       }])
//         .then(res.status(200).json({
//             message: 'Seed successful'
//         }))
//         .catch(res.status(400).json({
//             message: 'Seed unsuccessful'
//         }))
// })

//SHOW
router.get('/id', (req,res) => {
    let id = req.params.id
    Books.findByIdAndUpdate(id, req.body, {new: true})
    .then(updatedBook => {
        console.log(updatedBook)
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

//Error 404
router.get('/', (req, res) => {
    books.find()
    .then(places => {
        res.send(places)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})



module.exports = router