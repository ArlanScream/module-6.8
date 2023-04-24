const trafficLightEl1 = document.querySelector('#green');
const trafficLightEl2 = document.querySelector('#yellow');
const trafficLightEl3 = document.querySelector('#red');
// const trafficLightEl = document.querySelector('.trafficLight');
// function makeBlack(){
//     trafficLightEl.preventDefault();

// }

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');

    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click',makeYellow)
}

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl1.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeRed)
}

function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeGreen)
}

trafficLightEl1.addEventListener('click', makeGreen);
trafficLightEl2.addEventListener('click', makeYellow);
trafficLightEl3.addEventListener('click', makeRed);