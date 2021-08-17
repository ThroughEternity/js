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


const trafficLightEla = document.querySelector('#trafficLighta')

function makeGreena(){
    trafficLightEla.style.background = ('green');
    trafficLightEla.removeEventListener('click', makeGreena);
    trafficLightEla.addEventListener('click', makeYellowa);
}

trafficLightEla.addEventListener('click', makeGreena);

function makeYellowa() {
    trafficLightEla.style.background = ('yellow');
    trafficLightEla.removeEventListener('click', makeYellowa);
    trafficLightEla.addEventListener('click', makeReda);
}

trafficLightEla.addEventListener('click', makeYellowa);


function makeReda() {
    trafficLightEla.style.background = ('red');
    trafficLightEla.removeEventListener('click', makeReda);
    trafficLightEla.addEventListener('click', makeGreena);
}

trafficLightEla.addEventListener('click', makeReda);


const trafficLightElb = document.querySelector('#trafficLightb');

function makeGreenb() {
    trafficLightElb.style.background = ('green');
    trafficLightElb.removeEventListener('click', makeGreenb);
    trafficLightElb.addEventListener('click', makeYellowb);
}

trafficLightElb.addEventListener('click', makeGreenb);

function makeYellowb() {
    trafficLightElb.style.background = ('yellow');
    trafficLightElb.removeEventListener('click', makeYellowb);
    trafficLightElb.addEventListener('click', makeRedb);
}

trafficLightElb.addEventListener('click', makeYellowb);


function makeRedb() {
    trafficLightElb.style.background = ('red');
    trafficLightElb.removeEventListener('click', makeRedb);
    trafficLightElb.addEventListener('click', makeGreenb);
}

trafficLightElb.addEventListener('click', makeRedb);