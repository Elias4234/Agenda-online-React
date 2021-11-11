const guardarContacto = (db, contacto) =>{
	db.setItem(contacto.id, JSON.stringify(contacto))
	window.location.href = '/'
}

const cargarContactos = (db, parentNode) =>{
	let claves = Object.keys(db)
	
	for(clave of claves){
		let contacto = JSON.parse(db.getItem(clave))
		crearContacto(parentNode, contacto, db)
	}
}

function getContactos(){
    var divContacto = document.getElementById("divContacto");
    fetch("http://www.raydelto.org/agenda.php").then(function(datos){
        return datos.json();
    }).then(function(listado){
        var cadenaListado = "";
        for(contacto of listado)
        {
            console.log(contacto);
            cadenaListado += contacto.nombre + " " + contacto.apellido + " " + contacto.telefono + "<br/>\n";
        }
        divContacto.innerHTML = cadenaListado;
    });
}

const crearContacto = (parentNode, contacto, db) =>{
	let divContacto = document.createElement('div')
	let nombreContacto = document.createElement('h3')
	let apellidoContacto = document.createElement('p')
	let telefonoContacto = document.createElement('p')
	let iconoBorrar = document.createElement('span')
	
	nombreContacto.innerHTML = contacto.nombre
	apellidoContacto.innerHTML = contacto.apellido
	telefonoContacto.innerHTML = contacto.telefono
	iconoBorrar.innerHTML = 'delete'
	
	divContacto.classlist.add('Contacto')
	divContacto.classlist.add('material-icons','icono')
	
	iconoBorrar.onclick = () =>{
		db.removeItem(contacto.id)
		window.location.href = '/'
	}	
	divContacto.appendChild(nombreContacto)
	divContacto.appendChild(apellidoContacto)
	divContacto.appendChild(telefonoContacto)
	divContacto.appendChild(iconoBorrar)
	parentNode.appendChild(divContacto)
}