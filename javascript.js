
let baralho = [];
let cartas = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif" ];

let resultado = prompt("Coloque o numero de cartas. Valores pares entre 4 e 14.");

resultado = parseInt(resultado);

while (resultado<4 || resultado>15 || resultado%2 == 1){ 
    resultado = prompt("Coloque um número valido. Valores pares entre 4 e 14. ");
}

//alert("Você escolheu: " + resultado + " cartas");

function criarBaralho(numero){
    for (i=0; i<(numero/2); i++){
        baralho.push(cartas[i]);
        //console.log(cartas[i]);
        baralho.push(cartas[i]);
    }
}

criarBaralho(resultado);

function comparador() { 
	return Math.random() - 0.5; 
}

baralho.sort(comparador);


function darCartas(numero){
    for (i=0; i<numero; i++){
        let cartas = document.querySelector(".cartas");
        //cartas.innerHTML += `<div class="carta"><img class="frentecarta" src="imagens/front.png"></div>`
        cartas.innerHTML += `<div class="carta" onClick="virarCarta(this)"><img class="frentecarta" src="imagens/${baralho[i]}"></div>`

    }

}

function virarCarta(element){
   // element.classList.add("virada");
    element.innerHTML = `<div class="carta"><img class="frentecarta" src="imagens/front.png"></div>`
}

//alert(baralho[1]);

darCartas(resultado);