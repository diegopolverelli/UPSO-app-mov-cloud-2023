
// class UsuariosManager{

// }

class Persona{

    static especie='ser humano'
    #password=''

    constructor(nombre, apellido){
        this.nombre=nombre
        this.apellido=apellido
        this.codigo=1234
    }

    static muestraEspecie(){
        return Persona.especie
    }

    mostrarNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    setNombre(nom){
        this.nombre=nom
    }

    
    setPassword(pass){
        this.#password=pass
    }

    getPassword(){
        return this.#password
    }
}

let persona1=new Persona('Lorena', 'Martinez')
let persona2=new Persona('Sergio', 'Martinez')

console.log(persona1.mostrarNombreCompleto())
persona2.setNombre('Sergio "Manteca"')
console.log(persona2.mostrarNombreCompleto())

// let persona3={...persona1}
// persona3

console.log(Persona.especie)
console.log(Persona.muestraEspecie())

persona1.setPassword('12345')
console.log(persona1.getPassword())

console.log(persona1.nombre)
console.log(persona1)

class ManagerUsuarios{
    constructor(){
        this.usuarios=[]
    }

    insestarUsuario(nombre, apellido){

        let id=1
        if(this.usuarios.length>0){
            id=this.usuarios[this.usuarios.length-1].id +1
        }

        let usuarioNuevo={
            nombre, apellido, id
        }

        this.usuarios.push(usuarioNuevo)

    }

    getUsuarios(){
        return this.usuarios
    }
}

let mu1=new ManagerUsuarios()
mu1.insestarUsuario('Matias', 'Perez')
mu1.insestarUsuario('Lorena', 'Perez')
mu1.insestarUsuario('Diego', 'Lopez')
console.log(mu1.getUsuarios())
