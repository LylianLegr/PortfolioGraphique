/* ===============================
PORTFOLIO DATA
=============================== */

const portfolioData = {

"Design Graphique":[
{
title:"Logos & Identités Visuelles",
date:"2023–2026",
desc:"",
img:"../assets/images/categories_portfolio/logo_identite_visuelle.jpg",
link:"../html/logos_identite-visuelle/logos_identite-visuelle.html"
},
{
title:"Design Éditorial",
date:"202X–202X",
desc:"",
img:"../assets/images/categories_portfolio/print_et_edition.jpg",
link:"../html/design_editorial/design_editorial.html"
},
{
title:"Communication & Publicitaire",
date:"202X–202X",
desc:"",
img:"../assets/images/categories_portfolio/communication_publicitaire.jpg",
link:"../html/communication_pub/communication_pub.html"
},
{
title:"Packaging & Product Design",
date:"2025",
desc:"",
img:"../assets/images/categories_portfolio/packaging.jpg",
link:"#"
},
{
title:"Typographie & Lettering",
date:"2025–2026",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Motion Design & Animation",
date:"2025–2026",
desc:"",
img:"../assets/images/categories_portfolio/animation_motiondesign.jpg",
link:"#"
},
{
title:"Signalétique & Design d’environnement",
date:"XXX",
desc:"",
img:"../assets/images/categories_portfolio/signaletique_environnement.jpg",
link:"#"
},
{
title:"Web & Digital Design",
date:"2025–2026",
desc:"",
img:"../assets/images/categories_portfolio/web_digital_design.jpg",
link:"#"
}
],

"Images numériques & 3D":[
{
title:"Retouche d'images & Photomontage",
date:"202X",
desc:"",
img:"../assets/images/categories_portfolio/retouches_compositing.jpg",
link:"#"
},
{
title:"Illustration",
date:"202X–202X",
desc:"",
img:"../assets/images/categories_portfolio/illustration.jpg",
link:"#"
},
{
title:"Pixel Art",
date:"202X–202X",
desc:"",
img:"../assets/images/categories_portfolio/pixelart.jpg",
link:"#"
},
{
title:"Création 3D",
date:"2026",
desc:"",
img:"../assets/images/categories_portfolio/creation3d.jpg",
link:"#"
}
],

"Arts traditionnels":[
{
title:"Dessin",
date:"202X",
desc:"",
img:"../assets/images/categories_portfolio/dessin.jpg",
link:"#"
},
{
title:"Aquarelle",
date:"2026",
desc:"",
img:"../assets/images/categories_portfolio/aquarelle.jpg",
link:"#"
},
{
title:"Gravure & Techniques d'impression",
date:"2026",
desc:"",
img:"../assets/images/categories_portfolio/gravures_techniques_impression.jpg",
link:"#"
},
{
title:"Sérigraphie",
date:"2026",
desc:"",
img:"../assets/images/categories_portfolio/serigraphie.jpg",
link:"#"
},
{
title:"Collage & Assemblage",
date:"2026",
desc:"",
img:"../assets/images/categories_portfolio/collage_assemblage.jpg",
link:"#"
},
{
title:"Édition d'art",
date:"2026",
desc:"",
img:"../assets/images/categories_portfolio/editionart.jpg",
link:"#"
},
{
title:"Calligraphie & Typographie manuelle",
date:"2026",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
],






"Photographie":[
{
title:"Paysage Naturel",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

{
title:"Paysage Urbain",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

{
title:"Photographie Animalière",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

{
title:"Macrophotographie",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

{
title:"Nature Morte",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

{
title:"Architecture",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

{
title:"Abstrait & Conceptuel",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

{
title:"Sténopé",
date:"202X",
desc:"",
img:"../assets/images/categories_portfolio/stenope.jpg",
link:"#"
}
],

"Recherche & Processus":[
{
title:"Sketches & Croquis",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

],

"bleozeifo":[
{
title:"Sketches & Croquis",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

],

"test":[
{
title:"Sketches & Croquis",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

],

"blabla":[
{
title:"Sketches & Croquis",
date:"202X",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},

]

};

/* ===============================
GENERATION PORTFOLIO
=============================== */

function showAlert(){
    const alertBox = document.getElementById("alert");
    alertBox.classList.add("show");
    setTimeout(()=>{
        alertBox.classList.remove("show");
    },2500);
}

const container = document.getElementById("portfolio");
const template = document.getElementById("portfolio_item");

for(const category in portfolioData){
    createCategory(category, portfolioData[category]);
}

function createCategory(categoryName, items) {
    const title = document.createElement("h3");
    title.textContent = categoryName;
    title.classList.add("reveal", "collapsible-title");
    container.appendChild(title);

    const contentContainer = document.createElement("div");
    contentContainer.className = "category-content";
    container.appendChild(contentContainer);

    const grid = document.createElement("div");
    grid.className = "portfolio_grid";

    items.forEach((item, index) => {
        const clone = template.content.cloneNode(true);
        populateItem(clone, item, index);
        grid.appendChild(clone);
    });

    contentContainer.appendChild(grid);
    title.addEventListener("click", () => {
    const isCollapsed = contentContainer.classList.toggle("collapsed");
    title.classList.toggle("collapsed");
    const items = contentContainer.querySelectorAll(".reveal");
    items.forEach(el => {
        el.classList.remove("visible");
    });
    if (!isCollapsed) {
        items.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add("visible");
            }, i * 80);
        });
    }
});
}

function populateItem(clone, item, index){
    const article = clone.querySelector("article");
    const link    = clone.querySelector("a");
    const img     = clone.querySelector("img");
    const title   = clone.querySelector(".title");
    const date    = clone.querySelector(".date");
    const desc    = clone.querySelector("p");

    article.classList.add("reveal");
    article.style.transitionDelay = `${index * 0.08}s`;

    if(item.link === "#"){
        link.href = "#";
        article.classList.add("indisponible");
        link.addEventListener("click",(e)=>{
            e.preventDefault();
            showAlert();
        });
    }else{
        link.href = item.link;
    }
    img.src = item.img;
    img.alt = item.title;
    title.textContent = item.title;
    date.textContent  = item.date;
    desc.textContent  = item.desc;

}

function initReveal(){
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }
        });
    },{
        threshold:0.15
    });
    document
        .querySelectorAll(".reveal")
        .forEach(el => observer.observe(el));
}

initReveal();