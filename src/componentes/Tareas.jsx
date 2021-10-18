import React from 'react'
const moment = require('moment');

function Tareas(props) {
    const arrayNuevo = props.onTareas;
    const modificarTarea = props.onModificarTarea;
    const eliminarTarea = props.onEliminarTarea;
    return (
        <div className="tareas" >
            {arrayNuevo.map((tarea) => {
                return(
                    <div className="card-tarea">
                        <li className="tarea-descripcion">{tarea.descripcion}</li>
                        <h5>Creador: {tarea.id_usuario.nombre}</h5>
                        <h5>Fecha de publicación: {tarea.fecha_hora}</h5>
                        <div className="button-tarea">
                            <button className="button-editar-tarea" type="button" value="Editar" onClick={modificarTarea}>Editar</button>
                            <button className="button-tarea-completada" type="button" value="Marcar como completado" onClick={eliminarTarea}>Marcar como completado</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Tareas
