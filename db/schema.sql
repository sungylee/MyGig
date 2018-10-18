drop database if exists gigazon;

create database gigazon;
use gigazon;
create table users (
    SSO INT (8) not null,
    firstName varchar (50) not null,
    lastName varchar (50) not null,
    email_addr varchar (255) not null,
    password varchar (255) not null,
    currentPosition text (100) not null,
    manager_SSO INT (8) not null,
    skill_1 VARCHAR (50),
    skill_2 VARCHAR (50),
    skill_3 VARCHAR (50),
    skill_4 VARCHAR (50),
    skill_5 VARCHAR (50),
    skill_6 VARCHAR (50),
    skill_7 VARCHAR (50),
    skill_8 VARCHAR (50),
    skill_9 VARCHAR (50),
    skill_10 VARCHAR (50),

    primary key (SSO),
    CONSTRAINT validSSO  CHECK (SSO > 9999999),
    CONSTRAINT validSSO  CHECK (manager_SSO > 9999999)
);


create table Applications (
    applicationID INT not null auto_increment,
    projectID INT not null,
    employeeID INT not null,
    managerApproval BOOLEAN,
    pmApproval BOOLEAN,
    currentStatus VARCHAR (50),

    primary key (applicationID),
    FOREIGN KEY (employeeID) references users (SSO)
);

create table projects (
    projectID INT not null auto_increment,
    projectName VARCHAR (200),
    projectDesc text (255),
    product varchar (200),
    startDate DATE,
    duration INT,
    reqSkills text (255),
    primary key (projectID)
);
