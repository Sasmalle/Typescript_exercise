//creazione classe con costruttore per renderla generica e metodo
class Persona{
    nome: string
    private cognome: string // private = per evitare che lo si modifichi direttamente

    constructor(nome: string, cognome: string){ 
        this.nome = nome
        this.cognome = cognome
    }
    presenta():void {
        console.log(`ciao sono ${this.nome} ${this.cognome}`); //si presenta
    }

    saltuta(persona: Persona):void {
        console.log(`ciao ${persona.nome}, molto piacere`); //saluta un'altra persona
    }
}
let persona: Persona = new Persona("Luca","Rossi");
let persona2: Persona = new Persona("Maria","Anna");
persona.presenta();
persona2.presenta();
persona2.saltuta(persona);

/*con typescript posso utilizzare il modificatore di accesso (private, public, protected) 
per semplificare la classe e i costruttori associati*/
class Persona2{
    constructor(private nome: string, private cognome: string){ //la stessa cosa di sopra ma più semplice
    }
    presenta():void {
        console.log(`ciao sono ${this.nome} ${this.cognome}`); //si presenta
    }

    saltuta(persona: Persona):void {
        console.log(`ciao ${persona.nome}, molto piacere`); //saluta un'altra persona
    }
}

