const express = require("express");
const app = express();
const path = require("path");
const mysql2 = require('mysql2');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const {connection, knex} = require("./Model/connection")
const {getIdCountriesById, addCountry, getAllcountry, updateCountry, removeCountry} = require("./Model/countryDB")
const {getAlladminstrators, getIdadminstratorsById, removeadminstrators, updateadminstrators} =require("./Model/adminstratorsDB") 
const {getAllcustomer, getIdCustmerById, addCustomer, removeCustomer, updateCustomer} =require("./Model/adminstratorsDB") 
const {getAllflights, getIdflightsById, addflights, removeflights, updateflights} =require("./Model/adminstratorsDB") 


//to test the connection.
connection.connect((err)=>{
  if (err) {
      console.log(err);
  } else {
      console.log("connected to the database");
  }
})

//layouts setup
const ejsLayout = require("express-ejs-layouts");
app.use(ejsLayout);


// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



//to use public folder for the files
app.use(express.static('public'))

let isLoggedIn = 0;

//ejs 
app.get("/login", (req, res)=> {
  const username = req.query.username
  const password = req.query.password
  const isLoggedIn = checkLogin(username, password)
  if (isLoggedIn) {
    res.cookie("isLoggedIn", "1")
    res.redirect("/flights")
  }
  res.render("login")
});

//ejs second 
app.get("/ejs2", (req, res)=> {
  res.render("signup")
});

//ejs third 
app.get("/flights", (req, res)=> {
const cookies = req.cookies
console.log(cookies)
const isLoggedIn = cookies.isLoggedIn
res.render("flights", {"isLoggedIn": isLoggedIn})
});

//ejs four
app.get("/ejs4", (req, res)=> {
  res.render("Services")
});


//ejs six
app.get("/ejs5", (req, res)=> {
  res.render("Contant")
});


//ejs seven
app.get("/ejs6", (req, res)=> {
  res.render("goog")
});



//adding bodyparser to express
const bodyParser = require("body-parser");
const { parseArgs } = require("util");
app.use(bodyParser.json());



const checkLogin = (username, password) => {
  const userFromDB = "Shilo"
  const passwordFromDB = "Musay123"
  if (username && username == userFromDB && password && password == passwordFromDB) {
    return true
  }
  return false
}

const port = 3000;
app.listen(port, ()=> {
    console.log("server listening on port: " + port);
})