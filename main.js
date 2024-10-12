let formulario = document.getElementById('form-um')

console.log('formulario: '+ formulario)

let sucess = document.getElementById('sucess')

let error = document.getElementById('error')

formulario.addEventListener("submit",(e) => {
  e.preventDefault()
  let numUm = document.getElementById('numUm')
  let numDois = document.getElementById('numDois')
  if(numUm.value < numDois.value){
    sucess.style.visibility = "visible"
    error.style.visibility = "hidden"
  } else {
    error.style.visibility = "visible"
    sucess.style.visibility = "hidden"
  }
})