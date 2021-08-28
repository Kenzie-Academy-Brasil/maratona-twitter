// VARIÁVEIS
// uma caixinha na memória, onde eu guardo algum valor

// var => má prática, não utilizem

// let
// const

let numero = 0;
const nome = "Maria";
const boleano = false;

// console.log(numero);
// console.log(nome);
// console.log(boleano);

/*
operadores básicos

soma: +
subtração: -
multiplicação: *
divisão: /
*/

let numero2 = 3;
let numero3 = 5;

let soma = 2 + 2;
let soma2 = numero2 + numero3;

// console.log(soma)
// console.log(soma2)

/**
 * operadores lógicos
 * 
 * == / ===
 * != / !==
 * > / >=
 * < / <=
 * 
 */

// console.log(!(numero2 > numero3));

/**
 * funções
 */

// declaração apenas
function calcularSoma(numero1, numero2) {
    let total = numero1 + numero2;
    console.log(total);
}

// chamada da função -> momento em que ela vai ser exacutada
// calcularSoma(7, 9);
// calcularSoma(2, 5);
// calcularSoma(7, 4);
// calcularSoma(1, 9);

/**
 * 
 * DOM
 * Document Object Model(Modelo de Objeto do Documento)
 * 
 */

const cabecalho = document.querySelector('header');

// console.log(cabecalho);

/**
 * 
 * eventos
 * 
 * addEventListener
 * 
 * elemento.addEventListener('evento', função);
 * 
 */

// const tweetar = document.querySelector('button');

// function imprimirNoConsole() {
//     console.log('clicou no botão!')
// }

// tweetar.addEventListener('click', imprimirNoConsole);

/**
 * passo a passo
 * 
 * 1º passo: capturar o valor da textarea para criar o tweet
 * 2º passo: construir o tweet
 * 3º passo: imprimir esse tweet
 * 
 */

const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');

function pegarTweet(event) {
    event.preventDefault();

    const tweetTextarea = textarea.value;
}

tweetar.addEventListener('click', pegarTweet);