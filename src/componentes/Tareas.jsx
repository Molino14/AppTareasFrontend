import React from 'react'

function Tareas(props) {
    const arrayNuevo = props.onTareas;
    const arrayUsuarios = props.onUsuarios;
    return (
        <div className="tareas" >
            {arrayNuevo.map((tarea) => {
                return(
                    <div className="card-tarea">
                        <p>{tarea.descripcion}</p>
                        <h5>Fecha de publicación: {tarea.fecha_hora}</h5>
                        <div className="button-tarea">
                            <button type="button" value="Editar">Editar</button>
                            <button type="button" value="Marcar como completado">Marcar como completado</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Tareas
