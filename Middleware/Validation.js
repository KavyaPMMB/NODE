function Validation(req,res,next) {
    if(req.token)
    {
        console.log("Token Approved");
        next();
    }
    else
    {
        console.log("No Token");
        res.send("No token")
    }
    
    
}
module.exports=Validation