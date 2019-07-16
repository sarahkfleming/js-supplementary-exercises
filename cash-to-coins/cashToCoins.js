const dollarAmount = 4.87
const piggyBank = {}

piggyBank.quarters = 0
piggyBank.dimes = 0
piggyBank.nickels = 0
piggyBank.pennies = 0

const coinValues = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1
}

const convertDollars = dollarAmount * 100
let remainingCash = convertDollars

for (const coinType in coinValues) {
    const coinWorth = coinValues[coinType];
    piggyBank[coinType] = Math.floor(remainingCash/coinWorth)
    remainingCash -= piggyBank[coinType] * coinWorth
}

console.log(piggyBank)