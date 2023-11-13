let persona: {};
let perosna1: object;

let persona2:{
    nome:string;
    cognome:string;
    eta:number;
}

let persona3:{
    nome:string;
    cognome:string;
    eta:number;
    indirizzo:{
        via:string;
        civico:number;
        citta: string;
    }
}


/*invece di scrivere una funzione con un casino di parametri 
possiamo scivere:*/
function getData(data:{id:number,username:string,password:string}){
    console.log(data.id)
}
getData({id:1,username:``,password:``})
