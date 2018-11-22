const express = require('express');
const Restaurant = require('../models/Restaurant')
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {

  Restaurant.find().then(restaurants => {
    res.render('index',{restaurants:JSON.stringify(restaurants)});
  })
});

router.get('/create', (req, res, next) => {
  res.render('createRestaurant')
});


router.post('/create', (req, res, next) => {
  const {name, description, latitude, longitude } = req.body;
  Restaurant.add(name, description, latitude, longitude).then(() => {
    res.redirect('/')
  })
});



module.exports = router;
