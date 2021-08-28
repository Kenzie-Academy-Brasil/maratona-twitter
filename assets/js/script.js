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
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

function pegarTweet(event) {
    event.preventDefault();

    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
}

tweetar.addEventListener('click', pegarTweet);



function criarTweet(tweetTexto){
    
    let data = new Date();
    let hora    = data.getHours();
    let minutos = data.getMinutes();

    //OBJETO
    const tweet = {
        nome: "Daniel",
        foto: "./assets/img/ProfilePic.png",
        usuario: "@danielkenzie",
        texto:tweetTexto,
        tempo:`${hora}:${minutos}`
    }
    
  
    listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet){
    
    const {nome,foto,usuario,texto,tempo} = tweet
    
    //CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE
    let li    = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet")
    let img   = document.createElement("img");
    img.src = foto
    img.classList.add("tweet__fotoPerfil")

    let div   = document.createElement("div");
    div.classList.add("tweet__conteudo")
    let h2    = document.createElement("h2");
    h2.innerText = nome
   
    let span  = document.createElement("span");
    span.innerText = ` ${usuario} - ${tempo}`

    let p     = document.createElement("p");
    p.innerText = texto
    
    //ADICIONANDO ELEMENTOS DENTRO DA DIV
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    //ADICIONANDO ELEMENTOS DENTRO DA LI
    li.appendChild(img)
    li.appendChild(div)
    
    feed.appendChild(li)
    textarea.value = ""
}   


