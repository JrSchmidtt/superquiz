const express = require('express');
const app = express();

app.set('view engine','ejs'); // difine o EJS como motor de vizualização em HTML

app.get("/:nome/:lang",(req,res)=>{
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
        {nome: "Doritos", preco: 15.65},
        {nome: "Coca-cola", preco: 6.50},
        {nome: "Nescau", preco: 1.50},
        {nome: "Camiseta", preco: 85.00},
        {nome: "Jaqueta", preco: 250.00}
    ]

    res.render("index",{
        nome:nome,
        lang:lang,
        msg: exibirMsg,
        produtos: produtos
    })
})

app.listen(8181,()=>{console.log('App Rodando');});