// conditional statements
// operators

// statements- Set of instructions is called a Statement..

// Syntax:-

//if (condition){
    //statement 
// else if (condition)
  // stsatement
// } else {
    // ststement
// }

// if condition
var a = true;
if (a){
    console.log("this is true");
}

// if, else condition
var a = 5;
var b = 7;
if(a > b){
    console.log("this is true");
}
else{console.log("this is false");
}

// if, else if, else
var a = 7;
var b = 5;
var c = 4;
if(b < c){
    console.log("this is true");
}
else if (a-c){
    console.log("sum of this false");
}
else {
    console.log("this is true");
}

// operators


// 1. Arithmetic Operators --------> + , - , * , ** , / , % , ++ , -- ;

// Addition (+)
var x = 5;
var y = 2;
console.log(x + y);

//Subtraction  (-)
var x = 5;
var y = 2;
console.log(x - y);

//Multiplication  (*)
var x = 5;
var y = 2;
console.log(x * y);

//Division  (/)
var x = 5;
var y = 2;
console.log(x / y);

// Reminder  (%)
var x = 5;
var y = 2;
console.log(x % y);

// Incremental (++)
//pre Increment

var x = 5;
console.log(++x);

//post Increment
var x = 5;
console.log(x++);
console.log(x);

//decrement (--)
//pre decrement
var x=15;
console.log(++x);

//post decrement
var x=15;
console.log(x++);
console.log(x);

// 2. Assignment Operators -----> = , += , -= , *= , /= , %= , <<= , >>= , 
// Addition
var x =10;
console.log(x += 5); 

//Subtraction
var x =10;
console.log(x -= 5); 

//Multiplication 
var x =10;
console.log(x *= 5); 

//Division
var x =10;
console.log(x /= 5); 

//Reminder
var x =10;
console.log(x %= 5); 

// 3. Comparisons -- i)Logical Operatos.....
//                  ii)Equality Operators....
//                 iii)Ternary Operators.....

// 1. Logical operators
// i) (&&) this condition is true
var x = 10;
var y = 20;
console.log(x<y && y>x);

//  ii) (OR) Any one should be true
var x = 10;
var y = 20;
console.log(x>y && y>x);

// iii) (NOT) it displays opposite of an result ... if the condition is true but executes as False
var x = 10;
var y = 20;
console.log(!y<x);

// 2. Equality operator
// i). Lose operator(==) this compares the value to perform the operation
var x = 25;
var y = 15;
console.log(x==y);

//ii) Strict operator(===) this compare the both datatype and value to perform the operation
// Ex 1.
var x = 25;
var y = 15;
console.log(x===y);

// Ex 2.
var x = 25;
var y = "25";
console.log(x===y);

// Ex 3.
var x = 25;
var y = 25;
console.log(x===y);

// 3. Ternary operator..
var age = 19;
age > 18 ? console.log("Eligible for vote") : console.log("not eligible");











