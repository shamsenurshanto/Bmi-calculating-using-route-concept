const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var ansr = num1 + num2 ; 
    res.send("tnx for posting "+ ansr);
});


app.get("/calculate",function(request,response){
    response.send("<h1>My name is shams shanto</h1>");
});

/// bmi route 
app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});
app.post("/bmi",function(req,res){
    console.log(req.body);
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);
    console.log(num1 );
    var ansr =  (num1/num2*num2) ; 
    res.send("Your bmi is  "+num1/(num2*num2));
});

/// bmi route 




app.listen(3000,function(){
 console.log("server started on port 3000");
});