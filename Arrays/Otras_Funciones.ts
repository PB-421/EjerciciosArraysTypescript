//Some: Me dice si alguno de los elementos del array cumple una condicion, y ahi se para cuando hay un verdadero

//Every: Lo mismo q el some pero se para cuando hay un false

//Find: Encuentra un elemento y me devuelve ese objeto, devuelve el objeto,NO UNA COPIA, EL OBEJETO COMO TAL, o undefined

import { Persona,lista } from "../Types.ts";

const alguien:Persona | undefined = lista.find((elem:Persona)=> elem.edad > 18 && elem.nombre.length > 7);

if(alguien){
console.log(alguien);
}
else{
    console.log("No hay ninguna persona con esas caracteristicas");
}

