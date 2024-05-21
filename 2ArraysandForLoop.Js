//Arrays & For Loop

const firstName = ["Rajesh","Emma","neoom","asliin","meran"];
const lastName = "Thota";

//declare a new variable
let newArray = [];



for (let i=0; i<firstName.length;i++){
    newArray.push(`${firstName[i]} ${lastName}`);
}
console.log(firstName);
console.log(newArray);