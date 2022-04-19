// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedi un numero di 4 cifre all'utente

let originalNumber = parseInt(prompt("Scrivi un numero di 4 cifre"));
console.log(originalNumber);

// e calcola la somma di tutte le cifre che compongono il numero.
sum = 0;

while (originalNumber) {
    sum += originalNumber % 10;
    originalNumber = Math.floor(originalNumber / 10);
}
console.log(sum);
