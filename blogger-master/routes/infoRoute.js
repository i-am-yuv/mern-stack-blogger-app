
const router = require('express').Router();
const infoSchema = require('../model/infoModel');
const {getInfo,addInfo,getInfoId, addUpdate, deleteInfo} = require('../controlers/infoCtrl');


// getting info data
router.get('/info',getInfo);


//posting info data
router.post('/info', addInfo);


  //getting specific info data
router.get('/info/:id', getInfoId);


//   updating this specific id
router.put('/info/update/:id',addUpdate)


//   updating this specific id
router.delete('/info/:id', deleteInfo)







module.exports=router;

// mongodb+srv://blogger21:<password>@cluster0.wnhl9.mongodb.net/<dbname>?retryWrites=true&w=majority

// blogger21
// bloggerman