import { obtenerUsuarios, obtenerPostsDeUsuario } from "./api.js";

const contenedor = document.getElementById("contenedor-usuarios");
const spinner = document.getElementById("spinner");
const estado = document.getElementById("estado");
const inputBusqueda = document.getElementById("busqueda");
const btnCargar = document.getElementById("btnCargar");
const btnLimpiar = document.getElementById("btnLimpiar");


function mostrarEstado(mensaje, tipo = "info") {

    estado.textContent = mensaje;
    estado.className = `estado-${tipo}`;

}


function renderizarTarjeta(usuario) {

    const card = document.createElement("article");
    card.className = "tarjeta-usuario";

    card.innerHTML = `
<h3>${usuario.name}</h3>
<p>📧 ${usuario.email}</p>
<p>🌐 ${usuario.website}</p>

<button class="btn-posts" data-id="${usuario.id}">
Ver publicaciones
</button>

<div class="posts-container" hidden></div>
`;

    const botonPosts = card.querySelector(".btn-posts");

    botonPosts.addEventListener("click", async () => {

        const postsDiv = card.querySelector(".posts-container");

        postsDiv.hidden = false;
        postsDiv.innerHTML = "<em>Cargando publicaciones...</em>";

        try {

            const posts = await obtenerPostsDeUsuario(usuario.id);

            postsDiv.innerHTML = posts
                .slice(0, 3)
                .map(p => `<p><strong>${p.title}</strong></p>`)
                .join("");

        } catch (error) {

            postsDiv.innerHTML = `<span class="error">Error: ${error.message}</span>`;

        }

    });

    return card;

}


btnCargar.addEventListener("click", async () => {

    spinner.hidden = false;
    contenedor.innerHTML = "";

    mostrarEstado("Solicitando datos...", "info");

    try {

        const usuarios = await obtenerUsuarios();

        usuarios.forEach(usuario => {

            const card = renderizarTarjeta(usuario);
            contenedor.appendChild(card);

        });

        mostrarEstado(`${usuarios.length} usuarios cargados`, "ok");

    } catch (error) {

        mostrarEstado(`Error: ${error.message}`, "error");

    } finally {

        spinner.hidden = true;

    }

});


inputBusqueda.addEventListener("input", (e) => {

    const query = e.target.value.toLowerCase();

    document.querySelectorAll(".tarjeta-usuario").forEach(card => {

        const nombre = card.querySelector("h3").textContent.toLowerCase();

        card.hidden = !nombre.includes(query);

    });

});


btnLimpiar.addEventListener("click", () => {

    contenedor.innerHTML = "";
    inputBusqueda.value = "";
    mostrarEstado("Contenido limpiado", "info");

});