drop database if exists gigazon;

create database gigazon;
use gigazon;
create table users (
    employeeID INT (8) not null,
    firstName varchar (50) not null,
    lastName varchar (50) not null,
	email varchar (255) not null,
	phone INT (10),
    password varchar (255) not null,
    currentPosition text (100) not null,
    managerID INT (8) not null,
    skill1 VARCHAR (50),
    skill2 VARCHAR (50),
    skill3 VARCHAR (50),
    skill4 VARCHAR (50),
    skill5 VARCHAR (50),
    skill6 VARCHAR (50),
    skill7 VARCHAR (50),
    skill8 VARCHAR (50),
    skill9 VARCHAR (50),
    skill10 VARCHAR (50),

    primary key (employeeID),
    CONSTRAINT validSSO  CHECK (employeeID > 9999999),
    CONSTRAINT validSSO  CHECK (managerID > 9999999)
);


create table Applications (
    applicationID INT not null auto_increment,
    projectID INT not null,
    employeeID INT not null,
    managerApproval BOOLEAN,
    pmApproval BOOLEAN,
    status VARCHAR (50),

    primary key (applicationID),
    FOREIGN KEY (employeeID) references users (employeeID)
);

create table projects (
    projectID INT not null auto_increment,
    name VARCHAR (200),
    description text (255),
    product varchar (200),
    projectStartDate DATE,
    projectDuration INT,
    skills text (255),
    primary key (projectID)
);