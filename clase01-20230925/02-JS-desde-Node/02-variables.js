let message = "Hello!";
let phrase = message;

console.log(message, phrase)
phrase = 'chau'
console.log(message, phrase)



let user = { name: "John" };

let admin = user; // copia la referencia

admin.name = 'Pete'; // cambiado por la referencia "admin"

console.log(user, admin)

admin={...user}

admin.name='Carlos'
console.log(user, admin)

const nombre='Juan'
// nombre='Matias'

const heroes=['superman', 'flash']
// heroes='carlos'
heroes.push('gamora')
console.log(heroes)
// heroes.pop()
// heroes.pop()
// heroes.pop()
// heroes.push('gamora')
heroes.splice(0,1)
console.log(heroes, typeof heroes)



