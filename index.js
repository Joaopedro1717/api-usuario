var express = require('express');
var server = express();

server.use(express.json());

var users = ['João Pedro', 'Armando Souza', 'Ricardo Silva', 'Caio Henrique'];

function validaNomeUsuario(name) {

    if(name == ''){
        return 'Usuário não informado!';
    }

    return '';
}

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

    var validaUsuario = validaNomeUsuario(name);

    if(validaUsuario.length > 0){
        return res.status(400).json({error: validaUsuario});
    }

    users.push(name);

    return res.json({ok: true, message: 'Cadastro realizado com sucesso!'});
});

// Alterar o usuário

server.put('/users/:index', (req, res) => {
    var name = req.body.name;

    var validaUsuario = validaNomeUsuario(name);

    if(validaUsuario.length > 0){
        return res.status(400).json({error: validaUsuario});
    }

    users[req.params.index] = name;
    return res.json({ok: true, message: 'Usuário alterado com sucesso!'})
});

// Deletar usuário

server.delete('/users/:index', (req, res) => {
    users.splice(req.params.index, 1);
    return res.json({ok: true, message: 'Usuário deletado com sucesso!'})
});

server.listen(3000);
console.log('Server rodando na porta 3000');