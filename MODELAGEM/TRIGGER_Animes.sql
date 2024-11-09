USE animeflix;

DROP TRIGGER IF EXISTS animeflix_INSERT_P;
SELECT * FROM animeflix.pessoa_bkp;

DELIMITER //
CREATE TRIGGER animeflix_INSERT_P BEFORE UPDATE ON Pessoa
FOR EACH ROW
BEGIN
    INSERT INTO Pessoa_BKP (nome, idade, email)
    VALUES (NEW.nome, NEW.idade, NEW.email);
END;
//


DELIMITER //
CREATE TRIGGER animeflix_DELETE_P BEFORE DELETE ON Pessoa
FOR EACH ROW
BEGIN
    INSERT INTO Pessoa_BKP (nome, idade, email)
    VALUES (OLD.nome, OLD.idade, OLD.email);
END;
//

DELIMITER //
CREATE TRIGGER animeflix_INSERT_AN BEFORE UPDATE ON Anime
FOR EACH ROW
BEGIN
    
    INSERT INTO Anime_BKP (titulo, genero, ano_lancamento)
    VALUES (NEW.titulo, NEW.genero, NEW.ano_lancamento);
END;
//

DELIMITER //
CREATE TRIGGER animeflix_DELETE_AN BEFORE DELETE ON Anime
FOR EACH ROW
BEGIN
    INSERT INTO Anime_BKP (titulo, genero, ano_lancamento)
    VALUES (OLD.titulo, OLD.genero, OLD.ano_lancamento);
END;
//

DELIMITER ;

UPDATE Pessoa set nome = 'vicT' where id_pessoa = 2;