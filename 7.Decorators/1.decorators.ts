//per utilizzarli aprire tsconfig.json e togliere a commento "experimentalDecorators: true"
//i decorators sono delle funzioni che si applicano all'interno di una classe o alle classe tramite una chiocciola
function Logger(constructor:any){
    console.log("mando a schermo");
    console.log(constructor);
}

@Logger //in pratica Logger vienen inserita nella classe Try
class Try{
    constructor(){
        console.log("oggetto prova");
    }
}
//decorator factory

function Log(messaggio: string){
    return function(constructor:any){
        console.log(constructor);
    }
}

@Log("oggetto prova")
class Try2{
    constructor(){
        console.log("oggetto prova2");
    }
}

//esempio template

function creaElemento(elemento: string, id: string, nome: string){ 
    return function(constructor:any){
        const container = document.getElementById(id);
        const try3 = new constructor(nome);
        if (container){
            container.innerHTML = elemento
            container.querySelector(`h1`)!.textContent = try3.nome;
        }
    }
}


@creaElemento(`<h1></h1>`, "container", "luca")
class Try3{
    constructor(public nome:string){
            console.log("oggetto prova3");
        }
}