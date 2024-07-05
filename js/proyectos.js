const proyectos =[
    {
        imagen:"./imagenes/proyectos/barberia.png",
        titulo:"Barberia",
        github:"https://github.com/vanessamoralesm/barberia_alura_final",
        demo:"https://vanessamoralesm.github.io/barberia_alura_final/"
    },

    {
        imagen:"./imagenes/proyectos/numero_secreto.png",
        titulo:"Juego Numero Secreto",
        github:"https://github.com/vanessamoralesm/juego_numero_secreto_final",
        demo:"https://vanessamoralesm.github.io/juego_numero_secreto_final/"
    },

    {
        imagen:"./imagenes/proyectos/encriptador.png",
        titulo:"Encriptador de Texto",
        github:"https://github.com/vanessamoralesm/encriptador_texto",
        demo:"https://vanessamoralesm.github.io/encriptador_texto/"
    },
    {
        imagen:"./imagenes/proyectos/formulario.png",
        titulo:"Formulario con JSON",
        github:"https://github.com/vanessamoralesm/formulario",
        demo: "https://vanessamoralesm.github.io/formulario/"
    },
    {
        imagen:"./imagenes/proyectos/aluraplay.png",
        titulo:"AluraPlay",
        github:"https://github.com/vanessamoralesm/aluraplay_proyecto_final",
        demo:"https://vanessamoralesm.github.io/aluraplay_proyecto_final/"
    }
];

 export const proyecto_container= document.querySelector(".proyecto_container");
const array_proyectos= proyectos.map((data)=>
    `    
    <article class="card_portafolio">
        <img src="${data.imagen}" alt="${data.titulo}">
        <h3>${data.titulo}</h3>
        <div class="botones_portafolio">
            <a href="${data.github}" target="_blank" rel="nofollow noreferrer noopener" class="btn btn-outline-success">Ver en GITHUB</a>
            <a href="${data.demo}" target="_blank" rel="nofollow noreferrer noopener"  class="btn btn-outline-success">Ver DEMO</a>
        </div>
    </article>`
).join("");
proyecto_container.innerHTML=array_proyectos;