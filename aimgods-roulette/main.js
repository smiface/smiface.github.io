const btnToggleGroup = document.querySelector('.btn-group-toggle')
const btnsToggle = btnToggleGroup.querySelectorAll('.btn')
const btnsToggleLabel = document.querySelectorAll('.btn-secondary')
const indexPage = document.getElementById('index')
const gamePage = document.getElementById('game')
const gameStartBtn = document.getElementById('gameStartBtn')
let prize;

// first load stuff

gamePage.remove()

function licenceCheck() {
    if (localStorage.getItem('allowed') == null) {
        alert("This is not real one Aimgod's roulette page")
        localStorage.setItem('allowed', true)
    }
}
licenceCheck()

function randomMath(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

notification.onmouseover = () => {
    notification.textContent = '*nothing lol*'
    setTimeout(() => {
        notification.remove()
    }, 1000);
}

function takeSelectedRadioValue() {
    btnsToggleLabel.forEach(item => {
        if (item.classList.contains("active")) {
            prize = item.querySelector('input').value
        }
    })
}

// balance stuff

const localKeys = () => Number(localStorage.getItem('keys'))

function checkBalance() {
    if (localKeys() < 1) {
        gameStartBtn.disabled = true
    }
}
checkBalance()

function tryTakeKey() {
    let nowKeys = localKeys()
    localStorage.setItem('keys', nowKeys - 1)
    displayKeysValue()
    checkBalance()
}

function displayKeysValue() {
    const displayKeysEl = document.querySelector('.afterKeysTaked')
    displayKeysEl.innerHTML = ` <p class="w-100 text-info mt-5"> You have ` + localKeys() + ` keys </p>`
    displayKeysEl.style.display = 'block'
}

function checkKeysTaked() {
    const takeKeysBtn = document.querySelector('.beforeKeysTaked')
    if (localStorage.getItem('keys') == null) {
        takeKeysBtn.style.display = 'block'
        takeKeysBtn.addEventListener('click', function () {
            keysValue = randomMath(20, 50)
            localStorage.setItem('keys', keysValue)
            this.remove()
            displayKeysValue()
            gameStartBtn.disabled = false
        })
    }
    if (localKeys != null) {
        displayKeysValue()
    }
}

checkKeysTaked()
  
// play game stuff

function gameState(step, gameTime, option) {
    switch (step) {
        case 'index':
            prize = undefined;
            btnsToggleLabel.forEach(item => {
                item.classList.remove("active");
            })

            document.body.appendChild(indexPage)
            setTimeout(() => {
                indexPage.style.opacity = 1;
                gamePage.style.opacity = 0;
                gamePage.remove()
            }, 0);
            break;
        case 'play':
            // toggle visability
            indexPage.style.opacity = 0;
            setTimeout(() => {
                indexPage.remove()
                document.body.appendChild(gamePage)
            }, 1000);

            // play game animation
            setTimeout(() => {
                addBoxes(gameTime, option)
                console.log('option - ' + option)
                gamePage.style.transition = '1s'
                gamePage.style.opacity = 1;
                setTimeout(() => {
                    gameScene(gameTime, option)
                }, 100);
            }, 1500);

            // toggle visability
            setTimeout(() => {
                document.querySelector('.secretBox').style.marginLeft = 0
                gameState('index')
                gamePage.style.opacity = 1;
            }, gameTime + 5000);
            break;
    }
}

function addBoxes(gameTime, option) {
    const slider = document.getElementById('slider')
    slider.innerHTML = ``

    function addSecretBoxes() {
        const idx = randomMath(1, 4)
        const box = document.createElement('img')
        box.className = 'secretBox'
//         box.src = "/img/box" + idx + ".png"
        box.src =  "https://raw.githubusercontent.com/etozhesmirnov/aimgods-roulette/main/img/box" + idx + ".png"
        document.getElementById('slider').appendChild(box)
    }
    function addNothingBox() {
        const box = document.createElement('img')
//         box.src = "/img/nothing.png"
        box.src = "https://raw.githubusercontent.com/etozhesmirnov/aimgods-roulette/main/img/nothing.png"
        box.className = 'nothingBox'
        document.getElementById('slider').appendChild(box)
    }
    function addPrizeBox() {
        let box = document.createElement('img')
        box.className = 'prizeBox'
        switch (prize) {
            case 'mouse':
                const idx = randomMath(1, 4)
//                 box.src = "/img/mouse" + idx + ".png"
                box.src = "https://raw.githubusercontent.com/etozhesmirnov/aimgods-roulette/main/img/mouse" + idx + ".png"
                break;
            case 'game copy':
//                 box.src = './img/dvd.webp'
                box.src = "https://raw.githubusercontent.com/etozhesmirnov/aimgods-roulette/main/img/dvd.webp"
                break;
            case 'keys':
//                 box.src = './img/icon3.png'
                box.src = "https://raw.githubusercontent.com/etozhesmirnov/aimgods-roulette/main/img/icon3.png"
                break;
            default:
//                 box.src = 'style/img/nothing.png'
                box.src = "https://raw.githubusercontent.com/etozhesmirnov/aimgods-roulette/main/img/nothing.png"
                box.src = ""
        }

        document.getElementById('slider').appendChild(box)
    }

    boxesLength = 50;
    for (i = boxesLength; i != 0; i--) {
        addSecretBoxes()
    }

    if (option == 1) {
        addPrizeBox()
        addNothingBox()
    } else {
        addNothingBox()
        addPrizeBox()
    }

    addSecretBoxes()
    addSecretBoxes()
    document.querySelector('.secretBox').style.transition = gameTime / 1000 + 's';
}

function gameScene(gameTime, option) {
    let el = document.querySelector('.secretBox')
    el.style.margin = 0;

    if (option == 1) {
        setTimeout(() => {
            el.style.marginLeft = '-' + boxesLength * 164 + 'px'
        }, 2000)
    } else {
        delay2 = gameTime + 1000
        setTimeout(() => {
            el.style.marginLeft = '-' + boxesLength * 164 + 'px'
        }, 2000)
        setTimeout(() => {
            el.style.marginLeft = '-' + boxesLength * 163 + 'px'
            el.transition = '1s'
            console.log('now')
        }, delay2);
    }
}

document.getElementById("gameStartBtn").onclick = () => {
    tryTakeKey()
    takeSelectedRadioValue()
    gameTime = randomMath(5000, 20000)
    gameState('play', gameTime, randomMath(1, 2))
}