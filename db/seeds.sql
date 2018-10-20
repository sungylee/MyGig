use gigazon;

insert into projects (name, description, product, projectStartDate, projectDuration, skills, createdAt, updatedAt) values ("testProj", "Just testing","the product", "2018-12-19", 2, "java", now(), now());


insert into users (employeeID, firstName, lastName, currentPosition, managerID,  email,  createdAt, updatedAt) values (212000000, "jay", "cha", "Sr. Site Reliability Engineer", "2121110000", "jay,cha@ge.com", now(), now());
insert into users (employeeID, firstName, lastName, currentPosition, managerID,  email,  createdAt, updatedAt) values (212000001, "ronald", "chaudry", "Site Reliability Engineer", "2121110000", "ronald.chaudry@ge.com", now(), now());
insert into users (employeeID, firstName, lastName, currentPosition, managerID, email, createdAt, updatedAt) values (212000003, "siraj", "mohamed", "Sr. Network Operations Engineer", "2121110002", "siraj.mohamed@ge.com", now(), now());
insert into users (employeeID, firstName, lastName, currentPosition, managerID, email, createdAt, updatedAt) values (212000004, "john", "steskal", "Sr. Site Reliability Engineer", "2121110003", "john.steskal@ge.com", now(), now());
insert into users (employeeID, firstName, lastName, currentPosition, managerID, email, createdAt, updatedAt) values (212000005,"sung", "lee", "Sr. Site Reliability Engineer", "2121110001","sung.lee@ge.com", now(), now());

/*  THE FOLLOWING WORKS FOR TABLES CREATED BY NON-SEQUELIZE ONLY
insert into projects (name, description, product, projectStartDate, projectDuration,skills) values ("testProj", "Just testing","the product", "2018-12-19", 2,"java");

insert into users (employeeID, password,  firstName, lastName, currentPosition, managerID,  email) values (212000000, "password124", "jay", "cha", "Sr. Site Reliability Engineer", "2121110000", "jay,cha@ge.com");
insert into users (employeeID, password,  firstName, lastName, currentPosition, managerID,  email) values (212000001, "password125", "ronald", "chaudry", "Site Reliability Engineer", "2121110000", "ronald.chaudry@ge.com");
insert into users (employeeID, password,  firstName, lastName, currentPosition, managerID, email) values (212000003, "password126", "siraj", "mohamed", "Sr. Network Operations Engineer", "2121110002", "siraj.mohamed@ge.com");
insert into users (employeeID, password,  firstName, lastName, currentPosition, managerID, email) values (212000004, "password127", "john", "steskal", "Sr. Site Reliability Engineer", "2121110003", "john.steskal@ge.com");
insert into users (employeeID, password,  firstName, lastName, currentPosition, managerID, email) values (212000005,"password128",  "sung", "lee", "Sr. Site Reliability Engineer", "2121110001","sung.lee@ge.com");
*/
