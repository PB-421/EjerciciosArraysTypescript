//Programacion de barrio, juntar las diferentes funciones de array

import { Persona,lista } from "../Types.ts";

const nombresN: string[] = lista.filter((elem:Persona) => {
    if(elem.edad >18){
    return elem;
    }
    }).map((elem:Persona)=> elem.nombre);



/* lo de arriba es lo mismo q lo de 

const listaN:Persona[] = lista.filter((elem:Persona) => {
    if(elem.edad >18){
    return elem;
    }
   
})

const listaNN:string[] = listaN.map((elem:Persona)=> elem.nombre);

console.log(listaNN);

*/

console.log(nombresN);

