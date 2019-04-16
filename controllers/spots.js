let express = require('express')
let db = require('../models')
let router = express.Router()

router.get('/', (req, res) => {
  db.spot.findAll()
  .then((spots) => {
    res.render('spots/index', { spots })
  })
  .catch((err) => {
    console.log('Error in GET /spots', err)
    res.render('404')
  })
})

router.post('/', (req, res) => {
  console.log(req.body)
  db.spot.create(req.body)
  .then((createdSpot) => {
    res.redirect('/spots/' + createdSpot.id)
  })
  .catch((err) => {
    console.log('Error in POST /spots', err)
    res.render('404')
  })
})

router.get('/new', (req, res) => {
  res.render('spots/new')
})

router.get('/:id', (req, res) => {
  db.spot.findOne({
    where: { id: req.params.id },
    include: [ db.review ]
  })
  .then((foundSpot) => {
    res.render('spots/show', {
      spot: foundSpot
    })
  })
  .catch((err) => {
    console.log('Error in GET /spots/:id', err)
    res.render('404')
  })
})

module.exports = router









