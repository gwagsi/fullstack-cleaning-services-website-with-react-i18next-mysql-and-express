# fullstack-cleaning-services-website-with-react-i18next-mysql-and-express

Cleaning Company Website
Feature:
•	Click to Call Action
•	Contact Form
•	Show Reviews
•	GIVE THE OPTION FOR VISITORS TO WRITE THEIR REVIEW
•	put a google map
•	internalization
•	call to action
•	social media links
•	Chabot
•	Online booking
•	Blog section
Users:
•	The website will have two users.
•	The Admin and the client
•	Functions of the admin:
•	Create blog post, read and approve reviews, update blog sections

Functions of the client:
•	Write reviews
•	Write comments
•	Share post

React, Node.js Express, MySQL Architecture
The data of the site will be stored in MySQL database and connected to the front end by a Node.js server. For the front end we will use react.js. We’re going to build the application with following architecture:

 
Photo credit: https://bezkoder.com/
From the Features of the website, the blog will have the following data tables, Post, Users, Comments, Emails and user reviews. The data that stored in the database are;
For the Post:
id	title	featured-image	description	content	createdAt	slug	Users_Id

For the comments
Id	post_id	comments_id	name	email	publishedAt	content

For the Reviews:
name	email	content	rating	id

For the News Letter:
id	name	email

For the Contact Form:
Id 	name	email	subject	message	submitted

Using a database tool, we design the database model showing their various relations



 
Figure 1: Physical Database Model
 

Figure 2: Conceptual Database Model


To manage the database, we use Sequelize. Sequelize is a promise-based ORM for Node.js. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

Following the MVC Pattern of Development,
We create the models, controllers and config folders. The Sequelize cli handles the generation of the models.
Models
To create all the models, we need

sequelize model:generate --name Users --attributes userName:STRING,email:STRING,password:STRING 

sequelize model:generate –name Reviews --attributes email:STRING,name:STRING,rating:INTEGER,content:STRING
sequelize model:generate --name Mails --attributes name:STRING,email:STRING,subject:STRING,message:STRING,number:STRING 

sequelize model:generate --name Post --attributes title:STRING,slug:STRING,summary:STRING,content:String,featuredImage:String,user_id:INTEGER

sequelize model:generate --name Comments --attributes name:STRING,email:STRING,content:STRING,post_id:INTEGER,comments_id:INTEGER





These are APIs that our Node.js Express server is expected to export:

Methods	Urls	Actions
GET	api/posts	Get all Post
GET	api/posts/:id	Get Post by id
POST	api/posts	Add new Post
PUT	api/posts/:id	Update Post by id
DELETE	api/posts/:id	Remove Post by id
DELETE	api/posts	Remove all Post
GET	api/tutorials?title=[kw]	find all Posts which title contains 'kw'
		
GET	api/comment/:post_id	Get all Commets for a particular post
POST	api/comment	Add new comment
DELETE	api/comment/:user_id	Remove comment by user_id
		
GET	api/review	Get all review
POST	api/review	Add new review
DELETE	api/review/: comment_id	Remove review by id
		
Get	api/user/:id	Get user by id
Post	api/user	Add new user
Delete	api/user/:user_id	Remove user by id
		
Get	api/user/:id	Get user by id
Post	api/user	Add new user
Delete	api/user/:user_id	Remove user by id
		
Post	api/mail	Add new mail



