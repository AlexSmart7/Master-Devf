//* Ejercicio de Tickets

class Colas {

    constructor(){

        this.collection = []
    }

    // Metodos Principlales


    enqueue(elemento){
        this.collection.push(elemento)
        return this.collection
    }

    dequeue(){
        return this.collection.shift()
    }

    size(){
        return this.collection.length
    }

    print(){
        console.log(this.collection)
    }

    // Metodos Auxiliares

    front(){ // Trae el primer elemento sin sacarlo de la cola
        return this.collection[0]
    }

    back(){ // Trae el ultimo elemento sin sacarlo de la cola
        return this.collection[this.collection.length -1]
    }

    isEmpty(){
        return this.collection.length === 0
    }
    
}

const queueFila = new Colas()

console.log(queueFila.isEmpty())

queueFila.enqueue({user:'User1',ticket:true})
queueFila.enqueue({user:'User2',ticket:true})
queueFila.enqueue({user:'User3',ticket:false})
queueFila.enqueue({user:'User4',ticket:true})
queueFila.enqueue({user:'User5',ticket:false})
queueFila.enqueue({user:'User6',ticket:false})
queueFila.enqueue({user:'User7',ticket:true})
queueFila.enqueue({user:'User8',ticket:true})
queueFila.enqueue({user:'User9',ticket:true})
queueFila.enqueue({user:'User10',ticket:false})
queueFila.enqueue({user:'User11',ticket:true})

queueFila.print()

console.log(queueFila.isEmpty())

console.log(queueFila.size())

const queueFilaInicial = new Colas()
const queueFilaFinal = new Colas()
const queueFilaEliminados = new Colas()
const numUsuarios = queueFila.size() 

for(let i = 0; i < numUsuarios ; i++){

    let usuario = queueFila.front()

    queueFilaInicial.enqueue(usuario)

    if (usuario.ticket === true){
        queueFilaFinal.enqueue(usuario)
        queueFila.dequeue()
    }else { 
        queueFilaEliminados.enqueue(usuario)
        queueFila.dequeue()
    }
}

queueFilaInicial.print()
queueFilaFinal.print()
queueFilaEliminados.print()