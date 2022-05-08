const express = require('express');
const app = express();

app.set('view engine','ejs'); // difine o EJS como motor de vizualização em HTML

app.get("/:nome/:lang",(req,res)=>{
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;
    res.render("index",{
        nome:nome,
        lang:lang,
        msg: exibirMsg
    })
})

app.listen(8181,()=>{console.log('App Rodando');});