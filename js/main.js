// Lista de muebles
var muebles = [];

// Llamada a una API donde se ubican todos los muebles y sus atributos
fetch("https://sheetdb.io/api/v1/42qk3gwtfyppb")
  .then((res) => res.json())
  .then((muebles) => mostrarMuebles(muebles));

function mostrarMuebles(muebles) {
  var body = "";
  for (mueble of muebles) {
    body += `<tr>
                <td>${mueble.nombre}</td>
                <td>${mueble.stock}</td>
                <td>$${mueble.precio},00</td>
                <td>
                  <div class="contenedor_imagen_mueble">
                    <img class="imagen_mueble" src="${mueble.imagen}">
                  </div>
                </td>
              </tr>`;
  }

  document.getElementById("muebles").innerHTML = body;
}
