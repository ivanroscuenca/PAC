// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];
//    //

/*
var piedra = posibilidades[0];
var papel = posibilidades[1];
var tijera = posibilidades[2];
*/

// Creamos un array de imagenes
var listaImagenes = document.getElementsByTagName('img');

//Creamos un array de botones
var botones = document.getElementsByTagName("button");

//function comprobacion nombre en input name=nombre
function checkNombre() {
    var nombre = document.getElementsByName("nombre").value;
    const regex1 = /[^0-9][a-zA-Z]{4,}/g;

    if (regex1.test(nombre)) {
        return true;
    } else {
        document.getElementsByName("nombre").classList.add("fondoRojo");
        return false
    }
}

//function comprobacion numero en input name=partidas

function checkNumero() {
    var partidas = document.getElementsByName("partidas").value;
    //const regex2 = /^[0-9]$/g;
    const regex2 = /\d/g;
    if (regex2.test(partidas)) {
        return true;
    } else {
        document.getElementsByName("partidas").classList.add("fondoRojo");
        return false
    }
}

var checkNom = checkNombre();
var checkNum = checkNumero();

function checkDatos() {
    if (checkNom(true) && checkNum(true)) {
        return true;
    } else {
        return false;
    }
}

//function cambiarImagenes(){}

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
    e.target.classList.add("seleccionado");
    for (var j = 0; j < listaImagenes.length; j++) {
        if (listaImagenes[j] != e.target) {
            listaImagenes[j].style.border = "";
            listaImagenes[j].style.opacity = "0.5";
        }
    }

    for (var i = 0; i < listaImagenes.length; i++) {
        listaImagenes[i].addEventListener("click", ponerBorde, false);
    }

}

//indico quien lanza los eventos

ocument.getElementsByTagName("button")[0].addEventListener("click", checkDatos, false);
ocument.getElementsByTagName("button")[0].addEventListener("click", cambiarImagenes, false);

document.getElementsByTagName("button")[1].addEventListener("click", jugar);
document.getElementsByTagName("button")[2].addEventListener("click", reset);