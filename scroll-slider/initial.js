for (i = 0; i < 50; i++) {
    let elem = document.createElement('span')
    elem.innerHTML = i
    elem.className = i == 0 ? 'current' : 'hiddenRight'
    slider.appendChild(elem)
}

let currentImgIndex = 0;
let imgs = document.querySelectorAll('span')