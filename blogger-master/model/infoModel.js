
const mongoose = require('mongoose');


const infoSchema = new mongoose.Schema({


name:{
    type:String,
    required:true
},
occupation:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
date:{
    type:Date,
    required:true
}


},

{timestamps:true}
)

module.exports = mongoose.model('bloginfo', infoSchema);
