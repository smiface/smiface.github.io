export { update };

const bodyArmor = document.querySelector('.bodyArmor')
const headArmor = document.querySelector('.headArmor')
const hpDisplay = document.querySelector('.hpDisplay')
const hpbar = document.querySelector('.hpbar')
const damageDisplay = document.querySelector('.damage')
const deathCounter = document.querySelector('.deathCounter')
const hpBarBg = document.querySelector('.hp')

const update = {
    ded(ded) {
        localStorage.setItem('ded', JSON.stringify(ded))
    },
    armor(armor) {
        if (armor < 4) {
            bodyArmor.src = './img/armor' + armor + '.png'
        } else if (armor < 7) {
            bodyArmor.src = './img/armor' + 3 + '.png'
            headArmor.src = './img/armor' + armor + '.png'
        }
    },
    hpBar(hp) {
        hpDisplay.innerHTML = hp
        hpbar.style.width = hp + '%'
    },
    damageDisplay(number) {
        damageDisplay.innerHTML = number
    },
    deathDisplay(deathCount) {
        deathCounter.innerHTML = 'Перекуров : ' + deathCount;
    }
}

setInterval(() => {
    if (hpBarBg.style.backgroundColor == 'red') {
        hpBarBg.style.backgroundColor = 'grey'
    } else {
        hpBarBg.style.backgroundColor = 'red'
    }
}, 300);