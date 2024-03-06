let coinFlip

let numFlips

numFlips = prompt("How many times do you want to flip the coin?")

for (let i = 1; i <= numFlips; i++) {
    coinFlip = Math.round(Math.random())
    // console.log(coinFlip)
    if (coinFlip>=0.5) {
        console.log("Heads")
    } else {
        console.log("Tails")
    }
}