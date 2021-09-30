import React, {useState} from 'react';

function FormularioLogin() {
    // const nuevoUsuario = props.onCrearUsuario;
    const [error, setError] = useState(false);
    const [nuevoEmail, setNuevoEmail] = useState("");
    const [nuevoPassword, setNuevoPassword] = useState("");

    function getEmail(event) {
        setNuevoEmail(event.target.value);
    }
    function getPassword(event) {
        setNuevoPassword(event.target.value);
    }
    function getSubmit(event) {
        event.preventDefault();
        // No enviar si hay un campo sin rellenar.
        setError(false);
        if(nuevoEmail.trim() === "" || nuevoPassword.trim() === ""){
            setError(true);
            return;
        }
        // Crear un nuevo objeto con los datos del formulario.
        const nuevoLogin = {
            email: nuevoEmail,
            password: nuevoPassword
        };
        // nuevoUsuario(usuarioNuevo);
        // Resetea los valores de las celdas del formulario al enviar.
        setNuevoEmail("");
        setNuevoPassword("");
    };
    return (
        <div className="form-login">
           <form action="" onSubmit={getSubmit}>
                <h2>Login de usuario</h2>
                <label htmlFor="email">Correo electrónico: </label>
                    <input onChange={getEmail} type="email" id="email" name="email" placeholder="Escriba su correo electrónico" value={nuevoEmail} required/><br/><br/>
                <label htmlFor="password">Contraseña: </label>
                    <input onChange={getPassword} type="password" id="password" name="password" placeholder="Escriba una contraseña" value={nuevoPassword} required/><br/><br/>
                {error ? (<h4 className="error-campos">Debe rellenar los campos</h4>) : null}
                <div className="align-btn">
                    <button type="submit" value="Logearse">Logearse</button>
                </div>
            </form> 
        </div>
    )
}

export default FormularioLogin
