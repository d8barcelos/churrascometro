let inputAdultos = document.getElementById("adultos");
let inputCrianças = document.getElementById("crianças");
let inputDuração = document.getElementById("duração");
let resultado = document.getElementById("resultado");



function calcular() {
    let adultos = inputAdultos.value;
    let crianças = inputCrianças.value;
    let duração = inputDuração.value;

    let qtdTotCarne = carnePP(duração) * adultos + (carnePP(duração) / 2 * crianças);
    let qtdTotCerveja = cervejaPP(duração) * adultos;
    let qtdTotBebidas = bebidasPP(duração) * adultos + (bebidasPP(duração) / 2 * crianças);

    resultado.innerHTML = `<p>${Math.ceil(qtdTotCarne / 1000)} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotCerveja / 355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotBebidas / 2000)} Garrafas de bebida</p>`
}



function carnePP() {
    if (duração >= 6) {
        return 650;
    }
    else {
        return 450;
    }
}

function cervejaPP() {
    if (duração >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPP() {
    if (duração >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}

