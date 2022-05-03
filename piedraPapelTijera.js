// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];
//    //
var piedra = posibilidades[0];
var papel = posibilidades[1];
var tijera = posibilidades[2];

// Creamos un array de imagenes

var listaImagenes = document.getElementsByTagName('img');

//Creamos un array de botones
var botones = document.getElementsByTagName("button");

//function comprobacion nombre en input name=nombre

function checkNombre() {
    var nombre = document.getElementById("nombre").value;
    const regex =

        if (!nombre.match(regex)) {
            document.getElementById("nombre").classList.add("fondoRojo")
            return false;
        } else {
            return true
        }
}

//function comprobacion numero en input name=partidas
function checkNumero() {
    var partidas = document.getElementById("partidas").value;
    const regex =

        if (!partidas.match(regex)) {
            document.getElementById("partidas").classList.add("fondoRojo")
            return false;
        } else {
            total.innerHTML = partidas;
            return true;
        }
}

var checkNom = checkNombre();
var checkNum = checkNumero();

function checkDatos() {
    if (checkNombre(true) && checkNumero(true)) {
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

ocument.getElementsByTagName("button")[0].addEventListener("click", checkDatos);
ocument.getElementsByTagName("button")[0].addEventListener("click", cambiarImagenes);

document.getElementsByTagName("button")[1].addEventListener("click", jugar);
document.getElementsByTagName("button")[2].addEventListener("click", reset);