// *****************Stars Pattern***********************

    // *
    // ** 
    // ***
    // ****
    // ***** 

// let n = 5
//  for(i=1; i<=n; i++){
//     let num = ""
//     for(let j=1; j<=i; j++){
//         num += "*"
//     }
//     console.log(num)
//  }

//  let n2 =5;
//   for(i=1; i<=n2; i++){
//     num2 = ""
//     for(let j =1; j <= n2 - i + 1; j++){
//         num2 += "*"
//     }
//     console.log(num2)
//   }

//   let n = 5;
//    for(i=1; i<= n; i++){
//     num = ""
//     for(j=1; j<= n-i; j++){
//         num += " "
//     }
//     for(k=1; k<=2*i-1; k++){
//         num += "*"
//     }
//     console.log(num)
//    }
 
let n = 5;
for(i=1; i<= n; i++){
    num = ""
    for(let j=1; j<= i-1; j++){
        num += " "
    }
    for(let k=1; k <= 2 * (n-i) +1; k++){
        num += "*"
    }
    console.log(num)
}


// let num_row = 5;
//  for(i = 1; i<=num_row; i++){
//     let Print = ""
//     for(let j = 1; j <= num_row - i; j++){
//         Print += " "
//     }
//     for(let k=1; k<= 2 * i - 1; k++){
//         Print += "*";
//     }
//     console.log(Print)
//  }