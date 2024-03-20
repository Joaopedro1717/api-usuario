var express = require('express');
var server = express();

var users = ['João Pedro', 'Armando Souza', 'Ricardo Silva'];

// Api busca de todos os usuários
server.get('/users', (req, res) => {
    return  res.json(users);
});

// Busca do usuário pelo indice do array
server.get('/users/:index', (req, res) => {
    var usuario = users[req.params.index];
    return res.json(usuario);
});

users.push();

server.listen(3000);
console.log("Server rodando na porta 3000");