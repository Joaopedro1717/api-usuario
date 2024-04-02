var express = require('express');
var server = express();

server.use(express.json());

var users = ['João Pedro', 'Armando Souza', 'Ricardo Silva'];

users.push();
// Api busca de todos os usuários
server.get('/users', (req, res) => {
    return  res.json(users);
});

// Busca do usuário pelo indice do array
server.get('/users/:index', (req, res) => {
    var usuario = users[req.params.index];
    return res.json(usuario);
});

// Criando usuário
server.post('/users', (req, res) => {
    var name = req.body.name;
    users.push(name);

    return res.json({ok: true, message: 'Cadastro realizado com sucesso!'});
});

// Alterar o usuário

server.put('/users/:index', (req, res) => {
    var name = req.body.name;
    users[req.params.index] = name;
    return res.json({ok: true, message: 'Usuário alterado com sucesso!'})
});

// Deletar usuário

server.delete('/users/:index', (req, res) => {
    users.splice(req.params.index, 1);
    return res.json({ok: true, message: 'Usuário deletado com sucesso!'})
});

server.listen(3000);
console.log("Server rodando na porta 3000");