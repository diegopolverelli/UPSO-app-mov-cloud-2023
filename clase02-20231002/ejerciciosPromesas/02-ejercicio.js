// Crea una promesa que se rechace después de 5 segundos y devuelva 
// un mensaje de error. Luego, utiliza .catch() para imprimir el 
// mensaje de error en la consola.


























// Rta.:
// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("La promesa fue rechazada");
//         }, 5000);
//     });
// }

// f1().catch((error) => {
//     console.log(error);
// });