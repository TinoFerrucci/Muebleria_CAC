// Lista de muebles
var muebles = [];

// Llamada a una API donde se ubican todos los muebles y sus atributos
fetch("https://sheetdb.io/api/v1/42qk3gwtfyppb")
  .then((res) => res.json())
  .then((responses) =>
    responses.forEach((mueble) => {
      muebles.unshift(mueble);
    })
  );

// Inicializamos un objeto Vue
