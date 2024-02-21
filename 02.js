function month (num){
    if (num == 1 || num == 2 || num == 3){
        return 1
    }
    if (num == 4 || num == 5 || num == 6){
        return 2
    }
    if (num == 7 || num == 8 || num == 9){
        return 3
    }
    if (num == 10 || num == 11 || num == 12){
        return 4
    }
}

const number1 =prompt ('number of the month')

const result =month(number1 )
console.log(result)