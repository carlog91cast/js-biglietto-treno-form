//Il programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
//  chiedo all'utente quanti km vuole percorrere


// chiedo all'utente la sua età

let btnGenera = document.getElementById('btn-gnr');
btnGenera.addEventListener('click', function () {

    // imput age

    let inputAge = document.getElementById("user-age");
    let Age = inputAge.value;
    console.log(Age);

    // imput km

    let inputKm = document.getElementById("km");
    let percorrenza = parseInt(inputKm.value);
    console.log(percorrenza);

    // calcolo distanza-prezzo

    let costoAlKm = 0.21;
    let ticketPrice = userDistance * costoAlKm;
    console.log(prezzoSenzaSconto)


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



});

let num = ticketPrice;
let n = num.toFixed(2);
console.log(ticketPrice);
document.getElementById('prezzo-scontato').innerHTML = ticketPrice;

// ora calcolo il prezzo totale del viaggio

// calcolo il prezzo del biglietto in base ai km (0.21€ al km)



// const userNumber = parseInt(prompt('Inserisci un numero'));
// const percentage = parseInt(prompt('Inserisci una percentuale'));

// const result = (userNumber * percentage) / 100;

// console.log(`La percentuale ${percentage} di ${userNumber} è: ${result}`);

// definisco in base all'età dell'utente se esso sia maggiorenne o over 65
// va applicato poi uno sconto del 20% per i minorenni e del 40% per gli over 65.




