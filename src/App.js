import './App.css';
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import FormularioTareas from './componentes/FormularioTareas';
import Nav from './componentes/Nav';
import Tareas from './componentes/Tareas';
import FormularioAlta from './componentes/FormularioAlta';
import FormularioLogin from './componentes/FormularioLogin';

function App() {
	const [usuarios, setUsuarios] = useState([]);
	const [tareas, settareas] = useState([]);
	const url1 = "http://localhost:1337/clientes"
	const url2 = "http://localhost:1337/tareas"
  
  	//Consulta de tareas a la BDD.
	async function getTareas() {
		try {    
			const respuesta = await fetch(url2);
			const resultado = await respuesta.json();
			settareas(resultado);
			console.log(resultado);
		} catch (error) {

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
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response));
		getTareas();
	}
	// Consulta de usuarios a la BDD.
	async function getUsuarios() {
		try {    
			const respuesta = await fetch(url1);
			const resultado = await respuesta.json();
			setUsuarios(resultado);
			console.log(resultado);
		} catch (error) {

		} 
	}
	useEffect(() => getUsuarios(), []);

	// Crear usuario
	async function crearUsuario(usuario) {
		// Envia los datos al servidor.
		await fetch('http://localhost:1337/clientes/alta', {
		method: 'POST', 
		body: JSON.stringify(usuario),
		headers:{
			'Content-Type': 'application/json'
		}
		})
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response));
		getTareas();
	}
  return (
    <div className="App">
		<h1>AppTareas Odisea Informática</h1>
		<Router>
			<Nav />
				<Route exact path='/'>
					<FormularioTareas onCrearTarea={crearTarea}/><br/>
					<Tareas onTareas={tareas}/>
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
