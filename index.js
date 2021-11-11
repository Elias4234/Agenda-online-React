const Nombre = document.querySelector('.Nombre')
const Apellido = document.querySelector('.Apellido')
const Telefono = document.querySelector('.Telefono')
const btnAgregarContacto = document.querySelector('.btn-agregar')

const listadoContacto = document.querySelector('.listado-contacto')
const db = window.localStorage

btnAgregarContacto.onclick = () =>{
	let contacto = {
		id: Math.random(1,100),
		Nombre: Nombre.value,
		Apellido: Apellido.value,
		Telefono: Telefono.value,
	}
	guardarContacto(db, contacto)
}
cargarContactos(db, listadoContacto)