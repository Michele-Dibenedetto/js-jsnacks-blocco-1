// Esercizio 1
// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine
// var zucchine = [
//     zucchina1 = {
//         "varietà": "nera di milano",
//         "peso": 10,
//         "lunghezza": 15
//     },
//     zucchina2 = {
//         "varietà": "alberello",
//         "peso": 15,
//         "lunghezza": 13
//     },
//     zucchina3 = {
//         "varietà": "tonda di nizza",
//         "peso": 18,
//         "lunghezza": 5
//     },
//     zucchina4 = {
//         "varietà": "fiorentine",
//         "peso": 7,
//         "lunghezza": 25
//     },
//     zucchina5 = {
//         "varietà": "trombetta",
//         "peso": 20,
//         "lunghezza": 23
//     },
//     zucchina6 = {
//         "varietà": "zucchino giallo",
//         "peso": 13,
//         "lunghezza": 8
//     },
//     zucchina7 = {
//         "varietà": "romanesco",
//         "peso": 27,
//         "lunghezza": 17
//     },
//     zucchina8 = {
//         "varietà": "zucchino di faenza",
//         "peso": 30,
//         "lunghezza": 16
//     },
//     zucchina9 = {
//         "varietà": "zucchino siciliano",
//         "peso": 22,
//         "lunghezza": 30
//     },
//     zucchina10 = {
//         "varietà": "zucchino patisson",
//         "peso": 35,
//         "lunghezza": 7
//     }
// ];
// var sommaPeso = 0;
// for (var i = 0; i < zucchine.length; i++) {
//     sommaPeso += zucchine[i].peso
// }
// console.log(sommaPeso);

// esercizio 2
// var zucchine = [
//     zucchina1 = {
//         "varietà": "nera di milano",
//         "peso": 10,
//         "lunghezza": 15
//     },
//     zucchina2 = {
//         "varietà": "alberello",
//         "peso": 15,
//         "lunghezza": 13
//     },
//     zucchina3 = {
//         "varietà": "tonda di nizza",
//         "peso": 18,
//         "lunghezza": 5
//     },
//     zucchina4 = {
//         "varietà": "fiorentine",
//         "peso": 7,
//         "lunghezza": 25
//     },
//     zucchina5 = {
//         "varietà": "trombetta",
//         "peso": 20,
//         "lunghezza": 23
//     },
//     zucchina6 = {
//         "varietà": "zucchino giallo",
//         "peso": 13,
//         "lunghezza": 8
//     },
//     zucchina7 = {
//         "varietà": "romanesco",
//         "peso": 27,
//         "lunghezza": 17
//     },
//     zucchina8 = {
//         "varietà": "zucchino di faenza",
//         "peso": 30,
//         "lunghezza": 16
//     },
//     zucchina9 = {
//         "varietà": "zucchino siciliano",
//         "peso": 22,
//         "lunghezza": 30
//     },
//     zucchina10 = {
//         "varietà": "zucchino patisson",
//         "peso": 35,
//         "lunghezza": 7
//     }
// ]
// console.log(zucchine);

// // CREO GLI ARREY DOVE ANDRO A DIVIDERE LE ZUCCHINE CORTE DA QUELLE LUNGHE
// var zucchineCorte = [];
// var zucchineLunghe = [];
// for (var i = 0; i < zucchine.length; i++) {
//     if(zucchine[i].lunghezza < 15) {
//         zucchineCorte.push(zucchine[i]);
//     } else {
//         zucchineLunghe.push(zucchine[i]);
//     }
// }
// console.log(zucchineCorte);
// console.log(zucchineLunghe);

// // CREO LE VARIABILI DOVE ADRO A SOMMARE I PESI TOTALI DELLE ZUCCHINE CORTE E DI QUELLE LUNGHE
// var sommaZucCorte = 0;
// var sommaZucLunghe = 0;
// for (var i=0; i < zucchineCorte.length; i ++) {
//     sommaZucCorte += zucchineCorte[i].peso;
// }
// for (var i=0; i < zucchineLunghe.length; i ++) {
//     sommaZucLunghe += zucchineLunghe[i].peso;
// }
// console.log("il peso totale delle zucchine corte è: " + sommaZucCorte);
// console.log("il peso totale delle zucchine lunghe è: " + sommaZucLunghe);


// esercizio 3
do {
    var parola = prompt("inserisci una parola")
} while (!isNaN(parola))
console.log(parola);

parolaGirata = giraParola(parola);
console.log(parolaGirata);

function giraParola (parola) {
    parolaGirata = "";
    for (var i = parola.length - 1; i >= 0; i--) {
        parolaGirata += parola[i];
    }
    return parolaGirata;
}