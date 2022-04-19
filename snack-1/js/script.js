// jsnack1. L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

//  L'utente inserisce due parole in successione, con due prompt.

const firstWord = prompt("Dimmi una parola");
console.log(firstWord);

const secondWord = prompt("Dimmi un'altra parola")
console.log(secondWord);

// Troviamo la lunghezza delle parole

const firstWordLength = firstWord.length;
console.log(firstWordLength);

const secondWordLength = secondWord.length;
console.log(secondWordLength);

// Il software stampa prima la parola più corta, poi la parola più lunga.


if (firstWordLength > secondWordLength){
    result = `${secondWord} + ${firstWord}`;
} else if (firstWord < secondWord){
    result = `${firstWord} ${secondWord}`
} else {
    result =`Le due parole sono lunghe uguali, ${firstWord} ${secondWord}`;
}

//Output 
console.log(result);












