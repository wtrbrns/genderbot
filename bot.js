const AlphaFB = require('@alpha-manager/fb');   //para id y token
const alpha = require('@alpha-manager/core');   //para tempo
var Moniker = require('moniker');   //para palabras

//este es el token que llama a la pagina y te deja publicar junto con el id
// prox: cambiar estas lineas para pasar por incriptacion de json
const fb = new AlphaFB().config({
    id: "", // the page id, must be a number
    token: "" // the access token, must be a string
});

//postea cada 5 minutos
const myTask = new alpha.Task()
    .to(fb) //the alphaFB instance we configured earlier
    .do(actionObject => {
        actionObject.type = "post";
        //consigue la hora
        var currentdate = new Date();
        var datetime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() + " @ " +
            + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
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
        //*
        //dependiendo de las opciones, genera x cantidad de palabras
        gender = monik.choose();
        //postea el genero
        let postContents = 'hmmm today my gender is ' + gender + '.... tomorrow? who knows?';
        actionObject.message = postContents;
        actionObject.done();
        console.log("just posted " + gender + " gender at " + datetime);
    })
    .every(1).minute()
    .start();
