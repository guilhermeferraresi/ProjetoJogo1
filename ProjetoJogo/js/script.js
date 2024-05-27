// Math é um objeto que vai permitir realizar operações matemáticas
//metodo random() vai sortear um numero entre 0 e 1
const numAleatorio = parseInt(Math.random()*100+1)
//console.log(numAleatorio)

//Manipulando elementos html
//Documento é o objeto hrml
const botaoJogar = document.querySelector('#jogar')//Botao jogar '# id'
const caixaTexto = document.querySelector('#txtNumero')//Text box
const jogadasAnteriores = document.querySelector('.vezes')// '. = class'