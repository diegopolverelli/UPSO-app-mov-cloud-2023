/*
Consigna: Definir una función “mostrarLista”, 
la cual recibirá un arreglo con elementos como parámetro.

- Si la lista está vacía, devolver un mensaje 
indicando “Lista vacía”.
- Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. 
- Finalizar el proceso devolviendo la longitud de 
la lista (Utilizar template strings)
Invocar la función con los casos de prueba.
*/

const mostrarLista=(arreglo)=>{
    if(!Array.isArray(arreglo)){
        console.log('Ingrese un argumento de tipo array')
        return
    }

    if(arreglo.length===0){
        console.log('Ha ingresado un array sin datos')
        return
    }

    // let i=0
    // for(let i=0; i<arreglo.length; i++){
    //     console.log(arreglo[i])
    // }

    arreglo.forEach(elemento=>console.log(elemento))

    let longitud=`La lista tiene ${arreglo.length} elementos`
    console.log(longitud)

}

mostrarLista([])
mostrarLista([1,2,3,4,5])
mostrarLista(['juan', 'pinchame'])
mostrarLista(100)



