
const array1=[{id:1,name:"john",age:30},{id:2,name:"James",age:30},{id:3,name:"James",age:25}]

function Newarray(req,res) {
        
    //const dataid=parseInt(req.params.id)
    //const id=array1.filter(val=>(val.id==dataid))
    //res.json(array1)
    //console.log(array1);
    //console.log(id);
    //res.json(id);
    const datage=parseInt(req.params.age)
    const age=array1.find(val=>val.age==datage)
    console.log(age);
    res.json(age);
    /*const datname=req.params.name
    const datage=parseInt(req.params.age)//string to integer
    const datid=parseInt (req.params.id)
    const name=array1.filter(val=>val.name===datname && val.age===datage && val.id===datid)
    console.log(name);
    res.json(name);*/
    

        
                        }
    module.exports=Newarray