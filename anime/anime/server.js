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
    password: '', // xampp não exige senha
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

//Rota GET para listar todas as animes
app.get('/api/animes', (req, res) =>{
    db.query('SELECT * FROM Anime', (err, results) =>{
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erro ao buscar dados');
            return;
        }
        res.send(results);
    });
});

// Rota POST para adicionar uma nova Anime
app.post(`/api/animes`, (req,res) => {
    const {titulo, genero, ano_lancamento} = req.body;
    const sql = 'INSERT INTO Anime (titulo, genero, ano_lancamento) VALUES (?, ?, ?)';
    db.query(sql, [titulo, genero, ano_lancamento], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:',err);
            res.status(500).send('Erro ao inserir dados');
            return;
        }
        res.status(201).send('Anime adicionado com sucesso!')
    });
});

// Rota PUT para atualizar uma Anime existente
app.put('/api/animes/:id', (req,res) => {
    const{id} = req.params;
    const {titulo, genero, ano_lancamento} = req.body;
    const sql = 'UPDATE Anime SET titulo = ?, genero = ?, ano_lancamento = ? WHERE id_anime = ?';
    db.query(sql, [titulo,genero, ano_lancamento, id], (err,result) =>{
        if(err){
            console.error('Erro ao atualizar dados:',err);
            res.status(500).send('Erro ao atualizar dados');
            return;
        }
        res.send('Anime atualizado com sucesso');
    });
});

// Rota DELETE para remover uma Anime
app.delete('/api/animes/:id', (req,res) =>{
    const{id} = req.params;
    const sql = 'DELETE FROM Anime WHERE id_anime = ?';
    db.query(sql, [id], (err,result) => {
        if(err){
            console.log('Erro ao deletar dados:',err);
            res.status(500).send('Erro ao deletar dados');
            return;
        }
        res.send('Anime deletado com sucesso');
    });
});

//Iniciando o servidor na porta 3000
const PORT = 5566; // porta mudada pois a 3000 não estava fucionando(mudado no script também)
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});