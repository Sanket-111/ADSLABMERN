import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
})

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.json("hello");
})


app.get("/books",(req,res)=>{
    const q= "select * from books";

    db.query(q,(err,data)=>{
        if(err){
            
            return res.json(err);
        }
        else {
            
            return res.json(data);
        }
    })
})

app.post("/createUser",(req,res)=>{
    const name=req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const re_pass = req.body.re_pass;
    const role = req.body.role;


    if(re_pass!=password)return res.json("Password Dint Matched");
    
    const q = "insert into user (`name`,`email`,`password`,`role`) values (?)";

    const values=[
        name,email,password,role
    ]

    db.query(q,[values],(err,data)=>{
        if(err){
            return res.json(err);
        }

        return res.json("User Created")
    })
})

app.post("/books",(req,res)=>{
    const q= "insert into books (`booktitle`,`descrip`,`price`,`clr_png`) values (?)"
    const title= req.body.title;
    const descrip= req.body.descrip;
    const price= req.body.price;
    const clr_png= req.body.clr_png;

    const values=[
        title,descrip,price,clr_png
    ]

    db.query(q,[values],(err,data)=>{
        if(err){
            return res.json(err);
        }
        else{
            return res.json("Books Added Successfully");
        }
    })
})

app.delete("/books/:id",(req,res)=>{
    const id = req.params.id;
    const q= "delete from books where id = ?";

    db.query(q,[id],(err,data)=>{
        if(err)return res.json(err);
        return res.json("Deleted");
    })
})

app.put("/books/:id",(req,res)=>{
    const id = req.params.id;
    const q= "update books set `booktitle`=? ,`descrip`=?, `price`=?,`clr_png`=?  where id = ?";

    const title= req.body.title;
    const descrip= req.body.descrip;
    const price= req.body.price;
    const clr_png= req.body.clr_png;

    const values=[
        title,descrip,price,clr_png
    ]

    db.query(q,[...values,id],(err,data)=>{
        if(err)return res.json(err);
        return res.json("Deleted");
    })
})



app.listen(8800,()=>{
    console.log("Listning on Port 8800");
})