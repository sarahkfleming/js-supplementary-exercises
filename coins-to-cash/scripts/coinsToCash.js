const piggyBank = {
    quarters: 30,
    dimes: 98,
    nickels: 324,
    pennies: 1003
}
let dollarAmount = 0

const dollarBills = () => {
    dollarAmount = (piggyBank.quarters / 4) + (piggyBank.dimes / 10) + (piggyBank.nickels / 20) + (piggyBank.pennies / 100)
}

dollarBills()
console.log(`Dollar Amount: $${dollarAmount}`)