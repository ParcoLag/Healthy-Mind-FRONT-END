// HealthyMind - comportamiento de las páginas (JavaScript simple, sin conexión a servidor)

// 1. Inicio de sesión: si el formulario es válido, pasa a la pantalla de inicio
const formLogin = document.getElementById("formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();                       // evita que la página se recargue
    if (formLogin.checkValidity()) {
      window.location.href = "inicio.html";        // navega a la pantalla principal
    } else {
      formLogin.classList.add("was-validated");    // muestra los mensajes de error de Bootstrap
    }
  });
}

// 2. Actividades: filtra las tarjetas según el botón elegido
const botonesFiltro = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll(".actividad");
botonesFiltro.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const filtro = boton.dataset.filtro;
    // Marca solo el botón seleccionado
    botonesFiltro.forEach(function (b) {
      b.classList.toggle("btn-primary", b === boton);
      b.classList.toggle("btn-outline-secondary", b !== boton);
    });
    // Muestra u oculta cada tarjeta
    tarjetas.forEach(function (tarjeta) {
      const coincide = filtro === "todas" || tarjeta.dataset.categoria === filtro;
      tarjeta.classList.toggle("d-none", !coincide);
    });
  });
});

// 3. Perfil: muestra un mensaje al guardar los cambios
const formPerfil = document.getElementById("formPerfil");
if (formPerfil) {
  formPerfil.addEventListener("submit", function (evento) {
    evento.preventDefault();
    document.getElementById("mensajePerfil").classList.remove("d-none");
  });
}
