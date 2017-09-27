CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30),
    devoured BOOL DEFAULT false,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);