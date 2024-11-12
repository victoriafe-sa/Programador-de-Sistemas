UPDATE Pessoa 
JOIN Assiste ON Pessoa.id_pessoa = Assiste.id_pessoa
JOIN Anime ON Assiste.id_anime = Anime.id_anime
SET idade = 25
WHERE Anime.titulo = 'Naruto';

DELETE FROM Pessoa
USING Assiste
JOIN Anime ON Assiste.id_anime = Anime.id_anime
WHERE genero = 'Aventura';


DELETE FROM Pessoa
USING Assiste 
JOIN Anime ON assiste.id_anime = anime.id_anime
WHERE anime.genero = 'Aventura' AND pessoa.id_pessoa = assiste.id_pessoa;

SELECT DISTINCT an.titulo
FROM Assiste a
JOIN Anime an ON a.id_anime = an.id_anime
WHERE an.genero = 'Aventura';


SELECT * FROM Pessoa;