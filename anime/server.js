// Importando os módulos necessárias
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Configurando o CORS e o parser de JSON
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração do conexão com o banco de dados
const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'animeflix',
    port: 3306
});

// Conectando ao banco de dados
db.connect(err =>{
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err);
        return;
    }
    console.log('Conectado ao banco de dados');
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

// Rota POST para adicionar uma nova pessoa
app.post(`/api/pessoas`, (req,res) => {
    const {nome, idade, email} = req.body;
    const sql = 'INSERT INTO Pessoa (nome, idade, email) VALUES (?, ?, ?)';
    db.query(sql, [nome, idade, email], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:',err);
            res.status(500).send('Erro ao inserir dados');
            return;
        }
        res.status(201).send('Pessoa adicionada com sucesso!')
    });
});

// Rota PUT para atualizar uma pessoa existente
app.put('/api/pessoas/:id', (req,res) => {
    const{id} = req.params;
    const {nome, idade, email} = req.body;
    const sql = 'UPDATE Pessoa SET nome = ?, idade = ?, email = ? WHERE id_pessoa = ?';
    db.query(sql, [nome,idade, email, id], (err,result) =>{
        if(err){
            console.error('Erro ao atualizar dados:',err);
            res.status(500).send('Erro ao atualizar dados');
            return;
        }
        res.send('Pessoa atualizada com sucesso');
    });
});

// Rota DELETE para remover uma pessoa
app.delete('/api/pessoas/:id', (req,res) =>{
    const{id} = req.params;
    const sql = 'DELETE FROM Pessoa WHERE id_pessoa = ?';
    db.query(sql, [id], (err,result) => {
        if(err){
            console.log('Erro ao deletar dados:',err);
            res.status(500).send('Erro ao deletar dados');
            return;
        }
        res.send('Pessoa deletada com sucesso');
    });
});

//Iniciando o servidor na porta 3000
const PORT = 5566;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});