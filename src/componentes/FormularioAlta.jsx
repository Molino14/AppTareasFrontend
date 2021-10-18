import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
const Swal = require('sweetalert2');

function FormularioAlta(props) {
    const nuevoUsuario = props.onCrearUsuario;
    const [error, setError] = useState(false);
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoApellido, setNuevoApellido] = useState("");
    const [nuevoEmail, setNuevoEmail] = useState("");
    const [nuevoPassword, setNuevoPassword] = useState("");

    function getNombre(event) {
        setNuevoNombre(event.target.value);
    }
    function getApellido(event) {
        setNuevoApellido(event.target.value);
    }
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
        if(nuevoNombre.trim() === "" || nuevoApellido.trim() === "" || nuevoEmail.trim() === "" || nuevoPassword.trim() === ""){
            setError(true);
            return;
        }
        // Crear un nuevo objeto con los datos del formulario.
        const usuarioNuevo = {
            nombre: nuevoNombre,
            apellidos: nuevoApellido,
            email: nuevoEmail,
            password: nuevoPassword
        };
        nuevoUsuario(usuarioNuevo);
        // Resetea los valores de las celdas del formulario al enviar.
        setNuevoNombre("");
        setNuevoApellido("");
        setNuevoEmail("");
        setNuevoPassword("");
    };
    return (
        <div className="form-user">
            <form action="" onSubmit={getSubmit}>
                <h2 className="form-title">Crear usuario</h2>
                <label htmlFor="nombre">Nombre: </label>
                    <input onChange={getNombre} type="text" id="nombre" name="nombre" placeholder="Escriba su nombre" value={nuevoNombre} required /><br/><br/>
                <label htmlFor="apellidos">Apellidos: </label>
                    <input onChange={getApellido} type="text" id="apellidos" name="apellidos" placeholder="Escriba sus apellidos" value={nuevoApellido} required/><br/><br/>
                <label htmlFor="email">Correo electrónico: </label>
                    <input onChange={getEmail} type="email" id="email" name="email" placeholder="Escriba su correo electrónico" value={nuevoEmail} required/><br/><br/>
                    <label htmlFor="password">Contraseña: </label>
                    <input onChange={getPassword} type="password" id="password" name="password" placeholder="Escriba una contraseña" value={nuevoPassword} required/><br/><br/>
                {error ? (<h4 className="error-campos">Debe rellenar los campos</h4>) : null}
                <div className="align-btn">
                    <button type="submit" value="Registrar">Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default FormularioAlta