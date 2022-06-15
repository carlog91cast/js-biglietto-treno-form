//Il programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
//  chiedo all'utente quanti km vuole percorrere

const userDistance = prompt('inserisci la percorrenza in km');
document.getElementById('go-to').innerHTML = userDistance;
// chiedo all'utente la sua età

const userAge = parseInt(prompt('inserisci la tua età'))
document.getElementById('age').innerHTML = userAge;

// ora calcolo il prezzo totale del viaggio

// calcolo il prezzo del biglietto in base ai km (0.21€ al km)

let costoAlKm = 0.21;
let ticketPrice = userDistance * costoAlKm;
console.log(ticketPrice);
document.getElementById('prezzo-senza-sconto').innerHTML = ticketPrice;


// const userNumber = parseInt(prompt('Inserisci un numero'));
// const percentage = parseInt(prompt('Inserisci una percentuale'));

// const result = (userNumber * percentage) / 100;

// console.log(`La percentuale ${percentage} di ${userNumber} è: ${result}`);

// definisco in base all'età dell'utente se esso sia maggiorenne o over 65
// va applicato poi uno sconto del 20% per i minorenni e del 40% per gli over 65.

if (userAge < 18) {
    console.log('è minorenne');
    ticketPrice = ticketPrice * 80 / 100;
} else if (userAge > 65) {
    console.log('over 65');
    ticketPrice = ticketPrice * 60 / 100;
}
let num = ticketPrice;
let n = num.toFixed(2);
console.log(ticketPrice);
document.getElementById('prezzo-scontato').innerHTML = ticketPrice;




