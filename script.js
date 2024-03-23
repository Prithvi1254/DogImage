console.log('hello')
let change = document.getElementById('button')
// https://dog.ceo/api/breeds/image/random
const imc = document.getElementById('dogimage')
const doggenerator = () => {
  change.innerText = "Regenerate"
  fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {
    console.log(json.message)
    imc.innerHTML = `<img src='${json.message}' height=400 width=400/>`
  })
}

