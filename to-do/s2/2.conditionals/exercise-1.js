// Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

let alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let isApproved;
let approved = new Array;

for (let i = 0; i < alumns.length; i++) {
    isApproved = false;
    if ((alumns[i].T1 && alumns[1].T2) || (alumns[i].T1 && alumns[1].T3) || (alumns[i].T2 && alumns[1].T3) === true) {
        isApproved = true;
    }
    if (isApproved === true) {
        console.log(alumns[i].name, ': Aprobado', isApproved);
        approved.push(alumns[i]);
    } else {
        console.log(alumns[i].name, ': Aprobado', isApproved);
    }
}

console.log('Los alumnos aprobados son: ',approved);