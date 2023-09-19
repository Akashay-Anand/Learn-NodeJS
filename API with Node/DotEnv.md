# Environment Variables
> variables related to evironment which is been used in app. 

> variable outside of your application's code that is part of the environment in which your software runs

> these variables sometimes need to be protected and hidden for security purposes.

> In node.js we didn't want to expose secret keys, passwords, id to users. SO it need to be stored securely.

## benefits of storing then in diffeent file

> Security
> Maintain multiple development configurations

## How to implement it in node.js

> Nodejs have a library called 'dotenv' or '.env'
> Nodejs also have global objects called 'process' which holds lots of data including 'env' ;  

- Overall the concept is: As a developer, I should not be writing important variables or key directly inside code files.(it may couse security issues...)
- Instead I should store important data in secure files (e.g.: '.env') as we discussed above.
- these env files are accessible through the global object 'Process'; (more about it in 'process.js' file in this repository);

<br><br>
<hr><hr>
<br><br>

## Implementing whatever we have discussed above;

> Install 'dotenv' > 
```bash
npm i dotenv
```

> create '.env' file inside project folder at the same level. and store data in the form of key=value pairs

- ex: file of '.env'
```py
# this is comment
url="www.google.com"
uid=admin
pass=123456789admin
```

> import env in code file
```js 
require('dotenv').config();
// note: no need to store it in any variables; I will be accessing it through 'Process object'

const port = process.env.PORT;
console.log(port);
```
