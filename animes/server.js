// importando os modulos necessarios
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//configurando o cors e o parser de JSON
app.use(cors());
app.use(bodyParser.json());

//configuração do conexão com o banco de dados
const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senac',
    database: 'AnimeFlix',
    port: 3307
});

// conectando ao banco de dados
db.connect(err =>{
    if (err) {
        console.log('Erro ao conectar ao banco de dados: ', err);
        return;
    }
    console.log('conectado ao banco de dados');
});

//Rota GET para listar todas as pessoas
app.get('/api/pessoas', (req, res) =>{
    db.query('SELECT * FROM Pessoa', (err, results) =>{
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erro ao buscar dados');
            return;
        }
        res.send(results);
    });
});

//Iniciando o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
