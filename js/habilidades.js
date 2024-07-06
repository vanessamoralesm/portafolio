const skills=[
    {
        imagen: "./imagenes/skills/c.svg",
        titulo: "C"
    },
    
    {
        imagen: "./imagenes/skills/csharp.svg",
        titulo: "C#"
    },

    {
        imagen: "./imagenes/skills/html5.svg",
        titulo: "HTML5"
    },

    {
        imagen: "./imagenes/skills/css.svg",
        titulo: "CSS"
    },

    {
        imagen: "./imagenes/skills/javascript.svg",
        titulo: "JS"
    },

    {
        imagen: "./imagenes/skills/mysql.svg",
        titulo: "MySQL"
    },

    {
        imagen: "./imagenes/skills/bootstrap.svg",
        titulo: "BOOSTRAP"
    },
    
    {
        imagen: "./imagenes/skills/react.svg",
        titulo: "REACT"
    },

];

export const cards_container=document.querySelector(".habilidades_cards");

const cardSkill= skills.map((cards)=>`
    <div class="cardss">
          <img src="${cards.imagen}" alt="${cards.titulo}">
          <h2>${cards.titulo}</h2>
    </div>

`).join('');

cards_container.innerHTML= cardSkill;
