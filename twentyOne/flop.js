function flop() {
    // clean hands display
    playerHandSum.innerHTML = ``
    stickmanHandSum.innerHTML = ``

    // refresh deck
    playerHandEl.innerHTML = ``
    stickmanHandEl.innerHTML = ``
    player = [];
    stickman = [];
    deck = [];
    const cardsSuits = ["Hearts", "Tiles", "Clovers", "Pikes"]
    cardsSuits.forEach(suit => {
        deck.push(
            {
                suit: suit,
                title: "A",
                value: 1
            },
            {
                suit: suit,
                title: "2",
                value: 2
            },
            {
                suit: suit,
                title: "3",
                value: 3
            },
            {
                suit: suit,
                title: "4",
                value: 4
            },
            {
                suit: suit,
                title: "5",
                value: 5
            },
            {
                suit: suit,
                title: "6",
                value: 6
            },
            {
                suit: suit,
                title: "7",
                value: 7
            },
            {
                suit: suit,
                title: "8",
                value: 8
            },
            {
                suit: suit,
                title: "9",
                value: 9
            },
            {
                suit: suit,
                title: "10",
                value: 10
            },
            {
                suit: suit,
                title: "J",
                value: 2
            },
            {
                suit: suit,
                title: "Q",
                value: 3
            },
            {
                suit: suit,
                title: "K",
                value: 4
            },

        )
    })

    balance = tryBet()
    localStorage.setItem("balance", balance)
    betSizeInput.disabled = true;
    startGameBtn.disabled = true;

    (async () => {
        takeCard(player)
        await takingCard();
        takeCard(stickman)
        await takingCard();
        takeCard(player)
        await takingCard();
        takeCard(stickman);

        takeCardBtn.disabled = false;
        checkCardsBtn.disabled = false;
    })()
}