
let baralho = [];
let cartas = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif" ];
let virado = 0;  //para comparar a segunda carta
let idAnterior=0;
let resultado = prompt("Coloque o numero de cartas. Valores pares entre 4 e 14.");
let jaViradas = [];

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
        cartas.innerHTML += `<div class="carta" id = "${i}" onClick="virarCarta(this)"><img class="frentecarta" src="imagens/front.png"></div>`
        jaViradas.push(0);
        // cartas.innerHTML += `<div class="carta" id = "${i}" onClick="virarCarta(this)">
         //                       <img class="frentecarta" src="imagens/${baralho[i]}"></div>`

    }

}



function virarCarta(element){
    if (virado===0){
    let elementar = element.id; //salva o numero da carta que foi clicado
    element.innerHTML = `<img class="frentecarta" src="imagens/${baralho[elementar]}">`
    idAnterior=elementar;
    virado=1;
    }
    else if (virado === 1){
    let elementar = element.id; 
    idAtual = elementar;
    element.innerHTML = `<img class="frentecarta" src="imagens/${baralho[elementar]}">`
        if ((baralho[idAnterior]===baralho[elementar]) && (idAnterior!==elementar)    ){
            jaViradas[idAnterior]=1;
            jaViradas[elementar]=1;
                    }
        //se não, desvirar as cartas
        setTimeout(desvirarCartas, 2000);
      


        virado=0;
    }
}

function  desvirarCartas(){
    //let cartas = document.getElementById(idAnterior);
    //cartas.innerHTML = `<img class="frentecarta" src="imagens/front.png"></img>`
    let cartas = document.querySelectorAll(".carta");
   
   for (let i=0; i<jaViradas.length; i++){
       if (jaViradas[i]===0){
        cartas[i].innerHTML = `<img class="frentecarta" src="imagens/front.png"></img>`;
        //console.log(i);
       }
   }
   
   verificarSeGanhou();
    //alert("tempo");
}

function verificarSeGanhou(){
    let ganhou=0;
    for (let i=0; i<jaViradas.length; i++){
        if (jaViradas[i]===1){ ganhou++; }
        
    }
    if (jaViradas.length===ganhou){
        alert("Voce ganhou");
    }

}


//alert(baralho[1]);

darCartas(resultado);