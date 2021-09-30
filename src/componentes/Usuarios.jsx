import React from 'react'

function Usuarios(props) {
    const arrayNuevo = props.onUsuarios;
    return (
        <div className="usuarios" >
            {arrayNuevo.map((usuario) => {
                return(
                    <div class="card-block">
                        <div class="card-usuario">
                            <h3>{usuario.nombre}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Usuarios
