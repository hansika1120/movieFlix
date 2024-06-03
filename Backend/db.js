const mongoose = require("mongoose");

module.exports=()=>{
   // const connectionParams = {
        //useNewUrlParser:true,
        //userUnifiedTopology:true,
   // };
    try{
        mongoose.connect(process.env.DB);
        console.log("Connected to Database successfully");
    }
    catch(error){
        console.log(error);
        console.log("could not connect to database");
    }
}