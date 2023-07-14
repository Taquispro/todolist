const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
var items = [];

app.get("/", function(req , res){
    var today = new Date();
    var options= {
        weekday : "long",
        day : "numeric",
        month : "long"

    };
    var day = today.toLocaleDateString("en-US", options);
    console.log(day);
    res.render("list", {kindOfDay : day,  newItems : items});
})
app.post("/", function(req, res){
    console.log("Post recieved");
    var item = req.body.input;
    items.push(item);
    
    res.redirect("/");



    






    
})
    

 app.listen(process.env.PORT || 3000 , function(){
    console.log("Server Started at Port )3000");
 })
