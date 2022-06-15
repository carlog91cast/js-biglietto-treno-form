//Il programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
//  chiedo all'utente quanti km vuole percorrere


// chiedo all'utente la sua età

let btnGenera = document.getElementById('btn-gnr');
btnGenera.addEventListener('click', function () {

    // input name

    let inputName = document.getElementById("user-name");
    let userName = inputName.value;
    console.log(userName);

    // imput age

    let inputAge = document.getElementById("user-age");
    let age = inputAge.value;
    console.log(age);

    // imput km

    let inputKm = document.getElementById("km");
    let percorrenza = parseInt(inputKm.value);
    console.log(percorrenza);

    // calcolo distanza-prezzo

    let costoAlKm = 0.21;
    let ticketPrice = percorrenza * costoAlKm;
    console.log(ticketPrice);


    if (age < 18) {
        console.log('è minorenne');
        ticketPrice = ticketPrice * 85 / 100;
    } else if (age > 65) {
        console.log('over 65');
        ticketPrice = ticketPrice * 65 / 100;
    }

    // random numeber (carrozza; cp)

    let carrozza = Math.floor(Math.random() * 9) +1;
    let cp = Math.floor(Math.random() *  90000 +1);

    document.getElementById('passenger').innerHTML = userName;
    document.getElementById('ticket-cost').innerHTML = ticketPrice.toFixed(2);
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('cp').innerHTML = cp

});






// ora calcolo il prezzo totale del viaggio

// calcolo il prezzo del biglietto in base ai km (0.21€ al km)



// const userNumber = parseInt(prompt('Inserisci un numero'));
// const percentage = parseInt(prompt('Inserisci una percentuale'));

// const result = (userNumber * percentage) / 100;

// console.log(`La percentuale ${percentage} di ${userNumber} è: ${result}`);

// definisco in base all'età dell'utente se esso sia maggiorenne o over 65
// va applicato poi uno sconto del 20% per i minorenni e del 40% per gli over 65.




