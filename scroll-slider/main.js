const move = (firstImg, from, secondImg, to, newCurrentImgIndex) => {
    if (newCurrentImgIndex != undefined) {
        currentImgIndex = newCurrentImgIndex
    }

    firstImg.style.transition = '0s'
    firstImg.className = from

    setTimeout(() => {
        firstImg.style.transition = '0.5s'
        firstImg.className = 'current'
        secondImg.className = to
    }, 100)
}

const moveForward = () => {
    currentImgIndex++;

    if (currentImgIndex == imgs.length) {
        move(imgs[0], 'hiddenRight', imgs[imgs.length - 1], 'hiddenLeft', 0)
    } else {
        move(imgs[currentImgIndex], 'hiddenRight', imgs[currentImgIndex - 1], 'hiddenLeft')
    }
}

const moveBack = () => {
    currentImgIndex--;

    if (currentImgIndex >= 0) {
        move(imgs[currentImgIndex], 'hiddenLeft', imgs[currentImgIndex + 1], 'hiddenRight')
    } else {
        move(imgs[imgs.length - 1], 'hiddenLeft', imgs[0], 'hiddenRight', [imgs.length - 1])
    }
}

document.onwheel = (event) => event.wheelDelta < 0 ? moveForward() : moveBack()