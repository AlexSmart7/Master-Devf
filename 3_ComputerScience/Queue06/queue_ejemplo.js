//* Ejemplo 1

class Colas {

    constructor(){
        this.queue= []
    }

    //Metodos
    enqueue(element){
        // Agrega elemento a la cola
        this.queue.push(element)
        return this.queue
    }

    dequeue(){
        // retira el primer elemento de la cola
        return this.queue.shift() // remover el primer valor de un arreglo
    }

    peek() { // Retorna el primer elemento de la cola sin quitarlo de la misma 
        return this.queue[0]
    }    

    size() { // Retorna la longitud 
        return this.queue.length
    }

    isEmpty(){ // Muestra si hay datos 
        return this.queue.length === 0
    }

    print(){    // Imprime el arreglo
        console.log(this.queue)
    }

}


//? Agregar Instancias o Datos al Arreglo



const queue = new Colas()

console.log(queue.isEmpty())

console.log(queue.enqueue('Cristiano Ronaldo'))

console.log(queue.isEmpty())

console.log(queue.enqueue('Leonel Messi'))
console.log(queue.enqueue('Diego Armando Maradona'))
console.log(queue.enqueue('Paolo Maldini'))
console.log(queue.enqueue('Gianluigi Buffon'))

// Sacar datos del Arreglo
console.log(queue.dequeue())

console.log(queue)

console.log(queue.print())

console.log()