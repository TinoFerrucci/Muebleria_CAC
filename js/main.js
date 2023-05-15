// Lista de muebles
var muebles = [];

// Llamada a una API donde se ubican todos los muebles y sus atributos
fetch("https://sheetdb.io/api/v1/42qk3gwtfyppb")
  .then((res) => res.json())
  .then((muebles) => mostrarMuebles(muebles));

function mostrarMuebles(muebles) {
  var body = "";
  for (mueble of muebles) {
    body += `<tr><td>${mueble.id}</td><td>${mueble.nombre}</td><td>${mueble.stock}</td><td>${mueble.precio}</td></tr>`;
  }

  document.getElementById("muebles").innerHTML = body;
}
