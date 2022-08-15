require("dotenv").config();
const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
// const passport=require("passport");
const cors=require("cors");
// const passportLocalMongoose=require("passport-local-mongoose");
const bcrypt=require("bcrypt");
const saltRounds=10; //More than this may lag your pc.
const session=require("express-session");
const MongoStore=require("connect-mongo");
const jwt_decode=require("jwt-decode");

const app=express();

mongoose.connect(process.env.MongoUrl);

app.use(session({
    name:"credentials",
    key:"userId",
    secret:"This is a secret",
    resave:false,
    saveUninitialized:false,
    
    cookie:{
        maxAge:2*60*60*1000,
        secure:false
    },
    store:MongoStore.create({
        mongoUrl:process.env.MongoUrl,
        dbName:"KeeperAppDB",
        ttl:2*60*60
    })
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.Origin],
    methods:["GET","POST"],
    credentials:true
}));
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
}


const dataSchema={
    title:String,
    content:String
}

const Note=mongoose.model("Note",dataSchema);



const userSchema=new mongoose.Schema({
    name: String,
    password:String,
    picture:String,
    email:String,
    data:[dataSchema]
})

// userSchema.plugin(passportLocalMongoose);

const User=mongoose.model("User",userSchema);

app.get("/login",(req,res)=>{
    console.log(req.session.user);
    if(req.session.userId){
        const user=req.session.user;
        res.json({
            "id":user.id,
            "name":user.name,
            "picture":user.picture,
            "email":user.email,
            "data":user.data
        })
    }
    else res.send("no");
})

app.post("/api",(req,res)=>{
    console.log(req.body);
    // console.log("cookies-",req.cookies);
    User.findOne({email:req.body.email},(err,result)=>{
        if(err) console.log(err);
        else{
            if(!result){
                console.log("api-no such user found");
                res.send("no user found");
            }
            else{
                console.log("api-found",result);
                res.json(result);
            }
        }
    })
})

app.post("/addNote",(req,res)=>{
    console.log(req.body);
    const newNote=new Note({
        title:req.body.title,
        content:req.body.content
    });
    User.findOne({_id:req.body.id},(err,result)=>{
        if(err) console.log("addNote-error",err);
        else{
            if(!result) console.log("addNotes-no such user found");
            else{
                console.log("addNote-found ",result);
                result.data.push(newNote);
                result.save();
                res.send("added");
            }
        }
    })
})

app.post("/delete",(req,res)=>{
    console.log("delete-",req.body.email,"note-",req.body.noteId);
    User.findOneAndUpdate({email:req.body.email},{$pull:{data:{_id:req.body.noteId}}},(err,result)=>{
        if(err) console.log(err);
        else{
            console.log("deleted Note");
            res.send("deleted");
        }
    })
})

// const redirectHome=(req,res,next)=>{
//     console.log("redHome",req.session.userId);
//     console.log(req.session);
//     if(req.session.userId){
//         User.findOne({_id:userId},(err,result)=>{
//             if(err) console.log("redirectHome",err);
//             else{
//                 return res.json({
//                     "_id":result._id,
//                     "name":result.name,
//                     "email":result.email,
//                     "picture":result.picture,
//                     "data":result.data
//                 })
//             }
//         })
//     }
//     else next();
// }

app.post("/Glogin",(req,res)=>{
    const cred=jwt_decode(req.body.credential);
    console.log("token-",cred);
    User.findOne({email:cred.email},(err,user)=>{
        if(err) console.log(err);
        else{
            if(!user){
                
                const arr=[];
                const new_user=new User({
                    name:cred.name,
                        picture:cred.picture,
                        email:cred.email,
                        data:arr
                    });
                    new_user.save();
                    console.log("created",new_user._id);
                    req.session.userId=new_user._id;
                    req.session.user=new_user;
                    console.log("inside",req.session);
                    // res.cookie("test","teja");
                    return res.json(new_user);
                }
                else{
                    console.log("found");
                    req.session.userId=user._id;
                    req.session.user=user;
                    console.log("inside",req.session);
                    return res.json(user);
                }
                
            }
        })
    
})

app.post("/login",(req,res)=>{
    console.log("login-",req.body);
    User.findOne({email:req.body.email},(err,result)=>{
        if(err) console.log(err);
        else{
            if(!result) {
                console.log("no such user Exists");
                return res.send("wrong");
            }

            else{
                bcrypt.compare(req.body.password,result.password,(err,pass)=>{
                    if(pass==true) {
                        console.log("correct password");
                        req.session.userId=result._id;
                        req.session.user=result;
                        res.json({
                            "_id":result._id,
                            "name":result.name,
                            "email":result.email,
                            "picture":result.picture,
                            "data":result.data
                        })
                    }
                    else{
                        console.log("wrong password");
                        res.send("wrong");
                        }
                })
            }
        }
    })

});

app.post("/signup",(req,res)=>{
    console.log("signup body-",req.body);
    User.findOne({email:req.body.email},(err,result)=>{
        if(err) console.log(err);
        else{
            if(!result){
                bcrypt.hash(req.body.password,saltRounds,(err,hash)=>{
                    const new_user=new User({
                        "name":req.body.name,
                        "picture":"https://picsum.photos/200/300?random=2",
                        "email":req.body.email,
                        "password":hash,
                        "data":[]
                    });
                    new_user.save();
                    console.log("new_user",new_user);
                    req.session.userId=new_user._id;
                    req.session.user=new_user;
                res.json({
                    "_id":new_user._id,
                    "name":new_user.name,
                    "picture":new_user.picture,
                    "email":new_user.email,
                    "data":new_user.data
                });})
            }
            else res.send("user exists");
        }
    })
})

app.get("/signout",(req,res)=>{
    console.log("destroyed");
    req.session.destroy(err=>{
        if(err) return res.send("unable to delete");
        
            console.log("destroyed");
            res.clearCookie("credentials");
            res.send("deleted session");
    });
})

const port=process.env.PORT;

app.listen(port || 11000,()=>{
    console.log("server has started for keeper app at 11000");
})