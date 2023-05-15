/*//console.log("hloo welcome")
const a=10,b=20;
//console.log(a+b)
const array=['a','b','c']
//console.log(array)
const d=10;
const array2=[...array,d];
//console.log(array2)
const sample=()=>{

   // console.log('hloo')
}*/
//sample()

/*console.log(__filename)
console.log(__dirname)
const { basename } = require('path');
const path=require('path')

console.log(path)
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.dirname(__filename))
console.log(path.parse(__filename))
console.log(path.join(__dirname,'file',"Server.js")) //join path to another path */
//console.log(path.join(__filename,'folder','Server.js'))
//const fs=require('fs')//fileSystem
//console.log(fs)*/

/*fs.writeFile('new.html',"welcome",(err)=>{
    if (err) throw err
})
fs.writeFile('new.html','Lets start ',(err)=>{
    if (err) throw err
})*/

/*fs.appendFile('new.html','the game',(err)=>{
    if (err) throw err
})
fs.appendFile('new.html','..Welcome',(err)=>{
    if (err) throw err
})*/


/*fs.readFile('new.html','utf8',(err,data)=>{
    console.log(data);
})*/


/*fs.mkdir(path.join(__dirname,"/newone/new.html"),{},(err)=>{
    if (err) throw err
})*/


/*fs.rmdir(path.join(__dirname,"/newone/new"),{},(err)=>{
    if (err) throw err
})
fs.rmdir(path.join(__dirname,"/newone/new"),{recursive:true},(err)=>{
    if (err) throw err
})*/
/*fs.rmdir(path.join(__dirname,"/newone"),{recursive:true},(err)=>{
    if (err) throw err
})*/


//---------------------------------------------------------------------------------------------------





/*const http=require("http")
http.createServer((req,res)=>{
    res.write("this is running")
    res.end()
}).listen(3000,console.log("Running")) */


//-------------------------------------------------------------------------------------------------------------

/*const http=require('http')
const server=http.createServer((req,res)=>{
    res.write("server is running")
    console.log(req.url)
    res.end()
})
Port=process.env.Port || 3000;
server.listen(Port,()=>console.log(`Server is ${Port}`))*/

//-----------------------------------------------------------------------------------------------------------

/*fs.mkdir(path.join(__dirname,"/home.html"),{},(err)=>{
    if (err) throw err
})*/
//----------------------------------------------------------------------------------------------------------------

/*const fs = require("fs");
const path = require("path");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "Home", "about.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.end(data);
      }
    );
  }
  if (req.url === "/home") {
    fs.readFile(
      path.join(__dirname, "Home", "home.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.end(data);
      }
    );
  }
});

Port = process.env.Port || 5000;
server.listen(Port, () => console.log(`Server is ${Port}`));*/ 

//----------------------------------------------------------------------------------------------------------------

/*const express=require('express')
const app=express()
app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.get("/home",(req,res)=>{
    res.send("Nice to  meet you..")
})
Port = process.env.Port || 5000;
app.listen(Port, () => console.log(`Server is ${Port}`))*/

//------------------------------------------------------------------------------------------------------------

/*const express=require('express')
const app=express()
app.use(express.static('Home'))
 app.get("/*",(req,res)=>{
    res.status(404)
    res.send("not found")

})  
Port = process.env.Port || 5000;
app.listen(Port, () => console.log(`Server is ${Port}`))*/

//-------------------------------------------------------------------------------------------------



/*const express=require('express')
const app=express()
app.use(express.static('Home'))
app.get("/home",Token,validation,(req,res)=>{
    //res.status(404)
    console.log("Login");
    res.send("Welcome")

})
function Token(req,res,next) {
   console.log("Token Creating..");
        setTimeout(()=>{
            const TOKEN="1234"
            req.token=TOKEN;
            next();

        },8000)
    }
function validation(req,res,next) {
    console.log("Token approved");
    next();
    }
Port = process.env.Port || 5000;
app.listen(Port, () => console.log(`Server is ${Port}`))*/

//--------------------------------------------------------------------------------------------------------

/*const http=require('http')
const server=http.createServer((req,res)=>{
    res.write("server is running")
    console.log(req.url);
    res.end()
})
Port=process.env.Port || 3000;
server.listen(Port,()=>console.log(`Server is  running on ${Port}`))
*/


//------------------------------------------------------------------------------------------------------



/*const express=require('express')
const app=express()
app.use(express.static('Home'))
app.get("/home",Token,validation,(req,res)=>{
    res.send("Welcome")

})
function Token(req,res,next) {
    console.log("Token Creating");
    req.token=false;
    next();
}
function validation(req,res,next) {
    if (req.token)
    {
    console.log("Token Approved");
    next();
    }
    else{
        console.log("no token");
        res.send("no token")
    }
}
Port = process.env.Port || 4000;
app.listen(Port, () => console.log(`Server is ${Port}`))*/


//--------------------------------------------------------------------------------------------------------------- 


/*const express=require('express')
const app=express()
app.use(express.static('Home'))
app.get("/home",Token,validation,(req,res)=>{
    //res.status(404)
    console.log("Login");
    res.send("Welcome")

})
function Token(req,res,next) {
   console.log("Token Creating..");
        setTimeout(()=>{
            //const TOKEN="1234"
            req.token=false;
            next();
        },8000)
    
    
    
}
function validation(req,res,next) {
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
Port = process.env.Port || 3000;
app.listen(Port, () => console.log(`Server is ${Port}`)) */

//------------------------------------------------------------------------------------------------------


/*const Token=require("./Middleware/Token")
const Validation=require("./Middleware/Validation")
const express=require('express')
const app=express()
app.use(express.static('Home'))
const middleware=[Token,Validation]
app.get("/home",middleware,(req,res)=>{
    //res.status(404)
    console.log("Login");
    res.send("Welcome")

})
Port = process.env.Port || 3000;
app.listen(Port, () => console.log(`Server is ${Port}`))*/



//--------------------------------------------------------------------------------------------------------*/


/*const TestRouter=require("./Router/TestRouter")
const express=require('express')

const app=express()
app.use(express.json())
app.use('/',TestRouter)
app.use('/home',TestRouter)


Port = process.env.Port || 3000;
app.listen(Port, () => console.log(`Server is ${Port}`))*/

//---------------------------------------------------------------------------------------------------- 

/*const TestRouter=require("./Router/TestRouter")
const express=require('express')

const app=express()
app.use(express.json())
//app.use('/demo',TestRouter)
app.use('/sample2',TestRouter)
app.use('/',TestRouter)
app.use('/home',TestRouter)
app.use('/objects',TestRouter)
//app.use('/sample',TestRouter)
app.use("/Newarray",TestRouter)


Port = process.env.Port || 5000;
app.listen(Port, () => console.log(`Server is ${Port}`))    */     


//----------------------------------------------------------------------------------------------------------

