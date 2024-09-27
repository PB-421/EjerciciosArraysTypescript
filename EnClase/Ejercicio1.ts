const nombres:string[] = ["Pablo","Gonza","Alex","Raul"];

//ToUpperCase

const nombresM:string[] = nombres.map((elem:string)=> {
    return elem.toUpperCase();
})

console.log(nombresM);