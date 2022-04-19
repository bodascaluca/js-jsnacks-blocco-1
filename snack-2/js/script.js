// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// Crea un array vuoto

const userList = [];

// Chiedi per 6 volte all'utente di inserire un numero,


for (let i = 0; i < 6; i++){
    const userNumber = parseInt(prompt(`Scrivi un numeoro`));
    console.log(userNumber);
    if (userNumber % 2 === 1){
       userList.push(userNumber);
     }
}

console.log(userList);


