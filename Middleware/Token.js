function Token(req,res,next) {
    console.log("Token Creating..");
         setTimeout(()=>{
             //const TOKEN="1234"
             req.token=true;
             next();
         },8000)
     
     
     
 }
 module.exports=Token