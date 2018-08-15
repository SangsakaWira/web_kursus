const express = require("express")
const app = express()

app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.


app.get("/",function(req,res){
    res.sendFile("index.html");
})
app.get("/fasilitas",function(req,res){
    res.sendFile("fasilitas.html");
})
app.get("/kelas",function(req,res){
    res.sendFile("kelas.html");
})
app.get("/lokasi",function(req,res){
    res.sendFile("lokasi.html");
})

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is starting")
});