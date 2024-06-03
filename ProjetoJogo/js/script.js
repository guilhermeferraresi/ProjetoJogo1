// Math é um objeto que vai permitir realizar operações matemáticas
//metodo random() vai sortear um numero entre 0 e 1
const numAleatorio = parseInt(Math.random()*100+1)
console.log(numAleatorio)

//Manipulando elementos html
//Documento é o objeto html
const botaoJogar = document.querySelector('#jogar') //Botao jogar '# id'
const caixaTexto = document.querySelector('#txtNumero') //Text box
const jogadasAnteriores = document.querySelector('.vezes') // '. = class' / tipo span
const jogadasRestantes = document.querySelector('.numChances') //span
const recomecar = document.querySelector('.resultados') //div com parágrafos
const avisos = document.querySelector('.avisos') //terceiro parágrafo na div resultados

//Criando um elemento html
const paragrafo = document.createElement('p')

//Criação de um vetor para armazenar os números jogados
let numerosJogados = []

//Variável contadora 
let minhasJogadas = 1

//Variável para poder jogar
let playGame = true

if (playGame){
    botaoJogar.addEventListener('click', function(e){ //Função anônima que vai receber como parâmetro o botão (e)
        e.preventDefault() //Removendo a ação de envio do botãoJogar (Jogar Numero)
        let tentativa = parseInt(caixaTexto.value) // Variável que vai receber um número inteiro da caixa de texto
        validaChances(tentativa) //Chamando uma função e passando número digitado como argumento 
        console.log(tentativa)
        caixaTexto.value = ''
        caixaTexto.focus()
    })
}

function validaChances(num){
    if(isNaN(num)){ //Se o conteúdo da variável não for um número execute o que estiver dentro das chaves
        alert('Atenção! Digite apenas valors numéricos entre 1 e 100') //Alert vai exibir mensagem na tela
        caixaTexto.value = '' //Limpando conteúdo da caixa
        caixaTexto.focus() //Setando focus na caixa de texto
    }
}