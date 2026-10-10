let valueInNumber = Number(score)
console.log(typeof valueInNumber) ;
console.log(valueInNumber);

// "33" = 33;
// "45f" = NaN (not a number);
// true = 1;
// false = 0;
// null = 0;
// These all are normal conversion

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 = true
// 0 = false
// "shikhar" = false
// "" = false (empty)


let value = null

let some = String(value)
console.log(some)
console.log(typeof some)
console.log(some)

// 3 = string


// ****************************************************** Operations *******************************************

let value2 = 3
let negValue = -value2
// console.log(negValue)

// console.log(3+3); result = 6
// console.log(2+1); result = 3
// console.log(2**3); result = 8
// console.log(20%8); result = 4

let str1 = "Hello"
let str2 = " Shikhar"

let str3 = str1 + str2
console.log(str3)

//console.log("1" + 2);  12
//console.log(1 + "2");  12
//console.log("1" + 2 + 2 + 7); 1227
//console.log(1 + "2" + 34);  1234
//console.log(1 + 3 + 4 - 7 + "28");  128
// if string value is in first order then rest value treated as string 
// if string value is in last then operation will be function
// console.log(+true); 1 (not to used this type of conversion/operation)

let num1, num2, num3

// num1 = num2 = num3 = 2 + 3

let gameCounter = 100
// gameCounter++; // postfix mei hua ye (purani value use krta hai fr uske baad increament krta hai)
// ++gameCounter; // prefix mei hua ye  (phle increament fr new value print hoti hai)
console.log(gameCounter++); 
console.log(++gameCounter);


let x = 5
console.log(++x + ++x);

// Postfix and Prefix is very imp;