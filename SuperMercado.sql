Create  Database ProyectoMercado;
USE ProyectoMercado;
drop table Usuarios;
Create table Usuarios(
Id int primary key auto_increment not null,
Nombre varchar(255) Not null unique,
Pass varchar(255) not null 
); 

Insert Into Usuarios (Nombre, Pass)Value("Pepito", "123");
Insert Into Usuarios (Nombre, Pass)Value("Admin", "321");
Insert Into Usuarios (Nombre, Pass)Value("Donaldo", "123");
Insert Into Usuarios (Nombre, Pass)Value("Admin", "321");



drop table Producto; 
Create table Producto(
id int not null primary key auto_increment,
codigo varchar(150),
Nombre varchar(150),
Descripcion varchar(250),
Categoria varchar(250),
Existencia varchar (250),
Precio decimal
);


Select * from Producto where Existencia > 0;  
Delete  From Producto where id = ?;
select * from Producto;
Insert into Producto(codigo, Nombre, Descripcion, Categoria, Existencia, Precio)  values('a3', 'Zote', 'Labar ropa', 'Jabones', 77, 10);
Insert into Producto(codigo, Nombre, Descripcion, Categoria, Existencia, Precio)  values('a1', 'Bananote', 'Comer Sano', 'Fruta', 2, 10);
Insert into Producto(codigo, Nombre, Descripcion, Categoria, Existencia, Precio)  values('a1', 'Papas', 'Consumo papas frescas', 'Verduras', 5, 2);
Insert into Producto(codigo, Nombre, Descripcion, Categoria, Existencia, Precio)  values('a5', 'Papas', 'Consumo papas frescas', 'Verduras', 5, 2);

UPDATE Producto	
SET Nombre = '  ', Descripcion= ' ', Categoria='', Existencia='' , Precio=''
WHERE id = 1;
Select * From Producto where codigo = 'a1';
Select * from Pedidos;
Select * From Producto;
Delete from Producto  where id= 1;
Create table Pedidos(
idPedido int not null primary key auto_increment,
Proveedor varchar(250) not null,
Producto varchar(250) not null,
Cantidad int not null
);
Drop Table Pedidos;
Select * from Pedidos;
select * from Producto;
Insert into Pedidos( Proveedor, Producto, Cantidad) values ('Juanito', 'Bananote', 10);
Insert into Pedidos( Proveedor, Producto, Cantidad) values ('Luis', 'Bananote', 20);

Select * From Pedidos where Proveedor = 'Juanito' and Producto = 'Zote';