const express = require('express');
const app = express();

app.set('view engine','ejs'); // difine o EJS como motor de vizualização em HTML
app.use(express.static('public')); // Carrega arquivos estaticos

app.get("/",(req,res)=>{
    res.render("index",);
})

app.get("/quiz",(req,res)=>{
    res.render("quiz",);
})

app.listen(8181,()=>{console.log('App Rodando');});