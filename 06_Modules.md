// Question

Q) Built-in module ?

<br/>

# Modules

1. Core Modules (global, non-global)
2. External Module

**1. Core Module**
- modules which come pre built with Node./ or / The Node.js core modules are a set of modules that are included with the Node.js runtime.
- ex: console.log(), fs, Buffer. HTTP
- core module helps to implement basic features and functionality.

1.1 Global Module
- modules which doesn't need to be imported. ex: console.log().

1.2 Non-global Module
- modules which need to be imported before using it. ex: fs, http. 
**All the Module can be found on: https://nodejs.org/dist/latest-v18.x/docs/api/**

```javascript
console.log("it is global");

fs.writeFileSync("hello.txt","import me first");
```


```javascript
// How to import modules
// Syntax	                Description

// require("fs");	        This syntax loads the fs module from the current file system. This is the preferred syntax for Node.js 17 or later.

// require("node:fs");	    This syntax loads the node:fs module from the Node.js core modules. This syntax should only be used if you are using an older version of Node.js.


// when to use 'node:' prefix

// > only be used if you are using an older version(below 17) of Node.js that does not have features like fs.promises interface, etc. 
// >  use the node: prefix when importing a module from the Node.js core modules.

// > Ex: If you use the node:fs prefix when importing the fs module in an older version of Node.js, you will be able to use the fs.promises interface. The fs.promises interface is a newer interface that uses promises instead of callbacks.
// > 

```

## Module function (sync, async);
ex, fs.readFileSync(); fs.readFile();

> In Node.js, functions with "sync" as a postfix in their names are synchronous functions, and they do not use callbacks for handling the result of their operations. These functions are designed to block the execution of your program until the operation is complete
>
> rest is asynchronous function which uses either callbacks or promises ;



////////////////////////////////////////////////////////////////

# Important Modules

### Nodemon Module
> helps to create live server ; so that we don't have to restart server everytime.
>
> to install use: npm i nodemon 

> earlier we were using node < file-name >, to execute that   

> Now use: nodemon < file-name > ; 
 
 ### fs
 > module enables interacting with the file system

- fs.writeFileSync() : write in any file/create file
- fs.unlinkSync() : delete file