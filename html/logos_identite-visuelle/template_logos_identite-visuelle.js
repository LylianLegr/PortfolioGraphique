const overlay = document.getElementById("overlay");
const overlayFrame = document.getElementById("overlay_frame");
const overlayClose = document.getElementById("overlay_close");
const portfolioData = {

"Créations de logos":[
{
title:"Cocotte",
date:"",
desc:"",
img:"../../assets/images/portfolio/logos_identite-visuelle/cocotte/cocotte_logo.svg",
link:"../../html/logos_identite-visuelle/cocotte.html"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
],

"Refonte/Redesign de logos":[
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
],

"Identité visuelle complète":[
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
{
title:"Lorem ipsum",
date:"",
desc:"",
img:"https://placehold.co/300x300",
link:"#"
},
],

};

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

function createCategory(categoryName, items){

    const title = document.createElement("h3");
    title.textContent = categoryName;
    title.classList.add("reveal");
    container.appendChild(title);

    const itemsByYear = {};

    items.forEach(item => {
        let year = "Sans date";

        if(item.date){
            const match = item.date.match(/\d{4}/);
            if(match) year = match[0];
        }

        if(!itemsByYear[year]){
            itemsByYear[year] = [];
        }

        itemsByYear[year].push(item);
    });

    const sortedYears = Object.keys(itemsByYear).sort((a,b)=>b-a);

    sortedYears.forEach(year => {

        const yearTitle = document.createElement("h4");
        yearTitle.textContent = year;
        yearTitle.classList.add("reveal");
        container.appendChild(yearTitle);

        const grid = document.createElement("div");
        grid.className = "portfolio_grid";

        itemsByYear[year].forEach((item,index)=>{
            const clone = template.content.cloneNode(true);
            populateItem(clone, item, index);
            grid.appendChild(clone);
        });

        container.appendChild(grid);
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