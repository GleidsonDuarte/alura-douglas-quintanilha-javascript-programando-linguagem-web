var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector(".info-peso").textContent;

    var altura = pacientes[i].querySelector(".info-altura").textContent;

    var imc = pacientes[i].querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        imc.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaValida = false;
        imc.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        imc.textContent = calculaIMC(peso, altura);
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaIMC(peso, altura) {
    imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
