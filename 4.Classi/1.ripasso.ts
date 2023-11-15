//creazione classe con costruttore per renderla generica e metodi
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

    saluta(persona: Persona):void {
        console.log(`ciao ${persona.nome}, molto piacere`); //saluta un'altra persona
    }
}
let persona: Persona = new Persona("Luca","Rossi");
let persona2: Persona = new Persona("Maria","Anna");
persona.presenta();
persona2.presenta();
persona2.saluta(persona);

/*con typescript posso utilizzare il modificatore di accesso (private, public, protected) 
per semplificare la classe e i costruttori associati*/
class Persona2{
    constructor(public nome: string, private cognome: string){ 
    }
    presenta():void {
        console.log(`ciao sono ${this.nome} ${this.cognome}`);
    }

    saluta(persona: Persona):void {
        console.log(`ciao ${persona.nome}, molto piacere`);
    }
}

// proprietà readonly si utilizza per indicare che un cosrtuttore si può solo leggere e non modificare (utilizzato spesso per l'id)
class Persona3{
    constructor(public readonly nome: string, private cognome: string){
    }
    presenta():void {
        console.log(`ciao sono ${this.nome} ${this.cognome}`);
    }

    saluta(persona: Persona):void {
        console.log(`ciao ${persona.nome}, molto piacere`);
    }
}
//classe figlia con costruttore super (non posso estendere più classi in una)
class Studente extends Persona{
    constructor(nome: string, cognome: string, private materiapreferita: string){
        super(nome,cognome)
    }
}
const studente : Studente = new Studente("Luca","Rossi","italiano");
studente.presenta();
/*protected è un private per le classe stessa e per le classi figlie 
(il private si può solo modiicare dentro la classe stessa in cui si chiama)*/

//proprietà o metodi statici, sono proprietà e metodi che posso chimaare senza creare un oggetto (esempio classe Math)
Math.floor(2.5);
//non devo fare const math:Math = new Math(); (posso accedere direttamente alla classe Math e chiamare i methodi statici)

/*classi astratte: classi che contengono una o più proprietà astratte 
(per esempio se devo creare una classe che mi serve solo come classe madre da estendere a classi figli, 
se la metto astratta non posso creare un oggetto persona ad esempio)*/

/*singleton= un pattern di programmazione che ci permette di creare una instanza di una classe*/
class Preside{ 
    private static instance:Preside;//c'è solo un preside (di solito di mette private)
    constructor(private name:string, private cognome:string){}
    static getInstance(){
        if(Preside.instance){
            return this.instance
        }
        this.instance = new Preside("Luca","Rossi");
        return this.instance;
    }
    presenta(){
        console.log(`buongiorno sono il preside ${this.name} ${this.cognome}`);
    }
}
Preside.getInstance().presenta;