// // Esercizio 1
// // Crea un array di 10 oggetti che rappresentano una
// // zucchina, indicando per ognuna varietà, peso e lunghezza.
// // Calcola quanto pesano tutte le zucchine
var zucchine = [
    zucchina1 = {
        "varietà": "nera di milano",
        "peso": 10,
        "lunghezza": 15
    },
    zucchina2 = {
        "varietà": "alberello",
        "peso": 15,
        "lunghezza": 13
    },
    zucchina3 = {
        "varietà": "tonda di nizza",
        "peso": 18,
        "lunghezza": 5
    },
    zucchina4 = {
        "varietà": "fiorentine",
        "peso": 7,
        "lunghezza": 25
    },
    zucchina5 = {
        "varietà": "trombetta",
        "peso": 20,
        "lunghezza": 23
    },
    zucchina6 = {
        "varietà": "zucchino giallo",
        "peso": 13,
        "lunghezza": 8
    },
    zucchina7 = {
        "varietà": "romanesco",
        "peso": 27,
        "lunghezza": 17
    },
    zucchina8 = {
        "varietà": "zucchino di faenza",
        "peso": 30,
        "lunghezza": 16
    },
    zucchina9 = {
        "varietà": "zucchino siciliano",
        "peso": 22,
        "lunghezza": 30
    },
    zucchina10 = {
        "varietà": "zucchino patisson",
        "peso": 35,
        "lunghezza": 7
    }
];
var sommaPeso = 0;
for (var i = 0; i < zucchine.length; i++) {
    sommaPeso += zucchine[i].peso
}
console.log(sommaPeso);

// // esercizio 2
var zucchine = [
    zucchina1 = {
        "varietà": "nera di milano",
        "peso": 10,
        "lunghezza": 15
    },
    zucchina2 = {
        "varietà": "alberello",
        "peso": 15,
        "lunghezza": 13
    },
    zucchina3 = {
        "varietà": "tonda di nizza",
        "peso": 18,
        "lunghezza": 5
    },
    zucchina4 = {
        "varietà": "fiorentine",
        "peso": 7,
        "lunghezza": 25
    },
    zucchina5 = {
        "varietà": "trombetta",
        "peso": 20,
        "lunghezza": 23
    },
    zucchina6 = {
        "varietà": "zucchino giallo",
        "peso": 13,
        "lunghezza": 8
    },
    zucchina7 = {
        "varietà": "romanesco",
        "peso": 27,
        "lunghezza": 17
    },
    zucchina8 = {
        "varietà": "zucchino di faenza",
        "peso": 30,
        "lunghezza": 16
    },
    zucchina9 = {
        "varietà": "zucchino siciliano",
        "peso": 22,
        "lunghezza": 30
    },
    zucchina10 = {
        "varietà": "zucchino patisson",
        "peso": 35,
        "lunghezza": 7
    }
]
console.log(zucchine);

// // // CREO GLI ARREY DOVE ANDRO A DIVIDERE LE ZUCCHINE CORTE DA QUELLE LUNGHE
var zucchineCorte = [];
var zucchineLunghe = [];
for (var i = 0; i < zucchine.length; i++) {
    if(zucchine[i].lunghezza < 15) {
        zucchineCorte.push(zucchine[i]);
    } else {
        zucchineLunghe.push(zucchine[i]);
    }
}
console.log(zucchineCorte);
console.log(zucchineLunghe);

// // // CREO LE VARIABILI DOVE ADRO A SOMMARE I PESI TOTALI DELLE ZUCCHINE CORTE E DI QUELLE LUNGHE
var sommaZucCorte = 0;
var sommaZucLunghe = 0;
for (var i=0; i < zucchineCorte.length; i ++) {
    sommaZucCorte += zucchineCorte[i].peso;
}
for (var i=0; i < zucchineLunghe.length; i ++) {
    sommaZucLunghe += zucchineLunghe[i].peso;
}
console.log("il peso totale delle zucchine corte è: " + sommaZucCorte);
console.log("il peso totale delle zucchine lunghe è: " + sommaZucLunghe);


// // esercizio 3
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


// esercizio 4
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.
var listaInvitati = [];
var listaNomi = [];
var listaCognomi = [];
for (var i = 0; i < 5; i++) {
    do {
        var nome = prompt("inserire nome");
    } while (!isNaN(nome));
    listaNomi.push(nome);

    do {
        var cognome = prompt("inserici cognome");
    } while (!isNaN(cognome));
    listaCognomi.push(cognome);
}
console.log(listaNomi);
console.log(listaCognomi);


while (listaInvitati.length < 3) {
    var indiceCasualeNomi = Random(0, 4);
    var indiceCasualeCognomi = Random(0, 4);
    listaInvitati.push(listaNomi[indiceCasualeNomi] + " " + listaCognomi[indiceCasualeCognomi]);
}
console.log(listaInvitati);


// funzioni
function Random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) +min);
}


// esercizio 5
// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari
var listaNum = [];
var sommaDispari = 0;

for (var i = 0; i < 10; i++) {
    do {
        var num = parseInt(prompt("inserisci 10 numeri"));
    } while (isNaN(num));
    listaNum.push(num);
}
console.log(listaNum);

for (var i = 0; i < listaNum.length; i++) {
    if (paridispari(i) == "dispari") {
        sommaDispari += listaNum[i];
    }
}
console.log(sommaDispari);

// funzioni
function paridispari(num) {
    if (num % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}


// esercizio 6
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
var arreyGrande = [];
var arreyPiccolo = [];

for (var i = 0; i < 10; i++) {
    do {
        var num = parseInt(prompt("inserisci 10 numeri"));
    } while (isNaN(num));
    arreyGrande.push(num);
}
console.log(arreyGrande);

for (var i = 0; i < 4; i++) {
    do {
        var num = parseInt(prompt("inserisci 4 numeri"));
    } while (isNaN(num));
    arreyPiccolo.push(num);
}
console.log(arreyPiccolo);

while (arreyPiccolo.length < arreyGrande.length) {
    do {
        var num = parseInt(prompt("inserisci altri numeri"));
    } while (isNaN(num));
    arreyPiccolo.push(num);
}
console.log(arreyGrande.length);
console.log(arreyPiccolo.length);


// esercizio 7
// Scrivi una funzione che fonda due array (aventi lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
var arrey1 = ["a", "b", "c"];
var arrey2 = [1, 2, 3];
console.log(arrey1);
console.log(arrey2);

var arreyFuso = fusion(arrey1, arrey2)
console.log(arreyFuso);

// funzioni
function fusion(arrey1, arrey2) {
    var arreyFuso = [];
    for (var i = 0; i < arrey1.length; i++) {
        arreyFuso.push(arrey1[i]);
        arreyFuso.push(arrey2[i]);
    }
    return arreyFuso;
}


// esercizio 8
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”
var arrey = [1,2,3,4,5,6,7,8,9];
while (num1 == num2) {
    var num2 = Random(2, arrey.length);
    var num1 = Random(1, num2);
}


var newArrey = creatorArrey(num1, num2, arrey);
console.log(num2)
console.log(num1);
console.log(newArrey);

// funzioni
function Random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) +min);
}

function creatorArrey (a, b, arrey) {
    newArrey = [];
    for (var i = a; i < b; i++) {
        newArrey.push(arrey[i]);
    }
    return newArrey;
}
