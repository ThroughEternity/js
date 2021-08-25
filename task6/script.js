const trafficLights =document.querySelectorAll('.trafficLight')
let activeLight = 2


setInterval(() =>{
    goLight()
}, 2000);


function goLight() {
    trafficLights[activeLight].className = 'trafficLight';
    activeLight++;

    if(activeLight > 2){
        activeLight = 0;
    }

    const currentLight = trafficLights[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'))
}