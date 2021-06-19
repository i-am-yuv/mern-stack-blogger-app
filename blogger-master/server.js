
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


// import routes
const infoRoute = require('./routes/infoRoute');

const app = express();

const URI = process.env.MONGO_URL

// CONNECT TO MONGO
mongoose.connect(URI, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}, (err)=>{
   
    if(err) throw err;
    else{
        return console.log(`mongo db connected yoyoyo`);
    }
})





// middlewares
app.use(cors());
app.use(express.json());


app.use('/', infoRoute)

const PORT = process.env.PORT || 5000;


// static assets
if(process.env.NODE_ENV==='production'){

    app.use(express.static('client/build'));
    app.get('*',(req, res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))



}


app.listen(PORT, ()=>{
    console.log(`server listenng on port ${PORT}`);
})














// const path = require('path');
// static assests
// if(process.env.NODE_ENV==='production'){
//     app.use(express.static('client/build'));
//     app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
// }


  // "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"