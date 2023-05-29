// Lista de muebles
var muebles = [];
const formulario = document.getElementById("formulario-contacto")
const nombre = formulario.nombre;
const apellido = formulario.apellido;
const correo = formulario.email;
const mensaje = formulario.mensaje;

// Llamada a una API donde se ubican todos los muebles y sus atributos
fetch("https://sheetdb.io/api/v1/42qk3gwtfyppb")
  .then((res) => res.json())
  .then((muebles) => mostrarMuebles(muebles));

function mostrarMuebles(muebles) {
  var body = "";
  for (mueble of muebles) {
    body += `<div class="producto">
              <h3>${mueble.nombre}</h3>
              <div><img src="${mueble.imagen}"></div>
              <div class="precio"> 
              <p>$${mueble.precio},00</p>
              <p>Unidades: ${mueble.stock}</p>
              </div> 
             </div>`;
  }

  document.getElementById("muebles").innerHTML = body;
}



function validarNombre(event){
    if (nombre.value.length == 0){
        alert("Debe ingresar un nombre en este campo")
        event.preventDefault()
    }
}

function validarApellido(event){
    if (apellido.value.length == 0){
        alert("Debe ingresar un apellido en este campo")
        event.preventDefault()
    }
}

function validarCorreo(event){
    if (!correo.value.includes("@")){
        alert("El correo ingresado no es valido")
        event.preventDefault()
    }
}

function validarMensaje(event){
    if (mensaje.value.length == 0){
        alert("Debe ingresar un mensaje en este campo")
        event.preventDefault()
    }
}

function validar(event){
    validarNombre(event)
    validarApellido(event)
    validarCorreo(event)
    validarMensaje(event)
}

formulario.addEventListener("submit", validar)
