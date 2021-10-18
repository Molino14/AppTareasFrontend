import React, {useState} from 'react'

function FormularioTareas(props) {
    const nuevaTarea = props.onCrearTarea;
    const [error, setError] = useState(false);
    const [nuevaDescripcion, setNuevaDescripcion] = useState("");
    
    function getDescripcion(event) {
        setNuevaDescripcion(event.target.value);
    }
    function getSubmit(event) {
        event.preventDefault();
        // No enviar si hay un campo sin rellenar.
        setError(false);
        if(nuevaDescripcion.trim() === ""){
            setError(true);
            return;
        }
        // Crear un nuevo objeto con los datos del formulario.
        const tareaNueva = {
            descripcion: nuevaDescripcion
        };
        nuevaTarea(tareaNueva);
        // Resetea los valores de las celdas del formulario al enviar.
        setNuevaDescripcion("");
    };
    return (
        <div>
            <form action="" onSubmit={getSubmit}>
                <h2 className="form-title">Crear tarea</h2>
                <label htmlFor="descripcion">Descripción de la tarea: </label>
                <textarea onChange={getDescripcion} id="descripcion" name="descripcion" rows="4" cols="20" placeholder="Escriba una o varias tareas..." value={nuevaDescripcion}></textarea><br/><br/>
                {error ? (<h4 className="error-campos">Debe escribir alguna tarea</h4>) : null}
                <div className="align-btn">
                    <button type="submit" value="Agregar">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default FormularioTareas
