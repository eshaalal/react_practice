// var numbers=[4,6,7,9,2,1];
// var roots=numbers.map(Math.sqrt);
// console.log("roots are: "+ roots);

// const value=(a,b)=>a*b;
// console.log(value(3,5)); 


const num=[4,9,6,4,3];
let first=num.find(func);
function func(value,index,array){
    return value >7;
}
console.log(first);

var a=[2,4,5];
var b=[7,8,9];
var c=[...a,...b];
console.log(c);


