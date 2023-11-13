let person: {
    nome:string;
    cognome:string;
    età: number;
    indirizzo: string;
    coloriPreferiti: string[]
}
/*se dovesimo utilizzare tale oggetto per funzioni ecc. 
diventerebbe un disastro da compilare copiare tutte le volete tutto.*/
//creiamo così i nostri tipi di dati personalizzati
type Person = {    
    nome:string;
    cognome:string;
}
let person1: Person
person1={
    nome:"luca",
    cognome:"rossi"
};
//quasi come se fosse una classe usato spesso per le union e gli oggetti