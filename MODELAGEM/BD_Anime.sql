CREATE DATABASE animeflix;
USE animeflix;

SET FOREIGN_KEY_CHECKS = 0; -- DESLIGA AS CHAVES ESTRANGEIRAS

CREATE TABLE Pessoa (
    id_pessoa INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    idade INT(3),
    email VARCHAR(50)
);

CREATE TABLE Anime(
	id_anime INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50),
    genero VARCHAR(20),
	ano_lancamento INT(4)
);

CREATE TABLE Assiste(
	id_pessoa INT,
    id_anime INT,
    data_assistiu DATE, 
    FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id_pessoa),
    FOREIGN KEY (id_anime) REFERENCES Anime(id_anime),
    PRIMARY KEY (id_pessoa, id_anime)
);

CREATE TABLE Pessoa_BKP (
    id_pessoa_BKP INT AUTO_INCREMENT PRIMARY KEY,
    nome_BKP VARCHAR(50),
    idade_BKP INT(3),
    email_BKP VARCHAR(50)
);

CREATE TABLE Anime_BKP(
	id_anime_BKP INT AUTO_INCREMENT PRIMARY KEY,
    titulo_BKP VARCHAR(50),
    genero_BKP VARCHAR(20),
	ano_lancamento_BKP INT(4)
);

CREATE TABLE Assiste_BKP(
	id_pessoa_BKP INT,
    id_anime_BKP INT,
    data_assistiu_BKP DATE, 
    FOREIGN KEY (id_pessoa_BKP) REFERENCES Pessoa_BKP(id_pessoa_BKP),
    FOREIGN KEY (id_anime_BKP) REFERENCES Anime_BKP(id_anime_BKP),
    PRIMARY KEY (id_pessoa_BKP, id_anime_BKP)
);

INSERT INTO Pessoa(nome, idade, email) VALUES
('Alice', 20, 'alice@example.com'),
('Bruno', 25, 'bruno@example.com'),
('Carla', 22, 'carla@example.com'),
('Diego', 30, 'diego@example.com'),
('Evelyn',27, 'evelyn@example.com');

INSERT INTO Anime (titulo, genero, ano_lancamento) VALUES
('Naruto', 'Ação', 2002),
('One Piece', 'Aventura', 1999),
('Attack on Titan', 'Ação', 2013),
('My Hero Academia', 'Ação', 2016),
('Death Note', 'Suspense', 2006);

INSERT INTO Assiste (id_pessoa, id_anime, data_assistiu) VALUES
(1, 1, '2024-01-01'),
(1, 2, '2024-02-15'),
(2, 3, '2024-03-10'),
(3, 1, '2024-04-20'),
(4, 4, '2024-05-01'),
(4, 2, '2024-06-18'),
(5, 5, '2024-07-22'),
(2, 1, '2024-08-10'),
(3, 5,'2024-09-03'),
(5, 3, '2024-10-12');