const trafficLights =document.querySelectorAll('.trafficLight')
const container = document.querySelector('.container');
console.log(container);

let activeLight = 2
console

// setInterval(() =>{
//     goLight()
// }, 2000);
container.addEventListener('click',function(){
    goLight();
});

function goLight() {
    trafficLights[activeLight].className = 'trafficLight';
    activeLight++;

    if(activeLight > 2){
        activeLight = 0;
    }

    const currentLight = trafficLights[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'))
}

