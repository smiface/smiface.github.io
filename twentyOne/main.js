function refreshTable() {
    takeCardBtn.disabled = true;
    checkCardsBtn.disabled = true;
    startGameBtn.disabled = false;
    betSizeInput.value = 0;
    betSizeInput.disabled = false;

    const currentBalance = localStorage.getItem("balance")
    balanceDisplay.innerHTML = currentBalance;
}

refreshTable()

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}

function tryBet() {
    let balance = Number(localStorage.getItem("balance"))
    bet = Number(betSizeInput.value)

    if (balance > bet && bet > 0) {
        balance = balance - bet
        return balance
    } else {
        betSizeInput.style.trasition = "0.3s"
        betSizeInput.style.border = "2px red solid"
        setTimeout(() => {
            betSizeInput.style.border = "1px black solid"
        }, 1000);
        return false
    }
}

function takeCard(person) {
    // person = player / stickman
    const idx = randomInteger(0, deck.length)
    const card = deck[idx]
    // take from deck
    const index = deck.indexOf(card);
    if (index > -1) {
        deck.splice(index, 1);
    }
    // give to player
    person.push(card)
    // display new card
    let hand;
    person == player ? hand = playerHandEl : hand = stickmanHandEl

    let cardEl = document.createElement("div")
    cardEl.className = "col-md-1 bg-white m-2 d-flex align-items-center justify-content-center"
    let img = document.createElement("img")
    img.className = "col-md-6"
    img.alt = "card img"
    img.src = "./img/" + card.suit + ".png"
    let p = document.createElement("p")
    p.textContent = card.title
    cardEl.appendChild(img)
    cardEl.appendChild(p)
    hand.appendChild(cardEl)

    // display new hands sum
    playerHandSum.innerHTML = handSum(player)
    stickmanHandSum.innerHTML = handSum(stickman)
}

function handSum(person) {
    let values = person.map(item => item.value)
    let sum = values.reduce((a, b) => a + b, 0)
    return sum
}

function startGame() {
    if (tryBet() != false) {
        flop()

        switch (handSum(stickman)) {
            case 21:
                handSum(player) == 21 ? CheckWin() : CheckWin(stickman)
                break;
            default:
            // playermove(true/false)
        }
    }
}

function nextMove(person, value) {
    if (person == stickman && value == 21) {
        if (handSum(stickman) > 21) {
            CheckWin(player)
        } else {
            nextMove(stickman, 17)
        }
    }
    if (person == stickman && value == 17) {
        if (handSum(stickman) >= 17) {
            CheckWin()

            takeCardBtn.disabled = true;
            checkCardsBtn.disabled = true;
        } else {
            (async () => {
                await takingCard();
                takeCard(stickman)
                nextMove(stickman, 21)
            })()

        }
    }
    if (person == player && value == 21) {
        CheckWin(stickman)
    }
}

function playermove(boolean) {
    switch (boolean) {
        case (true):
            takeCard(player)
            if (handSum(player) > 21) {
                nextMove(player, 21)
            } else {
                takeCardBtn.disabled = false;
                checkCardsBtn.disabled = false;
            }
            break;
        case (false):
            nextMove(stickman, 21)
            break;
    }
}

function CheckWin(winner = undefined) {
    refreshTable()

    switch (winner) {
        case player:
            updateBalance(winner)
            inform("You win")
            break;
        case stickman:
            inform("You lose")
            break;
        case "standoff":
            updateBalance(winner)
            inform(winner)
            break;
        case undefined:
            if (handSum(player) > handSum(stickman)) {
                CheckWin(player)
            }
            if (handSum(player) < handSum(stickman)) {
                CheckWin(stickman)
            }
            if (handSum(player) == handSum(stickman)) {
                CheckWin("standoff")
            }
    }
}

function updateBalance(winner) {
    const currentBalance = Number(localStorage.getItem("balance"))

    switch (winner) {
        case player:
            newBalance = currentBalance + bet * 2
            localStorage.setItem("balance", newBalance)
            break;
        case "standoff":
            newBalance = currentBalance + bet
            localStorage.setItem("balance", newBalance)
            break;
    }
}

function inform(text){
    setTimeout(() => {
        balanceDisplay.innerHTML = localStorage.getItem("balance")
    }, 2000);
}