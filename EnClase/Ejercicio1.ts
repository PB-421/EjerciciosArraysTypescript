//ToUpperCase
import { nombres } from "../Types.ts";

const nombresM:string[] = nombres.map((elem:string)=> {
    return elem.toUpperCase();
})

console.log(nombresM);