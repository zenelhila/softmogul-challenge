create table hotel(
id int auto_increment,
name varchar(255),
address varchar(255),
phone varchar(255),
primary key(id));

create table book(
id int auto_increment,
name varchar(255),
hotel varchar(255),
time varchar(255),
primary key(id));
