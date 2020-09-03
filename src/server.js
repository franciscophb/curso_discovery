const proffys =[
    {
        name:"Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "899876545434", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br/>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica", 
        cost: "20" , 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name:"Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "899876545434", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br/>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica", 
        cost: "20" , 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name:"Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "899876545434", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br/>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica", 
        cost: "20" , 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    }

    
]
//dados
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábad",
]
//funcionalidades
function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}



function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects,weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
 
    //se tiver dados (data)
    if(isNotEmpty){
        console.log('entrei aqui')
        //adicionar data ao a lista de proffys
        proffys.push(data)
        //se não, não adiocionar, mostrar a pagina
        return res.redirect("/study")
    }
    return res.render("give-classes.html",{subjects, weekdays})
}
//servidor
const express = require('express')
const server = express()
//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})
//inicio e configuração do servidor
server
//configurar arquivos estáticos(css, scripts, imagens)
.use(express.static("public"))
//Rotas a aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)
