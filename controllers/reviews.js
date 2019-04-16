let express = require('express')
let router = express.Router()
let db = require('../models')

router.post('/', (req, res) => {
  // Make sure that name has a value
  req.body.name = req.body.name || 'Anonymous User'

  // Create the review
  db.review.create(req.body)
  .then((createdReview) => {
    res.redirect('/spots/' + req.body.spotId)
  })
  .catch((err) => {
    console.log('Error in POST /reviews', err)
    res.render('404')
  })
})

module.exports = router
