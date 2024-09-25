//teoria

//Recibe una funcion a la que le damos un parametro de filtracion

/*

const arr:number[] = [1,2,3,4,5,6,7];

arr.filter((num: number) => {
    if(num>3){
        console.log(num);
    }
})

*/

//Ejercicio: Partiendo de un array de estudiantes (tipo con nombre y nota), hacer un filter q me muestre solo los aprobados, cuando los tenga, filtro solo los nombres

type estudiante = {
    name: string;
    nota: number;
}

const estudiantes:estudiante[] = [
    {name:"Pablo",nota:7},
    {name:"Matt",nota:7.5},
    {name:"Tom",nota:3}
]

console.log("Estudiantes aprobados con todo:")

const aprobados:estudiante[] = estudiantes.filter((estud:estudiante)=> {
    if(estud.nota >= 5){
        console.log("Estudiante: "+estud.name+" Nota: "+estud.nota);
        return estud;
    }
})

//ahora transformo el array de los aprobados

const nombresApr:string[] = aprobados.map((estud:estudiante)=> estud.name);

console.log("Nombres de los estudiantes:")
nombresApr.forEach((a:string) =>
    console.log(a));


