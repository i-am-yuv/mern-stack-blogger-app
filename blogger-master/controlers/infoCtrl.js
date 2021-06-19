const infoSchema = require('../model/infoModel');




// getting info......
exports.getInfo=async (req, res)=>{
 
    const info = await infoSchema.find({});
    
    try {
        await info;
    res.json(info)
    
    } catch (err) {
        res.status(500).json({msg:err})
    }
    
    // second 
    // infoSchema.find()
    // .then(info=>res.json(info))
    // .catch(err=>res.json(err))
    
    
    }

exports.addInfo = async (req, res)=>{
  
    const {name, occupation, email,date} = req.body

    const newInfo = new infoSchema({
        name, 
        occupation,
         email,
         date:Date.parse(req.body.date)


    })


    await newInfo.save();
    res.json({msg:"info added"})


  }

  exports.getInfoId=async (req, res)=>{


    const info = await infoSchema.findById(req.params.id);
   try {
   
   await info;
   res.json(info)
   
   } catch (err) {
       res.status(500).json({msg:err}) 
   }
   
   // second
   // infoSchema.findById(req.params.id)
   // .then(info=>res.json(info))
   // .catch(err.res.status(500).json(`error:${err}`))
   
       
     }


exports.addUpdate=async (req, res)=>{
    const {name, occupation, email, date}=req.body

  try {

    const info = await infoSchema.findByIdAndUpdate(req.params.id,{
    name,
    occupation,
    email,
    date:Date.parse(date)
    
    })
    
    res.json({msg:'Item updated'})
      
  } catch (error) {
      
  }


}


exports.deleteInfo=async (req, res)=>{
    try {
        await infoSchema.findByIdAndDelete(req.params.id);
    
        res.json({msg:"Item deleted"})
    } catch (err) {
        res.status(500).json({msg:err}) 
    }
     }