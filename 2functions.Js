// Arrays, functions,& Objects
// return
// default Undefined, Shortcuts, ignore after
// 1 inch 2.45cm

const wallheight=80;
function calculate(value) {
    const newValue=value*2.45;
    // console.log("The value in cm is: " + value * 2.54 + " cm");
    return newValue;
    //After return not to execute anything suppose u will write also it will not work
}
const width = calculate(100);
const height = calculate(wallheight);

const dimensions = [width, height];
console.log(dimensions);

