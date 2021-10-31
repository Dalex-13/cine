let datos = [];

function init() {
  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let mensaje = document.getElementById("mensaje");

  let mensajeFinal = document.getElementById("mensajeFinal");

  datos.push(nombre);

//   mensajeFinal.innerHTML = datos;
    document.getElementById("mensajeFinal").innerHTML = datos;
}
