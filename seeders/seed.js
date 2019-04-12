let db = require('../models')

// db.spot.create({
//   name: 'Joy Bento',
//   image: 'https://b.zmtcdn.com/data/reviews_photos/87b/5ad3089585df20579136c61b6267e87b.jpg',
//   address: '214 Madison St, Seattle, WA 98104',
//   neighborhood: 'Downtown',
//   rating: 4.2,
//   specialty: 'Bentos',
//   price: 2,
//   description: 'Do you love to eat out of a parking garage? Have we got the spot for you! Hole-in-the-wall win!'
// })
// .then((createdSpot) => {
//   console.log('Created Joy Bento')
// })

// db.spot.create({
//   name: 'Okinawa Teriyaki',
//   image: 'https://www.seattleweekly.com/wp-content/uploads/2018/11/1186047.jpg',
//   address: '1100 Western Ave, Seattle, WA 98101',
//   neighborhood: 'Downtown',
//   rating: 4.9,
//   specialty: 'Teriyaki Chicken',
//   price: 2,
//   description: 'A bit of a walk, but this one is actually the best if you\'re near the market!'
// })
// .then((createdSpot) => {
//   console.log('Created Okinawa')
//   process.exit()
// })

db.spot.create({
  name: 'I ❤️ Teriyaki',
  image: 'https://b.zmtcdn.com/data/pictures/5/16718515/515edf391f7e48d757d29c41622c418f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  address: '3409 Stone Way N Seattle, WA 98103',
  neighborhood: 'Fremont',
  rating: 4.4,
  specialty: 'Teriyaki Chicken',
  price: 1,
  description: 'It a\'int good, but it\'s cheap and you can eat FOUR meals out of it! Quantity over quality!!!! 😀'
})
.then((createdSpot) => {
  console.log('Created I love teriyaki')
  process.exit()
})
