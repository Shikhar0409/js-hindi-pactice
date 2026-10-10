
// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let pattern = " ";

//     for (let j = 1; j <= rows - i; j++) {
//         pattern += " ";
//     }

//     for (let k = 1; k <= 2 * i - 1; k++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }

// let s = 2;
// console.log(s++ + ++s);
// console.log(s--);


// for (let i = 1; i <= 5; i++){
//     console.log("*" .repeat(i))
// }

let row = 5
for(i= 1; i <= row; i++){
    let space = " " .repeat(r-i)
    let star = "*" .repeat(2*i + i)
    console.log(space + star)
}
