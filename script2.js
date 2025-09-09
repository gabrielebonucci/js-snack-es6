// creare un array di oggetti (squadre di calcio)

const squadreDiCalcio = [
    {
        nome: 'Pescara',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Trastevere calcio',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'fczetanapoli',
        puntiFatti: 0,
        falliSubiti: 0,
    },


]
//funzione per generare numeri casuali
function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i<squadreDiCalcio.length; i++) {
    const squadraCorrente = squadreDiCalcio[i];

    squadraCorrente.puntiFatti = generaNumeroRandom(10, 100);
    squadraCorrente.falliSubiti = generaNumeroRandom(50,500);

}
console.log("Array aggiornato con il ciclo for:");
console.log(squadreDiCalcio);