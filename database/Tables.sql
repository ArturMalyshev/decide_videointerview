create table Admins (
	id int auto_increment,
	login varchar(255) not null,
	password varchar(255) not null,
	primary key(id),
	unique(login)
);

create table Vacancies (
	id int auto_increment,
	name varchar(255) not null,
	primary key(id)
);

create table Candidates (
	id int auto_increment,
	name varchar(255) not null,
	vacancy_id int not null,
	primary key(id),
	foreign key(vacancy_id) references Vacancies(id)
);

create table Files (
	id int auto_increment,
	path varchar(255) not null,
	candidate_id int not null,
	primary key(id),
	foreign key(candidate_id) references Candidates(id)
);

create table Questions (
	id int auto_increment,
	vacancy_id int not null,
	data varchar(1023) not null,
	primary key(id),
	foreign key(vacancy_id) references Vacancies(id)
);