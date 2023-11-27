// Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y 
// añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.


let alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++) {
    let status = alumns[i].T1 && (alumns[i].T2 || alumns[i].T3);
    console.log(alumns[i].name, "is ", status);
}

//     for (let i = 0; i < alumns.length; i++) {
//         if (alumns[i].trimester.filter(trimester => trimester).length >= 2) {
//             alumns.isApproved = true;
//         } else {
//             alumns.[i].isApproved = false;
//         }
//     }
// console.log(alumns)

// const users = [
//     { name: "John", quarters: [true, true, false, true] },
//     { name: "Jane", quarters: [true, false, true, true] },
//     { name: "Mike", quarters: [false, true, false, true] }
// ];

// for (let i = 0; i < users.length; i++) {
//     if (users[i].quarters.filter(quarter => quarter).length >= 2) {
//     users[i].isApproved = true;
//     } else {
//     users[i].isApproved = false;
//     }
// }

// console.log(users);
