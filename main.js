const nome = document.getElementById('inputNome')
const ddd = document.getElementById('inputDDD')
const numero = document.getElementById('inputNumero')
const form = document.getElementById('form')
const ul = document.getElementById('ul')

let nomes = []
let ddds = []
let numeros = []


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (numeros.includes(numero.value)) {
        alert('Já existe um contato com ese número!')
    } else {
        adicionarContato()
        adicionarContatoLista()
    }
    limparCampos()
})

const adicionarContato = () => {
    nomes.push(nome.value)
    ddds.push(ddd.value)
    numeros.push(numero.value)
}

const limparCampos = () => {
    nome.value = ''
    ddd.value = ''
    numero.value = ''
}
const adicionarContatoLista = () =>{
    ul.innerHTML = ''
    for(let i = 0 ; i<nomes.length ; i++){
        let li = document.createElement('li')
        li.textContent = `${nomes[i]}  (${ddds[i]}) ${numeros[i]}`
        ul.appendChild(li)
    }
}


