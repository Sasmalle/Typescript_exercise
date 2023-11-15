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