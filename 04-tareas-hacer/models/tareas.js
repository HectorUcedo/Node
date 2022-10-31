const Tarea = require("./tarea");

/**
 * _listado
 * {  'uuid-123-1532154-454: { id:12, desc: asd, completadoEn:2022-10-20 }  }
 */

class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach( key => {

            const tarea = this._listado[key]
            listado.push( tarea );
            
        })

        return listado;
    }
    
    constructor () {
        this._listado = {}; // Solo inicializamos, en un objeto vacío
    }

    cargarTareasFormArray( tareas = [] ) {
        // this._listado[tarea.id] = tarea;

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });

    };

    crearTarea( desc = '' ){

        const tarea = new Tarea( desc ); //* Todo es Síncrono
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto(){

        console.log();
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${ i + 1 }`.green;
            const { desc, compleadoEn } = tarea;
            const estado = ( compleadoEn ) 
                                ? 'Completada'.green 
                                : 'Pendiente'.red;
                            
            console.log(`${ idx } ${ desc } :: ${ estado }`);
            
        });
        
    }

    listarPendientesCompletadas ( completadas = true ) {

        console.log();
        let contador = 0;
        this.listadoArr.forEach( tarea  => {

            const { desc, compleadoEn } = tarea;
            const estado = ( compleadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;
            
            if ( completadas ) {
                //Mostar Completadas
                if ( compleadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ compleadoEn }`);
                }
            } else {
                // Mostrar pendientes
                if ( !compleadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }

            
        });
        
    }

}

module.exports = Tareas;

