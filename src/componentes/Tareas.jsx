import React from 'react'

function Tareas(props) {
    const arrayNuevo = props.onTareas;
    return (
        <div className="tareas" >
            {arrayNuevo.length === 0 ? <h2 className="titulo">No hay tareas pendientes</h2> : <h2 className="titulo">Tareas pendientes</h2>}
            {arrayNuevo.map((tarea) => {
                return(
                    <div class="card-block">
                        <div class="card-tarea">
                            <p>{tarea.descripcion}</p>
                            <h3>{tarea.autor}</h3>
                            <li>Fecha: {tarea.fecha}</li>
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
