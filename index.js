const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// difine o EJS como motor de vizualização em HTML
app.set('view engine','ejs'); 
app.use(express.static('public'));

// Body Paser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get("/",(req,res)=>{
    res.render("index",);
})

app.get("/quiz",(req,res)=>{
    res.render("quiz",);
})

app.post("/sendform",(req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulario recebido!");

})



app.listen(8181,()=>{console.log('App Rodando');});