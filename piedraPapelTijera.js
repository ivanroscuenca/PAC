// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];

// Creamos un array de imagenes
//var listaImagenes = document.getElementsByTagName('img');
const listaImagenes = document.querySelectorAll("img");

//Creamos un array de botones
var botones = document.getElementsByTagName("button");

//Creamos una lista inputs
var inputs = document.getElementsByTagName("input");

//function comprobacion nombre en input name=nombre
function checkNombre() {
    var nombre = inputs[0].value;
    const regex1 = /[^0-9][a-zA-Z]{3,}/g;
    //const regex1 = /[^\d{1}]{4,}/g;
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
        cambiarImagenes();
        return true;

    } else {
        return false;
    }
}

//Cambiar los pinguinos en div id="jugador" por imagenes piedra papel tijera jugador

function cambiarImagenes() {

    var img1 = document.getElementById("jugador").getElementsByTagName("img")[0];;
    img1.removeAttribute('src');
    img1.setAttribute('src', 'img/piedraJugador.png');
    img1 = posibilidades[0];

    var img2 = document.getElementById("jugador").getElementsByTagName("img")[1];
    img2.removeAttribute('src');
    img2.setAttribute('src', 'img/papelJugador.png');
    img1 = posibilidades[1];

    var img3 = document.getElementById("jugador").getElementsByTagName("img")[2];
    img3.removeAttribute('src');
    img3.setAttribute('src', 'img/tijeraJugador.png');
    img1 = posibilidades[2];
    var listaImagenes = [img1, img2, img3];

}
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
    cambiarImagenes();

    listaImagenes[0].classList.replace("seleccionado", "noSeleccionado");

    for (var j = 0; j < listaImagenes.length; j++) {
        if (listaImagenes[j] != e.target) {
            listaImagenes[j].classList.replace("seleccionado", "noSeleccionado");
        } else {
            listaImagenes[j].classList.replace("noSeleccionado", "seleccionado");
        }
    }
}
for (var i = 0; i < listaImagenes.length; i++) {
    listaImagenes[i].addEventListener("click", ponerBorde, false);
}

//indico quien lanza los eventos
botones[0].addEventListener("click", checkDatos, false);
//botones[1].addEventListener("click", jugar);
//botones[2].addEventListener("click", reset);