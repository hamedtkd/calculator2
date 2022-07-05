// let firstNumber = +prompt("Enter the first number");
// let  oprator = prompt("+ - / * ?");
// let secondNumber = +prompt("Enter the second number");
// let result = 0
// switch (oprator) {
//     case "+":
//         result = firstNumber + secondNumber;
//         break;
//     case "*":
//         result = firstNumber * secondNumber;
//         break;
//     case "-":
//         result = firstNumber - secondNumber;
//         break;
//     case "/":
//         result = firstNumber / secondNumber;
//         break;
//     }

// console.log(result);

const calculator={
    // firstNumber,
    // oprator,
    // secondNumber,
    // result,
    result : 0,
    sum(a,b){
     return a + b ;
        }
        ,
    
    smite(a,b){
        return a * b ; 
    },
    mines(a,b){
        return a - b;
    },
    Division (a,b){
        return a / b;
    }

}



calculator.result = calculator.smit(5,5);

console.log(calculator.result);
