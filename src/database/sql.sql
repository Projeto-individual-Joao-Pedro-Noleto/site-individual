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


create table cadastro_quadra(
idQuadra int primary key auto_increment,
nome_quadra varchar(75),
zona_quadra varchar(25),
endereco varchar(75),
comentario varchar(500),
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);


select * from usuario;

select * from usuario group by zona;

SELECT count(zona) FROM usuario where zona = "ZN" ;


select	senha, email from usuario