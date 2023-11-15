//Le intefraccie sono un costrutto (come le classi) usate per essere implementate nelle classi in modo trasversale. (non esistono in js)
interface Prova{ 
    //contengono sia proprietà che metodi
    readonly nome: string;
    saluta():void;
}

/*la principale differenza tra custom type e interfaccia è che l'interfaccia vinee utilizzata nelle classi 
mentre il custom type per creare dei tipi custom che non esistono*/
type Provaa = { //custom type
    nome: string;
    saluta():void
}

//implementare un interfaccia (nelle interfaccie ci possono essere solo read only ma non i modificatori(public,private,protected))
class x implements Prova{
    nome: string;
    constructor(nome:string){
        this.nome = nome;
    }
    saluta(): void {
        
    }
}

//implementare più interfacciwe
interface Querty{
    scrivi():void;
}
class y implements Querty, Prova {
    nome: string;
    saluta(): void {
    }
    scrivi(): void {
    }
}

//esempio


interface Internet {
    ip: number;
    connettiInternet(): void;
}
abstract class Dispositivo{
    constructor(protected nome:string, protected anno:number){}

    abstract accendi():void;
    abstract spegni():void;
}

class Telefono extends Dispositivo{
    constructor(nome:string,anno:number){
        super(nome,anno);
    }
    accendi(): void {
        console.log("telefono accensione..");
    }
    spegni(): void {
        console.log("telefono spegnimento..");
    }

}

class Smartphone extends Dispositivo implements Internet{
    ip: number;

    constructor(nome:string,anno:number,ip:number){
        super(nome,anno)
        this.ip = ip;
    }
    accendi(): void {
        console.log("smartphone accensione..");
    }
    connettiInternet(): void {
        console.log("smartphone connessione ad internet..");
    }
    spegni(): void {
        console.log("smartphone spegnimento..");
    }
}

class Computer extends Dispositivo implements Internet{
    ip: number;

    constructor(nome:string,anno:number,ip:number){
        super(nome,anno)
        this.ip = ip;
    }
    accendi(): void {
        console.log("computer accensione..");
    }
    connettiInternet(): void {
        console.log("computer connessione ad internet..");
    }
    spegni(): void {
        console.log("computer spegnimento..");
    }
}

//interfaccie che estendono più interfaccie

interface X{
    nome: string;
}
interface Y extends X{
    cognome:string;
    respira():void;
}
interface Z{
    telefono: string;
    saluta():void;
}

interface W extends Y,Z{
    via:string;
    mangia():void;
}

class Person implements W{
    via: string;
    cognome: string;
    nome: string;
    telefono: string;
    mangia(): void {
        console.log("mangia");
    }
    respira(): void {
        console.log("respira");
    }
    saluta(): void {
        console.log("saluta");
    }

}
