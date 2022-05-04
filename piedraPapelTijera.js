// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];

// Creamos un array de imagenes
var listaImagenes = document.getElementsByTagName('img');
// const listaImagenes = document.querySelectorAll("img");

//Creamos un array de botones
var botones = document.getElementsByTagName("button");

//Creamos una lista inputs
var inputs = document.getElementsByTagName("input");

//function comprobacion nombre en input name=nombre
function checkNombre() {
    var nombre = inputs[0].value;
    const regex1 = /[^0-9][a-zA-Z]{4,}/g;
    if (regex1.test(nombre)) {
        inputs[0].classList.remove("fondoRojo");
        return true;
    } else {
        inputs[0].classList.add("fondoRojo");
        return false;
    }
}

//function comprobacion numero en input name=partidas

function checkNumero() {
    var partidasJugadas = 0;
    var partidas = inputs[1].value;
    partidas = parseInt(partidas);
    const regex2 = /^[1-9]+[0-9]*$/g;
    if (regex2.test(partidas)) {
        inputs[1].classList.remove("fondoRojo");
        actual.innerHTML = partidas;
        total.innerHTML = partidas - partidasJugadas;
        return true;
    } else {
        inputs[1].classList.add("fondoRojo");
        return false;
    }
}

function checkDatos() {
    var checkNom = checkNombre();
    var checkNum = checkNumero();
    if (checkNom && checkNum) {
        return true;
        //cambiarImagenes();
    } else {
        return false;
    }
}

//Cambiar los pinguinos en div id="jugador" por imagenes piedra papel tijera jugador
/*
function cambiarImagenes() {

    document.getElementsById("jugador").classList.hidden("img/defecto.png");
    var img1 =document.getElementsById("jugador").classList.add("/img/piedraJugador.png");
    var img2 =document.getElementsById("jugador").classList.add("/img/papelJugador.png");
    var img3 =document.getElementsById("jugador").classList.add("/img/tijeraJugador.png");
   
    listaImagenes
}
*/

//function jugar(){}

//function reset(){} 

//function tirada(){}

/*
// Devuelve un valor aleatorio de entre todos los posibles.
function tiradaAleatoria(datos) {
	var numeroAleatorio = Math.floor(Math.random() * datos.length);
	console.log(numeroAleatorio);
	return datos[numeroAleatorio];
}
*/

function ponerBorde(e) {

    for (var j = 0; j < listaImagenes.length; j++) {
        if (listaImagenes[j] != e.target) {
            e.target.classList.add("no seleccionado");
        } else {
            e.target.classList.add("seleccionado");
        }
    }

    for (var i = 0; i < listaImagenes.length; i++) {
        listaImagenes[i].addEventListener("click", ponerBorde, false);
    }

}
//indico quien lanza los eventos
botones[0].addEventListener("click", checkDatos, false);
//botones[0].addEventListener("click", cambiarImagenes, false);
//botones[1].addEventListener("click", jugar);
//botones[2].addEventListener("click", reset);