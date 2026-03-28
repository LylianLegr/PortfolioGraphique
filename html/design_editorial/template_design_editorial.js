const overlay = document.getElementById("overlay");
const overlayFrame = document.getElementById("overlay_frame");
const overlayClose = document.getElementById("overlay_close");
const portfolioData = {

"Livres & Catalogues":[
{
title:"Le petit journal de Roy Lichtenstein",
date:"2024",
desc:"",
img:"../../assets/images/portfolio/design_editorial/roy_lich/roy_lich.jpg",
link:"#"
},


],

"Couvertures (covers)":[
{
title:"Catalogue d'Icône automobiles - Bugatti",
date:"2025",
desc:"",
img:"../../assets/images/portfolio/design_editorial/bugatti/bugatti.jpg",
link:"#"
},

{
title:"Catalogue Artistique de Joan Miró",
date:"2025",
desc:"",
img:"../../assets/images/portfolio/design_editorial/miro/miro.jpg",
link:"#"
},

{
title:"Brutalism - Architecture Studio",
date:"2025",
desc:"",
img:"../../assets/images/portfolio/design_editorial/brutalism/brutalism.jpg",
link:"#"
},

{
title:"Pochette de Vinyl - Rare Americans",
date:"2024",
desc:"",
img:"../../assets/images/portfolio/design_editorial/vinyl_rare-americans/vinyl_rare-americans.jpg",
link:"#"
},

],

"Zines":[
{
title:"Le graphisme",
date:"2025",
desc:"",
img:"../../assets/images/portfolio/design_editorial/zine_graphisme/zine_graphisme.jpg",
link:"#"
},

{
title:"La typographie - Dive Into The Typographic Exploration",
date:"2025",
desc:"",
img:"../../assets/images/portfolio/design_editorial/zine_typo/zine_typo.jpg",
link:"#"
},

],

"Journaux":[
{
title:"Interview avec Natoo",
date:"2026",
desc:"",
img:"../../assets/images/portfolio/design_editorial/natoo/natoo.jpg",
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