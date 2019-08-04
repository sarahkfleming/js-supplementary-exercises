// Tic Tac Toe

// https://github.com/nashville-software-school/the-vault
// Create a grid of nine boxes
// When any box is clicked a red X appears
// When the next box is clicked a Blue O appears

// Add click listener to container. When the user clicks a box, generate an HTML string with a red X and put it in the DOM
const ticTacToeContainer = document.querySelector(".tic-tac-toe--container")
const createXHTML = () => {
   return `
   <span class="letter" id="red">X</span>
   `
}
const createOHTML = () => {
    return `
    <span class="letter" id="blue">O</span>
    `
}

const individualBox = document.querySelector(".box")
const addHTMLtoDOM = (HTMLString) => {
    individualBox.innerHTML = HTMLString
}


ticTacToeContainer.addEventListener('click', () => {
    individualBox.innerHTML = ""
    const addAnX = createXHTML()
    addHTMLtoDOM(addAnX)
})



// #1 and #2 are repeated until a row of 3 of the same character is created

// When a win happens:
// Alert the players who won
// Disallow any further clicks on the game board
// Display a Play Again button that resets the game

// For a tie:
// Alert players that game has ended in a tie
// Display a Play Again button that resets the game

