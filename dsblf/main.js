import { update } from "./update.js"
const fistRight = document.querySelector('.fistRight')
const fistLeft = document.querySelector('.fistLeft')
const hitLeftBtn = document.querySelector('.hitLeft')
const hitRightBtn = document.querySelector('.hitRight')
const hpDisplay = document.querySelector('.hpDisplay')
const faceImg = document.querySelector('.face')

const defaultDed = {
    hp: 100,
    armor: 0,
    deathCount: 0,
    isHealing: false,
}

const attackDelay = 300;
let ded;
(localStorage.getItem('ded')) ?  ded = JSON.parse(localStorage.getItem('ded')) :  ded = defaultDed

const damageSum = () => ded.armor < 9 ? 10 - ded.armor : 1
// initial
update.armor(ded.armor)
update.deathDisplay(ded.deathCount)
update.hpBar(ded.hp)

function playSound(path, volume) {
    let song = new Audio(path)
    if (volume) { song.volume = volume }
    song.play()
}

function hitSide(action) {
    if (ded.deathCount > 10) {
        alert('брух')
    }

    if (action == 'left') {
        hit(fistRight, '400px', '150px', './img/fist1.png', './img/fist2.png')
    } else if (action == 'right') {
        hit(fistLeft, '-400px', '-250px', './img/fist3.png', './img/fist4.png')
    }

    playSound('./sounds/punch.mp3', 0.05)
    if (ded.hp < 11) {
        ded.armor++
        hpDisplay.innerHTML = ded.hp -= damageSum()
        ded.deathCount++
        update.armor(ded)
        healing()
        update.deathDisplay(ded.deathCount)
    } else {
        ded.hp -= damageSum()
    }
}

function hit(side, marginBefore, marginAfter, fistBefore, fistAfter) {
    side.src = fistAfter
    side.style.marginLeft = marginAfter
    update.damageDisplay('-' + damageSum())
    faceImg.src = './img/x2.png'

    hitRightBtn.disabled = true
    hitLeftBtn.disabled = true

    setTimeout(() => {
        side.style.marginLeft = marginBefore
        side.src = fistBefore
        faceImg.src = './img/x1.png'
        update.hpBar(ded.hp)
        if (ded.isHealing == false) {
            hitLeftBtn.disabled = false
        }
        update.damageDisplay(null)

        hitRightBtn.disabled = false
        hitLeftBtn.disabled = false
    }, attackDelay);
}

function healing() {
    ded.isHealing = true
    if (ded.hp > 90) {
        hpDisplay.innerHTML = ded.hp = 100
        faceImg.src = './img/x1.png'
        ded.isHealing = false
        hitRightBtn.disabled = false
        hitLeftBtn.disabled = false
        update.ded(ded)
    } else {
        hitRightBtn.disabled = true
        hitLeftBtn.disabled = true
        setTimeout(() => {
            ded.hp += 10
            if (faceImg.src.match('x3.png')) {
                faceImg.src = './img/x4.png'
            } else {
                faceImg.src = './img/x3.png'
            }
            hpDisplay.innerHTML = ded.hp
            healing()
        }, attackDelay);
    }
    update.ded(ded)
    update.hpBar(ded.hp)
}

hitRightBtn.onclick = () => hitSide('left')
hitLeftBtn.onclick = () => hitSide('right')