const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
history:[{
  descrip:String,
  link:String,
  title:String,
  last_watch:Date,
  cType:String,
  img:String
}],

});





    module.exports = History = mongoose.model('history',HistorySchema);
