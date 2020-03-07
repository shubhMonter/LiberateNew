const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({

  descrip:String,
  link:String,
  title:String,
  vid:[],
})





    module.exports = Video = mongoose.model('video',VideoSchema);
