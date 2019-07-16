const dollarAmount = 4.05
const piggyBank = {}

piggyBank.quarters = 0
piggyBank.dimes = 0
piggyBank.nickels = 0
piggyBank.pennies = 0

const convertDollars = dollarAmount * 100
let remainingCash = 0

piggyBank.quarters = Math.floor(convertDollars/25)
remainingCash = convertDollars - (piggyBank.quarters * 25)
piggyBank.dimes = Math.floor(remainingCash/10)
remainingCash -= piggyBank.dimes * 10
piggyBank.nickels = Math.floor(remainingCash/5)
remainingCash -= piggyBank.nickels * 5
piggyBank.pennies = Math.floor(remainingCash/1)
remainingCash -= piggyBank.pennies * 1

console.log(piggyBank)