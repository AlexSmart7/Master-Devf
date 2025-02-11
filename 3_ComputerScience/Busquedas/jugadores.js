/* CREAR CLASE LLAMADA JUGADOR CON LOS SIGUIENTES DATOS

- NOMBRE
- POSICION
- NUMERO

DESPUES CREAR UNA CLASE LLAMADA EQUIPO LA CUAL TENDRA 2 METODOS

-AGREGAR UN JUGADOR
-BUSCAR UN JUGADOR POR NOMBRE
-BUSCAR UN JUGADORES POR POSICION

*/
console.log('Equipo de futbol')

class jugador {

    constructor(nombre,posicion,numero){
        this.nombre = nombre
        this.posicion = posicion
        this.numero = numero
    }

}

class equipo {

    constructor(){
        this.listJugadores = []
    }

    Agregar (jugador){
        this.listJugadores.push(jugador)
    }

    BuscarNombre(nombre){

        let nameJugador = this.listJugadores

        for(let i = 0 ; i < nameJugador.length ; i++ ){

            if (nombre === nameJugador[i].nombre){
                return `El jugador ${nombre} tiene el numero ${nameJugador[i].numero} y juega de ${nameJugador[i].posicion}`
            }
        }

            return `El jugador ${nombre} no pertenece a este equipo`
    }

    BuscarPosicion(posicion){
        let team = this.listJugadores
        let i = 0
        let cantidadJugadores = 0
        let nombreJugadores = []

        while(i<team.length){
            
            let elemento = team[i].posicion 

            if(posicion === elemento){
                cantidadJugadores++
                nombreJugadores.push(team[i].nombre)
            }

            i++
        }

        if(cantidadJugadores > 1){
            return {
                numero_jugadores: cantidadJugadores,
                jugadores: nombreJugadores
            }
            //`Se encontraron ${cantidadJugadores} en la posicion de ${posicion}`
        }else if(cantidadJugadores === 1){
            return `Solo hay un jugador en la posicion de ${posicion} y es ${nombreJugadores[0]}`
        }

        return `No se encontro ningun jugador en la posicion de ${posicion}`
    }

}


const ruleteros = new equipo()

ruleteros.Agregar({nombre:'Buffon',posicion:'Portero',numero:1})
ruleteros.Agregar({nombre:'Maldini',posicion:'Defensa',numero:4})
ruleteros.Agregar({nombre:'Puyol',posicion:'Defensa',numero:3})
ruleteros.Agregar({nombre:'Xavi',posicion:'Contencion',numero:5})
ruleteros.Agregar({nombre:'Cafu',posicion:'Lateral',numero:2})
ruleteros.Agregar({nombre:'Totti',posicion:'Medio',numero:10})
ruleteros.Agregar({nombre:'Ronaldo',posicion:'Delantero',numero:9})
ruleteros.Agregar({nombre:'Di Maria',posicion:'Delantero',numero:11})
ruleteros.Agregar({nombre:'Cristiano',posicion:'Extremo',numero:7})
ruleteros.Agregar({nombre:'Pirlo',posicion:'Medio',numero:8})

console.log(ruleteros)


function seachName (){

    let seach = prompt("Escribe el nombre del jugador?");
    let mensaje = ruleteros.BuscarNombre(seach)
    alert(mensaje); 
    console.log(mensaje);

}

function seachPosition () {
    
    let seachPos = prompt("Escribe que posicion buscas?");
    let mensaje = ruleteros.BuscarPosicion(seachPos) 
    alert(mensaje); 
    console.log(mensaje);

}