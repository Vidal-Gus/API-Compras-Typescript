create database mercadoTS;

create table compras (
  id_compra serial primary key,
  nome_item varchar(30) not null,
  preco integer not null,
  usuario_id integer not null,
  foreign key (usuario_id) references usuario (id)
  );

  create table usuario (
  id serial primary key,
  nome_usuario varchar(30) not null,
  email varchar(30) not null,
  senha varchar(30) not null
  );
  
  
