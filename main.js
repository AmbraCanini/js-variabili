// Esercizio "Mi chiamo [nome], ho [età] anni, e faccio il [lavoro]".

// 1. Dichiara le variabili necessarie
// 2. Assegna loro dei valori di esempio
// 3. Combina le variabili in un'unica frase (stringa)
// 4. Mostra il risultato finale nella console

//let nome = "Ambra";
//let eta = 31;
//let lavoro = "Graphic Designer";

//concatenazione di stringhe e variabili

//console.log("Mi chiamo " + nome + ", ho " + eta + " anni, e faccio la " + lavoro + "");

//-document.getElementById("messaggio").innerHTML = "Mi chiamo " + nome + ", ho " + eta + " anni, e faccio la " + lavoro + "";

//  interpolazione di stringhe e variabili
//il carattere si chiama backtick `, il formato è template literal
const nome = "Ambra"
const eta = 31;
const lavoro = " Graphic Designer"
const msg = `Mi chiamo ${nome}, ho ${eta} anni, e faccio la ${lavoro}`;
console.log(msg);

document.getElementById("messaggio").innerHTML = msg;