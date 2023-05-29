// Lista de muebles
var muebles = [];

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


function btnEnviar() {
  alert("Mensaje enviado!");
}