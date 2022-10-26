const Tarea = require("./tarea");

/**
 * _listado
 * {  'uuid-123-1532154-454: { id:12, desc: asd, completadoEn:2022-10-20 }  }
 */

class Tareas {

    _listado = {};
    
    constructor () {
        this._listado = {}; // Solo inicializamos, en un objeto vacío
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea( desc ); //* Todo es Síncrono
        this._listado[tarea.id] = tarea;

    }

}

module.exports = Tareas;

