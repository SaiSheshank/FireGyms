// required dependencies
const express = require("express");
const path = require("path");
const hbs= require("hbs");


const app = express();
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);
console.log(static_path);
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);

//port connection
app.listen(port,()=>{
    console.log("connection successful");

})

app.get("/",(req,res)=>{
    res.render("index");
})