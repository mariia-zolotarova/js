let gb = prompt("How much GB you have?")


let a = +gb * 1000;

let b = a / 820;

console.log(Math.floor(b) + " mb");
console.log(a % 820 + " mb")

