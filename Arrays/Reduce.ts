//Array.reduce(f,acc) -> tipo de acc

//f(A:t_acc,B:t_Array)=> t_acc

//Del ejerc2 array num

import { num,nombres } from "../Types.ts";

const max:number = num.reduce((acc:number,elem:number) => {
    if(elem > acc){
        return elem; //lo q devuelva la funcion, pasara a ser el nuevo valor de acc
    }
    else{
        return acc;
    }
} ,0); //El 2 numero es el valor inicial del acc

console.log(max);

const masde5 = nombres.reduce((acc:string[],elem:string)=> {
    if(elem.length > 5){
        return [...acc, elem]; //esto devuelve el una copia del array acc y lo junta con el nuevo valor, esto pasara a ser el nuevo valor de acc
    } else {
        return acc;
    }
},[])

console.log(masde5);
