let linkProm = document.querySelector(`#prompt`)



linkProm.addEventListener(`click`, () => {
    prompt('Служит для вывода строки ввода текста и вариантами да, нет')  
    

   
  })   

 let text = document.querySelector(`#prompt`).textContent
 
 const result = linkProm
 document.querySelector(`#prompt`).textContent = result