const router = require('express').Router()


// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Nara Noodles',
        city: 'Salem',
        state: 'MA',
        cuisines: 'Japanese, Thai',
        pic: '/images/japanese-res.jpg'
      }, {
        name: 'Java and Javascript',
        city: 'Vegas',
        state: 'NV',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-shop.jpg'
      }]
      
    res.render('places/index', { places })
})
module.exports = router
