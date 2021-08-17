const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

trafficLightEl.addEventListener('click', makeYellow);


function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeRed);



const trafficLightE3 = document.getElementById('#trafficLighte');

function makeGreen() {
    trafficLightE3.style.background = ('green');
    trafficLightE3.removeEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeYellow);
}

trafficLightE3.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightE3.style.background = ('yellow');
    trafficLightE3.removeEventListener('click', makeYellow);
    trafficLightE3.addEventListener('click', makeRed);
}

trafficLightEl.addEventListener('click', makeYellow);


function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeGreen);
}

trafficLightE3.addEventListener('click', makeRed);






const trafficLightE2 = document.querySelector('#trafficLighta');

function makeGreen() {
    trafficLightE2.style.background = ('green');
    trafficLightE2.removeEventListener('click', makeGreen);
    trafficLightE2.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
}

trafficLightEl.addEventListener('click', makeYellow);


function makeRed() {
    trafficLightE2.style.background = ('red');
    trafficLightE2.removeEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeGreen);
}

trafficLightE2.addEventListener('click', makeRed);