# MyGig
Project 2 for GE Bootcamp

“MyGig at Digital”

MyGig is a web based application used to track and manage an internal project postings to be utilized by project managers and employees.  Project managers can post new projects(next gig) and employees can view and apply for next gig.   This tool allows our company to tap into deep domain knowledge of our employees skill sets and for employees to work on project outside of normal work functions.  

Key features:
SMS/Email integration for notification and approval 
User Authorization / Tracking / RBAC
View / Post / Apply to Gigs

## Live Demo Page

 https://mygigsdigital.herokuapp.com

## Team Members
- [Jay Cha](https://www.linkedin.com/in/jay-cha-b8329714/)

- [Ronald Chaudry](https://www.linkedin.com/in/rchaud03/)

- [Siraj Mohammed](https://www.linkedin.com/in/sirajurrahman/) 

- [John Steskal](https://www.linkedin.com/in/johnsteskal/) 

- [Sung Lee](https://www.linkedin.com/in/sunglee/) 

## Getting Started

- Clone mygig repository (https://github.com/kimchikimchi/MyGig.git) 
- Local MySQL up and running

## NPM Dependencies

Run "npm install" to install dependencies

List of dependencies
- body-parser: ^1.18.3
- dotenv: 6.1.0
- express: 4.16.4
- express-handlebars: 3.0.0
- handlebars: 4.0.12
- handlebars.moment: 1.0.4
- mysql: 2.16.0
- mysql2: 1.6.1
- node-mailjet: 3.3.1
- plivo: 4.0.3
- sequelize: 4.39.1

## Technologies Used

- Model: MySQL / Sequelize
- Controller: Node / Express / Handlebars / Plivo / Mailjet
- View: HTML / Bootstrap / jQuery / Moment

## How to run locally

- node server.js
- http://localhost:3000

## Project notes

- Steps Rename from old to new name https://dry-hollows-27871.herokuapp.com/ to
http://mygigsung.herokuapp.com/
1)  go into heroku, click on the app, then setting
2)  you will see a place to "Edit" 
3)  change from dry-hollows-27871 to mygigsung
update heroku remote
$  git remote -v
heroku  https://git.heroku.com/dry-hollows-27871.git (fetch
heroku  https://git.heroku.com/dry-hollows-27871.git (push)
origin  https://github.com/kimchikimchi/MyGig.git (fetch)
origin  https://github.com/kimchikimchi/MyGig.git (push)
4) git remote rm heroku
5) heroku git:remote -a mygigsung
set git remote heroku to https://git.heroku.com/mygigsung.git

- [MyGig Databased Design.pdf](https://github.com/kimchikimchi/MyGig/files/2515889/MyGig.Databased.Design.pdf)

- [MyGigs Workflow .pdf](https://github.com/kimchikimchi/MyGig/files/2515894/MyGigs.Workflow.pdf)


## Screen Shots demo

![mygigs_demo](https://user-images.githubusercontent.com/40503899/47515194-2dab8980-d850-11e8-9b9f-18e80a3019a4.gif)
