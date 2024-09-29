// comprobar q dado un array, ver si todos los subarrays contienen el numero 3

import { arrDarr } from "../Types.ts";

const hay3entodos:boolean = arrDarr.every((elem:number[]) => {
   if(elem.some((elem2:number)=> elem2 === 3)){
     return true;
   } else {
    return false;
   }
})

console.log(hay3entodos);