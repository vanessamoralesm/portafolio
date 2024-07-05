

const headerBg = document.querySelector(".header");
const panelIsActive = document.querySelector(".panel");

export default function menuHamburguer(btnHamburguer, panel, menuLink) {
    document.addEventListener("click", (e) => {
        console.log("funciona");
        if (e.target.matches(btnHamburguer) || e.target.matches(`${btnHamburguer} *`)) {
            console.log("Hamburguesa clickeada");
            document.querySelector(panel).classList.toggle("is-active");
            document.querySelector(btnHamburguer).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)){
            document.querySelector(panel).classList.remove("is-active");
            document.querySelector(btnHamburguer).classList.remove("is-active");
        }
        if(panelIsActive.classList.contains("is-active")){
            headerBg.classList.remove("blur");
        }else{
            headerBg.classList.add("blur");
        }
    });
}

menuHamburguer(".hamburger", ".panel", ".menu-link");
