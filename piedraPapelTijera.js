// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];

// Creamos un array de imagenes
var opcionjugador = document.querySelectorAll("img");

//Creamos un array de botones
var botones = document.getElementsByTagName("button");

//Creamos una lista inputs
var inputs = document.getElementsByTagName("input");

//Creamos una variable de partidas
var partidas;
//Creamos una variable de partidas juagadas
var partidasJugadas;
//Creamos un hitorial de partidas
var historialPartidas;


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
    partidasJugadas = 0;
    partidas = inputs[1].value;
    partidas = parseInt(partidas);
    const regex2 = /^[1-9]+[0-9]*$/g;
    if (regex2.test(partidas)) {
        inputs[1].classList.remove("fondoRojo");

        actual.innerHTML = partidasJugadas;
        total.innerHTML = partidas;

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

    var img2 = document.getElementById("jugador").getElementsByTagName("img")[1];
    img2.removeAttribute('src');
    img2.setAttribute('src', 'img/papelJugador.png');


    var img3 = document.getElementById("jugador").getElementsByTagName("img")[2];
    img3.removeAttribute('src');
    img3.setAttribute('src', 'img/tijeraJugador.png');

}

function ponerBorde(e) {
    cambiarImagenes();

    opcionjugador[0].classList.replace("seleccionado", "noSeleccionado");

    for (var j = 0; j < opcionjugador.length; j++) {
        if (opcionjugador[j] != e.target) {
            opcionjugador[j].classList.replace("seleccionado", "noSeleccionado");
        } else {
            opcionjugador[j].classList.replace("noSeleccionado", "seleccionado");

        }
    }
}
for (var i = 0; i < opcionjugador.length; i++) {
    opcionjugador[i].addEventListener("click", ponerBorde, false);
}

// Devuelve un valor aleatorio de entre todos los posibles.
function tiradaAleatoria() {

    if (partidasJugadas < partidas) {
        var listaPosibilidadesMaquina = ["img/piedraOrdenador.png", "img/papelOrdenador.png", "img/tijeraOrdenador.png"];
        var numeroAleatorio = Math.floor(Math.random() * posibilidades.length);
        listaPosibilidadesMaquina[numeroAleatorio];
        var imgmaqui = document.getElementById("maquina").getElementsByTagName("img")[0];;
        imgmaqui.removeAttribute('src');
        imgmaqui.setAttribute('src', listaPosibilidadesMaquina[numeroAleatorio]);
        actual.innerHTML = ++partidasJugadas;
        total.innerHTML = partidas;
        //CheckJuego();
    } else {
        alert("La partida terminó");
    }
}
/*
function CheckJuego() {

    if (opcionjugador[2] && listaPosibilidadesMaquina[1]) {
        historialPartidas = "Jugador Gana<br>";
        historial.innerHTML += historialPartidas;
    }
    if (opcionjugador[1] && listaPosibilidadesMaquina[0]) {
        historialPartidas = "Jugador Gana<br>";
        historial.innerHTML += historialPartidas;
    }
    if (opcionjugador[0] && listaPosibilidadesMaquina[2]) {
        historialPartidas = "Jugador Gana<br>";
        historial.innerHTML += historialPartidas;
    }
    if (opcionjugador[0] && listaPosibilidadesMaquina[1]) {
        historialPartidas = "Maquina Gana<br>";
        historial.innerHTML += historialPartidas;
    }
    if (opcionjugador[1] && listaPosibilidadesMaquina[2]) {
        historialPartidas = "Maquina Gana<br>";
        historial.innerHTML += historialPartidas;
    }
    if (opcionjugador[2] && listaPosibilidadesMaquina[0]) {
        historialPartidas = "Maquina Gana<br>";
        historial.innerHTML += historialPartidas;
    } else {
        historialPartidas = "Empate<br>";
        historial.innerHTML += historialPartidas;
    }
}
*/

//function reset(){} 

//indico quien lanza los eventos
botones[0].addEventListener("click", checkDatos, false);
botones[1].addEventListener("click", tiradaAleatoria, false);
//botones[2].addEventListener("click", reset);