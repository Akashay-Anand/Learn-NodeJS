# MongoDB

> Install Mongo Package "mongoose"
> - npm i mongoose

> Follow the documentation
> - https://www.npmjs.com/package/mongoose
> - https://learn.mongodb.com/learning-paths/mongodb-nodejs-developer-path
> - https://learn.mongodb.com/catalog
> - https://www.w3schools.com/nodejs/nodejs_mongodb.asp
> 

<br/><br/><br/>
<hr/>
<hr/>
<br/><br/><br>

## Steps to follow

> Step 01
> - install mongoose

> Step 02
> - login to mongodb.com 
> - create database 
> - create user and store id password in .env file

> Step 03
> - go to database
> - click on connect button ; and then select connect to your application
> - select driver and version ; copy conect url and store it for latter use;

```txt
// DBurl should look like this.
mongodb+srv://<user>:<password>@cluster0.seyxttn.mongodb.net/?retryWrites=true&w=majority

// rerplace these
'<user>' : replace it with username
'<password>' : replace it with password
'mongodb.net/?retryWrites' : (optional) add collection name in between '/<here>?' in that link

// DBurl after making changes
mongodb+srv://adminexample:passExample@cluster0.seyxttn.mongodb.net/node-test01?retryWrites=true&w=majority


```

> Step 04
> - look up in documentation to connect.

> - use DBurl to connect using bellow command.
mongoose.connect(DBurl)
  .then(() => console.log('Connected!'));

> this DBurl is for local database.
  'mongodb://127.0.0.1:27017/test'