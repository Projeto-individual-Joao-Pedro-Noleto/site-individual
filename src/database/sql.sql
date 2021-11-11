-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

create database bandeja ;

use bandeja;


create table usuario (
idCadastro int primary key auto_increment,
nome varchar (45),
email varchar(50),
senha varchar(80),
telefone char (11),
zona varchar (45)

);


/* para workbench - local - desenvolvimento */
