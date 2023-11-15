//le generics sono uno strumento che mette in relazione più dati insieme
const arr: Array<string> = ["aldo","mario"] // come dire: const arr: string[] =["asdw","swsw"] (Array<T>(è un costrutto generics))
//esempio pratico
//senza generics
 function creaArray (items: any[]): any[]{
    return new Array().concat(items);
 }

 const arr1 = creaArray([1,2,3,4]);
 const arr2 = creaArray(["q","w","e","t"]);
 //con generics (array del tipo specifico che vogliamo ci butta fuori)
 function creaArrayc<T> (items: T[]): T[]{
    return new Array().concat(items);
 }

 const arr3 = creaArrayc<number>([1,2,3,4]);
 const arr4 = creaArrayc(["q","w","e","t"]);
 //come porre dei limiti su T
 function creaArraycvinc<T extends number | string> (items: T[]): T[]{
    return new Array().concat(items);
 }

 const arr5 = creaArraycvinc<number>([1,2,3,4]);
 const arr6 = creaArraycvinc(["q","w","e","t"]);
// come utilizzare una classe generics
class Prov<T>{
    private lista : T[] = [];

    aggiungiItem(item:T){
        this.lista.push(item);
    }

    rimuoviItem(item:T){
        this.lista.splice(this.lista.indexOf(item),1);
    }
}

const listaStringhe = new Prov<string>();
listaStringhe.aggiungiItem("aldo");