const overlay = document.getElementById("overlay");
const overlayFrame = document.getElementById("overlay_frame");
const overlayClose = document.getElementById("overlay_close");
const portfolioData = {

"Photomontage":[

{
title:"En sortant du dentrifrice",
date:"2025",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/en-sortant-du-dentifrice/en-sortant-du-dentifrice.jpg",
link:"#"
},

{
title:"Condorcet en 2050",
date:"2025",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/condorcet-2050/condorcet-2050.jpg",
link:"#"
},

{
title:"Grimace",
date:"2025",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/grimace/grimace.jpg",
link:"#"
},

{
title:"Grimace",
date:"2025",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/fusion_visages/fusion_visages.jpg",
link:"#"
},

{
title:"Distributeur Texturé",
date:"2024",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/distributeur_texture/distributeur_texture.jpg",
link:"#"
},

{
title:"Tête de Joker",
date:"2024",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/tete_joker/tete_joker.jpg",
link:"#"
},

{
title:"Michel Galabru",
date:"2024",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/michel_galabru/michel_galabru.jpg",
link:"#"
},

{
title:"Chien Lion",
date:"2023",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/chien_lion/chien_lion.jpg",
link:"#"
},

{
title:"Typographie Afrique",
date:"2023",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/typo_afrique/typo_afrique.jpg",
link:"#"
},

{
title:"Roumanie",
date:"2023",
desc:"",
img:"../../assets/images/portfolio/retouche_photomontage/roumanie/roumanie.jpg",
link:"#"
},

],

};

/* ===============================
GENERATION
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
        link.addEventListener("click",(e)=>{
            e.preventDefault();
            overlayFrame.src = item.link;
            overlay.classList.add("active");
        });
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

overlay.addEventListener("click",(e)=>{
    if(e.target === overlay){
        overlay.classList.remove("active");
        overlayFrame.src="";
    }
});
document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        overlay.classList.remove("active");
        overlayFrame.src="";
    }
});

overlayClose.addEventListener("click",()=>{
    overlay.classList.remove("active");
    overlayFrame.src="";
});

initReveal();