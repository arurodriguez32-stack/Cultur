const formulario = document.getElementsById("formInscripcion");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const taller = document.getElementById("taller").value;
    const terminos = document.getElementById("terminos").checked;
    const mensaje = document.getElementById("mensaje");

    if (
        nombre === "" ||
        dni === "" ||
        email === "" ||
        telefono === "" ||
        taller === "" ||
    ) {
        mensaje.textContent = "Completa todos los campos.";
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        mensaje.textContent = "Ingrese un email valido.";
        return;
    }

    if (!/^\d+$/.test(telefono)) {
        mensaje.textContent = "El telefono debe contener solo numeros.";
        return;
    }

    if (!terminos) {
        mensaje.textContent = "Tenes que aceptar los terminos y condiciones.";
        return;
    }

    mensaje.textContent = "¡Preinscripcion enviada correctamente!";

    formulario.reset();

});