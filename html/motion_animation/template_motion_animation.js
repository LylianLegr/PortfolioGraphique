const overlay = document.getElementById("overlay");
const overlayFrame = document.getElementById("overlay_frame");
const overlayClose = document.getElementById("overlay_close");
const portfolioData = {

"Bannière Animée":[
{
title:"Bannière animée pour le site web (ancien)",
date:"2025",
desc:"",
img:"https://i.ytimg.com/vi/Ni6IOXgecms/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOjno4cipXsB2fNIL0eBTEM5QbGw",
link:"https://www.youtube.com/embed/Ni6IOXgecms?si=RC5MBGfuBUJSalhw"
},


],

"Tutoriels 2026":[
{
title:"Intro to Motion Graphics",
date:"2026",
desc:"",
img:"https://i9.ytimg.com/vi_webp/lj00UIg30pU/mqdefault.webp?sqp=CKjb6c4G&rs=AOn4CLAKSGuDSNBoAuzzh1jGwDkfXXCaow",
link:"https://www.youtube.com/embed/lj00UIg30pU?si=FSmLVoXFA8ayQ2d7"
},

{
title:"Welcome to After Effects",
date:"2026",
desc:"",
img:"https://i9.ytimg.com/vi/liA_IkaLlMQ/mqdefault.jpg?sqp=CNTd6c4G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGIgYihiMA8=&rs=AOn4CLDDNrJfrx0z72227MVMCYmqWmS76A",
link:"https://www.youtube.com/embed/liA_IkaLlMQ?si=IUPxQl9kQzF4zqLl"
},


],

"Capsules de sécurité Sérigraphie":[

{
title:"Degravage des chassis",
date:"2025",
desc:"",
img:"https://i.ytimg.com/an_webp/B8B-2kBh4M0/mqdefault_6s.webp?du=3000&sqp=COGEpM4G&rs=AOn4CLAyVCQEPpRvZOo-5g98smcV0czs4g",
link:"https://www.youtube.com/embed/B8B-2kBh4M0?si=gjCbwlri3xU0eKZw"
},
{
title:"Nettoyage des chassis",
date:"2025",
desc:"",
img:"https://i.ytimg.com/an_webp/3lt2b2iSkb0/mqdefault_6s.webp?du=3000&sqp=CMzho84G&rs=AOn4CLB1wC2RIVF8cpW0lyuHsog9dXl_FQ",
link:"https://www.youtube.com/embed/3lt2b2iSkb0?si=4RroGp5az2uVy92Q"
},
{
title:"Manipulation et Élimination Autosol 3000 + Diazo",
date:"2025",
desc:"",
img:"https://i.ytimg.com/an_webp/QtqU1nKRSEU/mqdefault_6s.webp?du=3000&sqp=CIPpo84G&rs=AOn4CLAIFi-wbMHSWCxRjG62lVIbflOVzg",
link:"https://www.youtube.com/embed/QtqU1nKRSEU?si=1UzERZKarqyi8oGf"
},
{
title:"Utilisation et rangement du nettoyeur haute pression",
date:"2025",
desc:"",
img:"https://i.ytimg.com/an_webp/ZGsq9bEBQkM/mqdefault_6s.webp?du=3000&sqp=CJCBpM4G&rs=AOn4CLDPPeJodRfZNf-zYjazfklo6if7Og",
link:"https://www.youtube.com/embed/ZGsq9bEBQkM?si=1UzERZKarqyi8oGf"
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