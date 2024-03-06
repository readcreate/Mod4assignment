let suit

for (let index = 0; index <= 15; index++) {
    if (index % 2 == 0) {
        suit = "even"
    } else {
        suit = "odd"
    }

    console.log(`${index} is ${suit}`)
    
}