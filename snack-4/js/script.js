// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedi un numero di 4 cifre all'utente

let originalNumber = prompt("Scrivi un numero di 4 cifre");
console.log(originalNumber);

// e calcola la somma di tutte le cifre che compongono il numero.
sum = 0;

// for (let i = 0; i < originalNumber.length; i++) {
//     console.log(originalNumber.charAt(i));
//     sum += originalNumber
// }

let i = 0;
while (i < originalNumber.length){
    sum += parseInt(originalNumber[i]);
    i++;
}
console.log(sum);

/*
while (originalNumber) {
    sum += originalNumber % 10;
    originalNumber = Math.floor(originalNumber / 10);
}
console.log(sum);
*/