const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');
const { get } = require('express/lib/response');

//Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados");
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })
    

// difine o EJS como motor de vizualização em HTML
app.set('view engine','ejs'); 
app.use(express.static('public'));

// Body Paser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get("/",(req,res)=>{
    Pergunta.findAll({ raw : true, order:[
        ['id','DESC'] //ASC = Crecente // DSC = Descrecente
    ] }).then(perguntas => {
        res.render("index",{
            perguntas: perguntas
        });
    });
    
})

app.get("/quiz",(req,res) => {
    res.render("quiz",);
})

app.post("/salvarpergunta",(req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    })
});

app.get("/pergunta-:id", (req, res) =>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if (pergunta != undefined){
            Resposta.findAll({
                where: {perguntaid: pergunta.id},
                order: [
                    ['id','DESC']
                ]
            }).then(respostas =>{
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
        }else{
            res.redirect('/quiz');
        }
    })
})

app.post('/responder',(req,res) => {
    var corpo = req.body.corpo;
    var perguntaid = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaid: perguntaid
    }).then(() => {
        res.redirect("/pergunta-"+perguntaid)
    });
});




app.listen(8181,()=>{console.log('App Rodando');});