# Modules

1. Core Modules (global, non-global)
2. External Module

**1. Core Module**
- modules which come pre built with Node.
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

Q) if we importe module after using it than also it workes. Why?
