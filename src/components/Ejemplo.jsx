import React, { useState } from "react";
import "./StyleEjemplo.css";

const Ejemplo = () => {
	// Estado que usaremos para atrapar el valor del input
	const [nombres, actualizarNombres] = useState("");

	// URL para buscar
	let API = `https://rickandmortyapi.com/api/character/?name=${nombres}`;

	// Fetch para el Personaje
	const [data, setData] = useState([]);

	var obtenerDatos = async () => {
		const datos = await fetch(API);
		const personajes = await datos.json();

		setData(personajes);
	};

	const handleChange = (e) => {
		actualizarNombres(e.target.value);
	};

	const CambiarUrl = () => {
		API = `https://rickandmortyapi.com/api/character/?page=1`;
		console.log(API);
	};
	console.log(API);
	return (
		<div className="Container">
			<h4>Ingrese el nombre del personaje</h4>
			<input name="personaje" onChange={handleChange} />

			<button onClick={obtenerDatos}>Personajes</button>
			<button onClick={CambiarUrl}>Cambiar</button>
		</div>
	);
};

export default Ejemplo;
