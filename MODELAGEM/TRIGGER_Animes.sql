USE animeflix;
SET SQL_SAFE_UPDATES = 0; -- DESLIGA O MODO DE ATUALIZAÇÃO SEGURA
DROP TRIGGER IF EXISTS animeflix_DELETE_P;
SELECT * FROM animeflix.pessoa_bkp;

DELIMITER //
CREATE TRIGGER animeflix_INSERT_P AFTER INSERT ON Pessoa
FOR EACH ROW
BEGIN
    INSERT INTO Pessoa_BKP (nome_BKP, idade_BKP, email_BKP,Ação)
    VALUES (NEW.nome, NEW.idade, NEW.email,'INSERT');
END;
//

DELIMITER //
CREATE TRIGGER animeflix_UPDATE_P BEFORE UPDATE ON Pessoa
FOR EACH ROW
BEGIN
    INSERT INTO Pessoa_BKP (nome_BKP, idade_BKP, email_BKP,Ação)
    VALUES (NEW.nome, NEW.idade, NEW.email, 'UPDATE');
END;
//

DELIMITER //
CREATE TRIGGER animeflix_DELETE_P BEFORE DELETE ON Pessoa
FOR EACH ROW
BEGIN
    INSERT INTO Pessoa_BKP (nome_BKP, idade_BKP, email_BKP,Ação)
    VALUES (OLD.nome, OLD.idade, OLD.email,'DELETE');
END;
//

DELIMITER //
CREATE TRIGGER animeflix_INSERT_AN BEFORE INSERT ON Anime
FOR EACH ROW
BEGIN
    
    INSERT INTO Anime_BKP (titulo_BKP, genero_BKP, ano_lancamento_BKP)
    VALUES (NEW.titulo, NEW.genero, NEW.ano_lancamento);
END;
//

DELIMITER //
CREATE TRIGGER animeflix_UPDATE_AN BEFORE UPDATE ON Anime
FOR EACH ROW
BEGIN
    INSERT INTO Anime_BKP (titulo_BKP, genero_BKP, ano_lancamento_BKP)
    VALUES (NEW.titulo, NEW.genero, NEW.ano_lancamento);
END;
//

DELIMITER //
CREATE TRIGGER animeflix_DELETE_AN BEFORE DELETE ON Anime
FOR EACH ROW
BEGIN
    INSERT INTO Anime_BKP (titulo_BKP, genero_BKP, ano_lancamento_BKP)
    VALUES (OLD.titulo, OLD.genero, OLD.ano_lancamento);
END;
//

DELIMITER ;
DELETE FROM Pessoa;
UPDATE Pessoa SET idade = 25 WHERE nome = 'Alice';