// Functions, returns , if , arrays , for loop , Objects .

// const gas = [20,40,50,100];
// const food = [30,50,30];

// function calculateTotal(arr){
//     for (let i = 0; i < arr.length; i++){
//         console.log(i);
//         console.log(arr[i]);
//     }
// }
// calculateTotal(gas);


// const gas = [20,40,50,100];
// const food = [30,50,30];

// function calculateTotal(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//         total += arr[i]; //total = total+arr[i]
//     }
//     console.log(total);
// }
// calculateTotal(gas);
// calculateTotal(food);

//here we want to store the values we will use return
//we will apply return here

// const gas = [20,40,50,100];
// const food = [30,50,30];

// function calculateTotal(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//         total += arr[i]; //total = total+arr[i]
//     }
// return total;
// }

// let gasTotal = calculateTotal(gas);
// let foodTotal = calculateTotal(food);
// let randomTotal = calculateTotal([1,2,3,4,5,6,7,8,9]);
// B
// // console.log(gasTotal);
// // console.log(foodTotal);
// // console.log(randomTotal);

// //here we will use objects to get output
// console.log({
//     gas: gasTotal,
//     food: foodTotal,
//     random: randomTotal,
// });


//here we will add if

const gas = [20,40,50,100];
const food = [30,50,30];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]; //total = total+arr[i]
        //here we will apply if
    }
    if (total > 100){
        console.log(`hey you are spending too much money`);
        return total;
    }
    console.log(`heyy man you are good, total is lessthan 100`);
return total;
}

let gasTotal = calculateTotal(gas);
let foodTotal = calculateTotal(food);
let randomTotal = calculateTotal([1,2,3,4,5,6,7,8,9]);

// console.log(gasTotal);
// console.log(foodTotal);
// console.log(randomTotal);

//here we will use objects to get output
console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal,
});
