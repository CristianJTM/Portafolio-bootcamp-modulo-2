let formulario = document.getElementById("formulario-contacto");
const secciones = ["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"];
let nombre, correo,mensaje
let navbarId
const capturarDatos = (event) => {
    event.preventDefault();
    nombre = document.getElementById("name").value;
    correo = document.getElementById("email").value;
    mensaje = document.getElementById("message").value;
    alert(`${nombre} su mensaje: \n${mensaje}\nSe ha enviado correctamente, me comunicare con usted a la brevedad a su correo ${correo}`)
}
const navbarActualizar = (id, action) => {
    let navbarItem = document.getElementById(`${id}-navbar`);
    if (action === 'add') {
        navbarItem.classList.add("active");
    } else if (action === 'remove') {
        navbarItem.classList.remove("active");
    }
};

formulario.addEventListener("submit", capturarDatos);

secciones.forEach(id => {
    let seccion = document.getElementById(id);
    seccion.addEventListener("mouseover", () => navbarActualizar(id, 'add'));
    seccion.addEventListener("mouseout", () => navbarActualizar(id, 'remove'));
    let seccionNavbar = document.getElementById(`${id}-navbar`);
    seccionNavbar.addEventListener("mouseover", () => navbarActualizar(id, 'add'));
    seccionNavbar.addEventListener("mouseout", () => navbarActualizar(id, 'remove'));
});

