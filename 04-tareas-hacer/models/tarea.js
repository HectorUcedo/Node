const { v4: uuidv4 } = require('uuid');

class Tarea {

    id   = '';
    desc = '';
    completadoEn = null;
    
    //* El Constructor es lo que se va a ejecutar cuando creemos una nueva instancia de nuestra tarea.
    constructor( desc ) {

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn; //! redundante

    }

}

/**
 * No voy a usar llaves porque o sino tendría que importarlo y hacer la destructuración de tareas, solo voy a exportar mi modelo de tarea.
 */

module.exports = Tarea; // Exportar por defecto
