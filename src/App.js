import './App.css';
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
// Componentes
import FormularioTareas from './componentes/FormularioTareas';
import Nav from './componentes/Nav';
import Tareas from './componentes/Tareas';
import FormularioAlta from './componentes/FormularioAlta';
import FormularioLogin from './componentes/FormularioLogin';
const Swal = require('sweetalert2');

function App() {
	const [usuarios, setUsuarios] = useState([]);
	const [tareas, setTareas] = useState([]);
	const url1 = "http://localhost:5000/api/usuarios"
	const url2 = "http://localhost:5000/api/tareas"
  
  	//Consulta de tareas a la BDD.
	async function getTareas() {
		try {    
			const consulta = await fetch(url2);
			const listaTareas = await consulta.json();
			setTareas(listaTareas.tareas);
			console.log(listaTareas.tareas);
		} catch (error) {
			console.log("No se ha podido recuperar la lista de tareas")
		} 
	}
	useEffect(() => getTareas(), []);

	// Crear tarea
	async function crearTarea(tarea) {
		// Envia los datos al servidor.
		await fetch(url2, {
		method: 'POST', 
		body: JSON.stringify(tarea),
		headers:{
			'Content-Type': 'application/json'
		}
		})
		.then(res => res.json())
		.catch(error => {
			// Alerta de fallo al crear la tarea
			Swal.fire({
				icon: "error",
				title: `Fallo al crear la tarea`,
				text: "Inténtelo más tarde",
				showConfirmButton: false,
				timer: 2300
			})
			console.error('Error:', error);
		})
		.then(response => {
			if (!response) {
				console.log('Success:', response)	
			} else {
				// Alerta de tarea creada
				Swal.fire({
					icon: "success",
					title: `Tarea creada correctamente`,
					showConfirmButton: false,
					timer: 2000
				})
			}
			console.log('Success:', response)
		});
		getTareas();
	}
	// Consulta de usuarios a la BDD.
	async function getUsuarios() {
		try {    
			const consulta = await fetch(url1);
			const listaUsuarios = await consulta.json();
			setUsuarios(listaUsuarios.usuarios);
			console.log(listaUsuarios.usuarios);
		} catch (error) {
			console.log("No se ha podido recuperar la lista de usuarios")
		} 
	}
	useEffect(() => getUsuarios(), []);

	// Crear usuario
	async function crearUsuario(usuario) {
		// Envia los datos al servidor.
		await fetch(url1, {
		method: 'POST', 
		body: JSON.stringify(usuario),
		headers:{
			'Content-Type': 'application/json'
		}
		})
		.then(res => res.json())
		.catch(error => {
			// Alerta de fallo al crear el usuario
			Swal.fire({
				icon: "error",
				title: `Fallo al crear usuario`,
				text: "Inténtelo más tarde",
				showConfirmButton: false,
				timer: 2300
			})
			console.error('Error:', error)})
		.then(response => {
			if (!response) {
				console.log('Success:', response)	
			} else {
				// Alerta de usuario creado
				Swal.fire({
					icon: "success",
					title: `Usuario creado correctamente`,
					showConfirmButton: false,
					timer: 2000
				})
			}
		});
		getTareas();
	}
  return (
    <div className="App">
		<h1 className="titulo-app">AppTareas Odisea Informática</h1>
		<Router>
			<Nav />
				<Route exact path='/'>
					<FormularioTareas onCrearTarea={crearTarea}/><br/>
					{tareas.length === 0 ? <h2 className="titulo-tareas">No hay tareas pendientes</h2> : <h2 className="titulo-tareas">Tareas pendientes</h2>}
					<Tareas onTareas={tareas} onUsuarios={usuarios}/>
				</Route>
				<Route path='/usuarios/alta'>
					<FormularioAlta onCrearUsuario={crearUsuario}/>
				</Route>
				<Route path='/usuarios/login'>
					<FormularioLogin />
				</Route>
				<Redirect to='/' />
		</Router>	
    </div>
  );
}

export default App;
