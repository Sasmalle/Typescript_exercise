//ritorno specificato
function sum(n: number, m: number): number {
    return n+m;
}
sum(2,5);
//ritorno any usato spesso per più return
function str(a: number, b=1): any {
    if(a==b){
        return 4;
    }
    else{
        return ``
    }
}
//ritorno void se non return
function s (n5:number, n4:number): void{
    console.log("");
}

//function come tipo di dato
let prova: Function = sum
let pr: (x:number,y:number) => number //pr accetta funzioni con due dati di tipo numero e ritorni un tipo numero
//lo si può utilzzare per le callback