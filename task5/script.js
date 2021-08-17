let tex = document.getElementById('text')

let result = document.querySelector('#duplicateField')


tex.oninput = function() {
    result.innerHTML = tex.value  
}
