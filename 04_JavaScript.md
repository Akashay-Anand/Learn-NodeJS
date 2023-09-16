# Index
- Lexical Structure
- Expressions
- Data Types
- Classes
- Variables
- Functions 
- Arrow Functions
- this operator -
- Loops
- Scopes
- Arrays
- Template Literals
- Strict Mode
- ECMAScript 2015 (ES6) and beyond


## Lexical Structure

> lexical grammar refers to the set of rules that govern how the individual elements of the language, such as identifiers (variable names), keywords, operators, literals, and punctuations, are formed and structured. This grammar defines how these elements should be written to create valid and meaningful JavaScript code.

> JavaScript source text is just a sequence of characters — in order for the interpreter to understand it,

> the string has to be parsed to a more structured representation. The initial step of parsing is called **lexical analysis**

## Expressions & Operators

check out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

> Expression is a combination of variables, constants, and operators that evaluates to a single value.

> Operators are symbols that perform operations on operands

<br/>

> **Primary expressions**

- Basic keywords and general expressions in JavaScript. These expressions have the highest precedence (higher than operators).

- **this** = 
The this keyword refers to a special property of an execution context.

- **Literals** =
Basic null, boolean, number, and string literals.

- **[]** =
Array initializer/literal syntax.

- **{}** =
Object initializer/literal syntax.

- **function** =
The function keyword defines a function expression.

- **class** =
The class keyword defines a class expression.  The class expression
<br/>
*etc.*

> **Left-hand-side expressions**

- **?.**
The optional chaining operator returns undefined instead of causing an error if a reference is nullish (null or undefined).

- **new**
The new operator creates an instance of a constructor.


> **Increment and decrement**

- A++, A-- , ++A, --A


> **Unary operators**


## DataTypes

*JavaScript offers seven primitive types:*

- Number: used for all number values (integer and floating point) except for very big integers.
- BigInt: used for arbitrarily large integers.
- String: used to store text.
- Boolean: true and false — usually used for conditional logic.
- Symbol: used for creating unique identifiers that won't collide.
- Undefined: indicating that a variable has not been assigned a value.
- Null: indicating a deliberate non-value.

*[Note]* Everything else is known as an Object. Common object types include: *Function, Array, Date, RegExp, Error*

## Classes

- Classes are a template for creating objects
- example
  ```javascript
  class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    }
  }
  // Like function expressions, class expressions may be anonymous, or have a name that's different from the variable that it's assigned to. However, unlike function declarations, 
  ```


## Variables
- A variable is a container to store some values.

*JavaScript Variables can be declared in 3 ways:*
* Using var
* Using let
* Using const

```javascript
//  x is undeclared variables.
// automatically declared when first used (hosted)
x = 5;

//  var
var x = 5;

// Let 
let x = 5;

// const
const x = 5;
// These are constant values and cannot be changed.

///////////////

// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.

```

- The design of var is confusing and error-prone. So let was created in modern versions of JavaScript
- it's default value is undefined ( if we don’t assign any value at the time of declaration)
- If you try to access the variable that doesn’t exist, you will get an error message. (Uncaught ReferenceError: variable not defined)
- VAR HOISTING: Var variables can be accessed before their declaration. Javascript moves all the var variables to the top of the function or global context.



## Function
- A function is a block of code that can be executed repeatedly, as needed. Functions are really useful because you write the code once and then you can run it multiple times.

> Type of Function
```JavaScript
// 01 function declaration
function fun(name){
    console.log("Hello". ${})
}
fun('Anand');


// 02 function expression
let namedVariable = function myFunction(){
	//some code here...
}

// 03 arrow function
let foo = () => {
  console.log("Hello");
}

// 04 Immediately Invoked Function Expressions (IIFEs)
(function (){
	let pi = "3.141"
    console.log(pi)
})();

```

## Sync and Async Functions 

> In Synchronous operations tasks are performed one at a time
>
> In Asynchronous, Second Task do not wait to finish First Task

```js

// essue with async. // it can be handled using callback, promisses.
let a = 10;
let b=0;

setTimeout(()=>{
  b = 20;
},2000)

console.log(a+b) // output: 10

```


## This operator

- A function's this keyword behaves a little differently in JavaScript compared to other languages
- It also has some differences between **strict mode** and non-strict mode.
- the value of this is determined by how a function is called (runtime binding).









# Resources
- https://nodejs.dev/en/learn/how-much-javascript-do-you-need-to-know-to-use-nodejs/
- 