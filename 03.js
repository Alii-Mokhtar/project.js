function elevator(num1,num2,num3){
    
    let one = num1-num3
    let two = num1-num3
    
    if (one < two) {
        return'left'
    }
    else if((num1-num3) < (num2-num3) && (num1+num3) < (num2+num3)){
        return'left'
    }
    else{
        return 'right'
    }
}

let a =Number(prompt('lrft elevator'))
let b =Number(prompt('right elevator'))
let c =Number(prompt('enter your place'))

let x = elevator(a,b,c)
console.log(x)