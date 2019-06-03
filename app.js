//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var user = "";

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/dashboard", function(req,res){
  res.render('dashboard', {
    user: user,
    headerTitle: "Dashboard",
    active: "dashboard"
  });
});

app.get("/pending-approvals", function(req,res){
  res.render('pending-approvals', {
    user: user,
    headerTitle: "Pending Approvals",
    active: "pending"
  });
});

//Post this when user tries to login
app.post("/dashboard", function(req, res){
  user = req.body.txtUname;

  if (req.body.txtUname === req.body.txtPwd){
    res.redirect("/dashboard");
  }else{
    console.log("Inputs do not match!");
  }

});

app.listen(3001, function(){
  console.log("Server is running at port 3001.");
});
