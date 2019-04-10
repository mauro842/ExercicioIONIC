"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = 3500;
app.listen(port, function () {
    console.log('Escutando porta http://localhost:${port}/');
});
app.post('/logon', function (req, res) {
    var result = '';
    for (var i = 32; i > 0; --i)
        result += (Math.floor(Math.random() * 256)).toString(16);
    //PROJETO-EXERCICIO
    var userName = req.body.userName;
    var password = req.body.password;
    //POSTMAN
    //const userName = req.query.userName;
    //const password = req.query.password;
    console.log("Usuario e Senha antes de validar: ", userName, password);
    if (userName == "admin@senai" && password == "1234") {
        console.log(userName, password);
        var objs = {
            userName: userName,
            password: password,
            token: result,
        };
        res.send(objs);
        console.log(objs);
    }
    else {
        var erro = { info: "Usuário ou Senha Invalidos" };
        res.status(401).send(erro);
    }
});
app.get('/tamanhos', function (req, res) {
    var data = [
        {
            id: 1,
            name: "Pequeno",
            quantidade_sabores: 1
        },
        {
            id: 2,
            name: "Médio",
            quantidade_sabores: 2
        },
        {
            id: 3,
            name: "Grande",
            quantidade_sabores: 3
        }
    ];
    res.send(data);
    console.log("Enviando Tamanhos: ", data);
});
app.get('/sabores/:id', function (req, res) {
    if (req.params.id == 1) {
        console.log("Recebeu parametro: ", req.params.id);
        var data = [
            {
                sabor: "Calabresa",
                preco: 12
            },
            {
                sabor: "Quatro Queijos",
                preco: 15
            },
            {
                sabor: "Bacon",
                preco: 13
            },
            {
                sabor: "Chocolate",
                preco: 14
            },
            {
                sabor: "Brocolis",
                preco: 16
            }
        ];
        res.send(data);
        console.log("Enviando Sabores ID/Tamanho: 1 - Pequeno: ", data);
    }
    else if (req.params.id == 2) {
        console.log("Recebeu parametro: ", req.params.id);
        var data = [
            {
                sabor: "Calabresa",
                preco: 18
            },
            {
                sabor: "Quatro Queijos",
                preco: 21
            },
            {
                sabor: "Bacon",
                preco: 19
            },
            {
                sabor: "Chocolate",
                preco: 20
            },
            {
                sabor: "Brocolis",
                preco: 22
            }
        ];
        res.send(data);
        console.log("Enviando Sabores ID/Tamanho: 2 - Médio: ", data);
    }
    else if (req.params.id == 3) {
        console.log("Recebeu parametro: ", req.params.id);
        var data = [
            {
                sabor: "Calabresa",
                preco: 25
            },
            {
                sabor: "Quatro Queijos",
                preco: 28
            },
            {
                sabor: "Bacon",
                preco: 26
            },
            {
                sabor: "Chocolate",
                preco: 27
            },
            {
                sabor: "Brocolis",
                preco: 29
            }
        ];
        res.send(data);
        console.log("Enviando Sabores ID/Tamanho: 3 - Grande: ", data);
    }
    else {
        var teste = {
            info: "ID Tamanho Desconhecido/Incorreto"
        };
        res.send(teste);
        console.log("Enviando mensagem de erro de ID Invalido", teste);
    }
});
