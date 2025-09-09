// creare un array di oggetti (squadre di calcio)
console.log("--- Snack 2 ---");

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
// creare un nuovo array per visualizzare in console solo il nome e i falli subiti

const squadreNomiFalli = [];
for (let i = 0; i<squadreDiCalcio.length; i++) {
    const squadraCorrente = squadreDiCalcio[i];
    const nuovoOggetto = {
        nome: squadraCorrente.nome,
        falliSubiti: squadraCorrente.falliSubiti
    };
    squadreNomiFalli.push(nuovoOggetto);

}

console.log("Array finale con solo nomi e falli subiti:");
console.log(squadreNomiFalli);