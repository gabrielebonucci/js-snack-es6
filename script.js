// creare un array di oggetti (bici da corsa)

const biciDaCorsa = [
    {
        nome: 'Bianchi specialissima',
        peso: 6.7 //kg
   
    },
    {
        nome: 'Trek Emonda SLR 9',
        peso: 6.3
    },
    {
        nome: 'Cannondale SuperSix EVO Hi-MOD',
        peso: 7.0
    },
    {
        nome: 'Specialized S-Works Tarmac SL7',
        peso: 6.5
    },

];

// Trovare la bici con peso minore.
// Inizializziamo una variabile per contenere la bici più leggera trovata finora.
// Partiamo assumendo che la prima bici sia la più leggera.
let biciPiuLeggera = biciDaCorsa[0];

// Cicliamo attraverso l'array (partendo dal secondo elemento, indice 1,
// perché il primo lo abbiamo già memorizzato)

for (let i = 1; i < biciDaCorsa.length; i++) {
    const biciCorrente = biciDaCorsa[i];

    if (biciCorrente.peso < biciPiuLeggera.peso) {
        biciPiuLeggera = biciCorrente
    }
}
// Stampare a schermo (in console) la bici con peso minore.
console.log("--- Snack 1 ---");
console.log("La bici più leggera è:");
console.log(biciPiuLeggera);