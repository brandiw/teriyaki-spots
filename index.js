let express = require('express')
let layouts = require('express-ejs-layouts')
let app = express()

app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({ extended: false })) // IMPORTANT: This makes post forms work!

app.use('/reviews', require('./controllers/reviews'))
app.use('/spots', require('./controllers/spots'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(process.env.PORT || 3000)
