const FB = require('fb');
var Moniker = require('moniker');

//este es el token que llama a la pagina y te deja publicar
// prox: cambiar estas lineas para pasar por incriptacion de json
FB.setAccessToken('lol');

//*codigo random words
let gender;
//randomiza la cantidad de palabras que pueden ser, para agregarle mas variedad
let howmany = Math.floor(Math.random() * 3) + 1;
//y depende el caso genera distintas
switch (howmany) {
    case 1:
        var monik = Moniker.generator([Moniker.noun], { glue: " " });
        break;
    case 2:
        var monik = Moniker.generator([Moniker.adjective, Moniker.noun], { glue: " " });
        break;
    case 3:
        var monik = Moniker.generator([Moniker.adjective, Moniker.noun, Moniker.verb], { glue: " " });
        break;
    case 4:
        var monik = Moniker.generator([Moniker.adjective, Moniker.adjective, Moniker.noun, Moniker.verb], { glue: " " });
        break;
    default:
        break;
}

//dependiendo de las opciones, genera x cantidad de palabras
gender = monik.choose();

//postea el genero
let postContents = 'hmmm today my gender is ' + gender + '.... tomorrow? who knows?';

//por si hay errorores, la consola impime cuales
FB.api('me/feed', 'post', { message: postContents }, res => {
    if (!res || res.error) {
        return console.error(!res ? 'error occurred' : res.error);
    }
    console.log(`Post ID: ${res.id}`);
});