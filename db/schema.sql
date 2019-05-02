DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE freshBurger{
    id AUTO-INCREMENT NOT NULL;
    burgerName varchar(50) NOT NULL;
    burgerDesc varchar(200) NOT NULL;
    primary key(id);
}


CREATE TABLE eatenBurger{
     id AUTO-INCREMENT NOT NULL;
    burgerName varchar(50) NOT NULL;
    burgerDesc varchar(200) NOT NULL;
    primary key(id);
}