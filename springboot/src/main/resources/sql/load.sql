CREATE DATABASE test_crud;
SHOW DATABASES;
USE test_crud;
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    username VARCHAR(10),
    password VARCHAR(12) NOT NULL,
    firstName VARCHAR(10),
    lastName VARCHAR(10),
    age TINYINT,
    salary INT,
    PRIMARY KEY(id)
);
SHOW TABLES;
DESC users;
INSERT INTO users(username, password, firstname, lastname, age, salary)
    VALUES ("rog123", "password", "Rogan", "Smith", 34, 1000000);

