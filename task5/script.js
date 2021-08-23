let tex = document.querySelector('input[type="text"]')

let result = document.querySelector('#duplicateField')

let but = document.querySelector('button[type="submit"]')



but.onclick = function(e) {
    console.log(tex.value )
    tex.value = "";
    result.innerHTML = ""
  }
  

  
tex.oninput = function() {
   
    result.innerHTML = tex.value  

}



