// Toma los 3 ejercicios anteriores (las funciones que has utilizado
// para resolverlos), y ejecuta las mismas utilizando async/await



























// Rta.:
// function doubleNumber(num) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(num * 2);
//       }, 2000);
//     });
//   }
  
// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("La promesa fue rechazada");
//         }, 5000);
//     });
// }

// const f2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("La promesa se resolvió con éxito");
//         }, 3000);
//     });
// }

// const entorno=async()=>{
//     console.log(await doubleNumber(100))
//     console.log(await f2())
    
//     try {
//         console.log(await f1())
//     } catch (error) {
//         console.log(error)
//     }
// }

// entorno()
