let string = prompt('enter your string');
let a = string.length;
// console.log(a)
let b = '';
for(let i = a-1; i>=0; i--){
    b += string[i];
}
console.log(b)