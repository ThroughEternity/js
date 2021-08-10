const consoleLog = document.querySelector(`#consoleLog`)

consoleLog.addEventListener(`click`, () => {
  alert(`Служит для вывода информации в коесоль`)  
})


const aler = document.querySelector(`#alert`)

aler.addEventListener(`click`, () => {
    alert(`Служит для показывания сообщение и ждёт, пока пользователь нажмёт кнопку «ОК»`)  
  }) 




const  promp= document.querySelector(`#prompt`)

promp.addEventListener(`click`, () => {
    prompt('Служит для вывода строки ввода текста и вариантами да, нет')  
  })   