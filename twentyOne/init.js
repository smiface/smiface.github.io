const betSizeInput = document.getElementById("betSizeInput")
const takeCardBtn = document.getElementById("takeCardBtn")
const checkCardsBtn = document.getElementById("checkCardsBtn")
const startGameBtn = document.getElementById("startGameBtn")
const playerHandEl = document.getElementById("playerHand")
const stickmanHandEl = document.getElementById("stickmanHand")
const playerHandSum = document.getElementById("playerHandSum")
const stickmanHandSum = document.getElementById("stickmanHandSum")
const balanceDisplay = document.getElementById("balanceDisplay")

let bet = Number;
let player = [];
let stickman = [];
let deck = [];

const takingCardDelay = 300
function takingCard(ms) {
    return new Promise(resolve => setTimeout(resolve, ms = takingCardDelay));
}

startGameBtn.addEventListener("click", startGame)
takeCardBtn.addEventListener("click", () => playermove(true))
checkCardsBtn.addEventListener("click", () => {
    takeCardBtn.disabled = true;
    checkCardsBtn.disabled = true;
    playermove(false)
})

if (localStorage.getItem("balance") == null) {
    localStorage.setItem("balance", 5000)
}