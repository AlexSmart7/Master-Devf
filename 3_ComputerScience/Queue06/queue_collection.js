//* Ejemplo 2

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

// Agregar Datos o Instancias a la clase

const myQueueSuperHeroes = new Colas()

console.log(myQueueSuperHeroes.isEmpty())

myQueueSuperHeroes.enqueue({nombre:'Batman', Sexo: 'M'})
myQueueSuperHeroes.enqueue({nombre:'Superman', Sexo: 'M'})
myQueueSuperHeroes.enqueue({nombre:'Mujer Maravilla', Sexo: 'F'})
myQueueSuperHeroes.print()

console.log(myQueueSuperHeroes.size())

console.log(myQueueSuperHeroes.isEmpty())

myQueueSuperHeroes.enqueue({nombre: 'Flash', Sexo: 'M'})
myQueueSuperHeroes.enqueue({nombre: 'Acuaman', Sexo: 'M'})
myQueueSuperHeroes.print()

console.log(myQueueSuperHeroes.dequeue())

myQueueSuperHeroes.print()

// Metodos Auxiliares

console.log(myQueueSuperHeroes.front())
myQueueSuperHeroes.print()
console.log(myQueueSuperHeroes.back())
myQueueSuperHeroes.print()

console.log(myQueueSuperHeroes.isEmpty())
