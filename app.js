const inputNombre = document.getElementById("amigo");

// console.log(inputNombre);

const listaNombres = [];
const ulAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    listaNombres.push(inputNombre.value);
    ulAmigos.innerHTML += `<li>${inputNombre.value}</li>`;
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaNombres.length);
    const amigoSecreto = listaNombres[random]
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}