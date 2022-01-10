'use strict'

function getData(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resultado => resultado.json())
    .then(data => data.value)
    .catch(err => console.log(err));
}

getData();