const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");


const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
    response.sendFile(__dirname + "/signup.html");
});

app.post("/",function(request,response){
    var firstname=request.body.fname;
    var lastname=request.body.lname;
    var email=request.body.email;

    console.log(firstname,lastname,email);
});
app.listen(3000,function() {
    console.log("Server is up and running");
});

//07672935c994fa8f42f937d20e51e4ec-us17