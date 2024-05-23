//Loops
//Repeatedly run a block while condition is true
//While Loop

// loops will be worked on true or false
//Syntax
// while (condition) {
    // code block to be executed
//   }
  


// //In while loop we can't write true because it will goes infinite so that's why we will write like this
// let amount=10;
// while(amount>0){
//     console.log("I have "+ amount +" dollars so i will go to shopping");
//     amount--;//amount = amount -1;
// }

// while(false){ //we can't write true there only we will apply false ,because we will apply true the browser will countinously loading and it will became stuck the browser.
//     console.log("Executing");
// }


// While loop

// Define a variable
// let i = 0;

// // Define the condition for the while loop
// while (i < 5) {
//   // Execute this block of code as long as the condition is true
//   console.log("The value of i is: " + i);
  
//   // Increment the variable
//   i++;
// }

// console.log("Loop finished.");

// Examples

// let i=0;
// while(i<5) {
//     console.log("the value of i is : " +i);
//     i++;
// }
// console.log("Loop is finished.");

// 1.Countdown

// let countdown=5;
// while(countdown > -1){
//     console.log(countdown);
//     countdown--;
// }
// console.log("Blast Off");

// 2.User Input Validation

// let userInput;

// while (true) {
//   userInput = prompt("Enter a number greater than 10:");
  
//   if (parseInt(userInput) > 10) {
//     console.log("Valid input!");
//     break; // Exit the loop if the input is valid
//   } else {
//     console.log("Please enter a number greater than 10.");
//   }
// }

// 3.Generating Fibonacci Sequence:

// let a=0, b=1, temp;
// while(a < 100){
//     console.log(a);
//     temp = a+b;
//     a=b;
//     b=temp;
// }

let num=0;
while(num<=5){
    console.log(num);
//Here we can apply -- browswer will continuously loading 
    num++;
}
