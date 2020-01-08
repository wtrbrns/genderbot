var Moniker = require('moniker');
//*asi es como elige una palabra normal 
// console.log(Moniker.choose());

//*asi es como dictaminar si queres un verbo y que ese separado por espacio
// var verb = Moniker.generator([Moniker.verb], {glue: " "});
// console.log(verb.choose());

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
///imprime el genero
console.log('hmmm today my gender is ' + gender + '.... tomorrow? who knows?');


