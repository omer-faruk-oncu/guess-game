let number = Math.trunc(Math.random()*100)
let right = 5

while(right < 6){
    let guess = +prompt("Enter a number: ")

    if(isNaN(guess)){
        alert(`Enter a valid number`)
    }
    if(guess===number){
        alert(`Congrat. You won.`);
        break
    }else if (guess > number) {
        alert(`Sorry. Enter lower number.You have ${right-1} rights`);
    }else if (guess < number) {
        alert(`Sorry. Enter higher number.You have ${right-1} rights`);
    }
    right--
    if(right===0){
        alert(`Sorry. You don't have rights.`);
        break
    }
}

