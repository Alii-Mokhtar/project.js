let num = Math.floor(Math.random()*101)
switch(true){
    case num <20:
    document.body.style.backgroundColor='red'
    break;
    case num >=20 && num <40:
        document.body.style.backgroundColor='blue'
    break;
    case num >=40 && num <60:
        document.body.style.backgroundColor='green'
    break;
    case num >=60 && num <80:
        document.body.style.backgroundColor='yellow'
    break;
    default:
        document.body.style.backgroundColor='black'

}
console.log(num)