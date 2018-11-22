const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name:String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
},{
  timestamps:true
})

schema.index({ location: '2dsphere' });

const Restaurant = mongoose.model('Restaurant',schema);

Restaurant.add = function(name, description, lat, lng){
  return Restaurant.create({
    name, description,
    location:{
      type:"Point",
      coordinates:[lat,lng]
    }
  })
}


module.exports = Restaurant