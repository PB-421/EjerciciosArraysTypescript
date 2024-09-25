//Teoria


/*
const arr:number[] = [1,2,3,4,5];

function mostrar(a:number): void {
    console.log(a);
}

arr.forEach(mostrar); // Recorre todo el array, y realiza la funcion q esta entre parentesis, habitualmente, la definire dentro

console.log("Cambio de funcion");

arr.forEach((a:number) =>
    console.log(a));

//Cambio de formato

console.log("Cambio de formato");

arr.forEach((elem: number, i: number) => { //Tambien esta el formato de el tipo de elemento, indice y array(opcional)
    console.log("Elemento "+i+" del array: "+elem);
}) 
*/


//Ejercicio: Programa que dado un array, muestre por pantalla los numeros de indice par:

const array:number[] = [11,22,33,44,55,66,77];

function comprobarPar(a:number):boolean {
    if(a % 2 === 0){
        return true;
    } else {
        return false;
    }
}

array.forEach((numero: number, indice: number) => {
    if(comprobarPar(indice)){
        console.log("Numero en la posicion "+indice+": "+numero);
    }
})