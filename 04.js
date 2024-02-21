function convert (number){
    let x = (number-32)*5/9
    return x
}

let a =prompt('enter farenhite')
let result =convert(a)
console.log(result)
