'use strict'

document.getElementById('bromaBoton').addEventListener('click', getData())

const bromaContenedor = document.querySelector('#bromaContenedor')

//Metodo tradicional de utilizar fetch mediante promesas.

function getData() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(resultado => resultado.json())
        .then(data => {
            bromaContenedor.innerText = data.value;
        })
        .catch(err => console.log(err));
}

getData();

// Forma moderna async-await

async function getDataAsyncAwait() {
    try {
        const resultado = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await resultado.json();
        //console.log(data.value);
    } catch(err){
        console.log(err);
    }

}

getDataAsyncAwait();