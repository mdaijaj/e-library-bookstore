const mongoose=require('mongoose');
// require('dotenv').config;
// dotenv.config({path: './db.js'})
// let url="mongodb://localhost:27017/property" ;

mongoose.connect(process.env.DB|| url, {
    useUnifiedTopology: true,
    useNewUrlParser:true,
}).then(()=>{
    console.log("db connected successfully!")
}).catch((err)=>{
    console.log("errro while connected db,........")
    console.log(err.message)
})
 

module.exports=mongoose;