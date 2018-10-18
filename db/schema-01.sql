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
    FOREIGN KEY (employeeID) references users (SSO),
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

insert into projects (projectName, projectDesc, product,startDate, duration,reqSkills) values ("testProj", "Just testing","the product", "2018-12-19", 2,"java");

insert into users (SSO, password,  firstName, lastName, currentPosition, manager_SSO,  email_addr) values (212000000, "password124", "jay", "cha", "Sr. Site Reliability Engineer", "2121110000", "jay,cha@ge.com");
insert into users (SSO, password,  firstName, lastName, currentPosition, manager_SSO,  email_addr) values (212000001, "password125", "ronald", "chaudry", "Site Reliability Engineer", "2121110000", "ronald.chaudry@ge.com");
insert into users (SSO, password,  firstName, lastName, currentPosition, manager_SSO, email_addr) values (212000003, "password126", "siraj", "mohamed", "Sr. Network Operations Engineer", "2121110002", "siraj.mohamed@ge.com");
insert into users (SSO, password,  firstName, lastName, currentPosition, manager_SSO, email_addr) values (212000004, "password127", "john", "steskal", "Sr. Site Reliability Engineer", "2121110003", "john.steskal@ge.com");
insert into users (SSO, password,  firstName, lastName, currentPosition, manager_SSO, email_addr) values (212000005,"password128",  "sung", "lee", "Sr. Site Reliability Engineer", "2121110001","sung.lee@ge.com");