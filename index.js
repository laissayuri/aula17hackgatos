// //funçao no formato arrow
// () => {

// }

const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.get("", (req, res) =>{
    res.render("index");
});

app.get("/gatos", (req, res) =>{
    res.render("gatos");
});

app.get("/sobre", (req, res) =>{
    res.render("sobre");
});

app.get("/styles.css", (req, res) => {
    let cores = ["blue", "red", "yellow"];
    let numero = Math.floor(Math.random()*3);

    let cor = cores[numero];
    res.send(`
        body{
            color:${cor};
        }
    `)
});


app.listen(3000, () => { // 3000 é porta para acessar o meu computador, que virou um servidor
    console.log("Servidor Inicializado");
});
