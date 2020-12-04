const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
   date:{
      type: Date,
      default: Date.now
   },
   order:{
      type: Number,
      required: true,
   },
   user:{
      type: Schema.Types.ObjectId,
      ref: 'users'
   },
   list:[
      {
         name:{
            type: String
         },
         quantity:{
            type: Number
         },
         cost:{
            type: Number
         }
      }
   ]
});

module.exports = mongoose.model('orders', orderSchema);