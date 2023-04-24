let trafficLightEl = document.querySelector('#red');
let trafficLightEl2 = document.querySelector('#yellow');
let trafficLightEl3 = document.querySelector('#green');
let clickQuantity = 0;
function makeRed() {
    trafficLightEl.style.background = 'red';
    trafficLightEl2.style.background = '';
    trafficLightEl3.style.background = '';
    clickQuantity += 1;
}
function makeYellow() {
    trafficLightEl2.style.background = 'yellow';
    trafficLightEl.style.background = '';
    trafficLightEl3.style.background = '';
    clickQuantity += 1;
}
function makeGreen() {
    trafficLightEl3.style.background = 'green';
    trafficLightEl.style.background = '';
    trafficLightEl2.style.background = '';
    clickQuantity = 0;
}
//
function getCircle() {
    switch (clickQuantity) {
        case 0: makeRed();
            break;
        case 1: makeYellow();
            break;
        case 2: makeGreen();
            break;
    }
}
trafficLightEl.addEventListener('click', getCircle);
trafficLightEl2.addEventListener('click', getCircle);
trafficLightEl3.addEventListener('click', getCircle);