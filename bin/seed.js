require('dotenv').load();
const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

mongoose.connect(process.env.DBURL, {useNewUrlParser: true}).then(()=> {
  console.log("Connected!");
})

Restaurant.collection.drop();
Restaurant.create([
  {name:"Takos al Pastor", description:"La ostia",location:{type:"Point",coordinates:[40.4189903,-3.7059249]}},
  {name:"Pui's tapas", description:"La ostia",location:{type:"Point",coordinates:[40.4045385,-3.6988189]}},
  {name:"In Crescendo", description:"Muy bordes",location:{type:"Point",coordinates:[40.4043078,-3.7164926]}}
]).then(()=> console.log("CREATED!"))


