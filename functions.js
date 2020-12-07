let activePage = "skills";

function hide(id) {
    console.info("hide:" + id);
    const el = document.getElementById(id);
    console.info("hide:" + id + el);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("elementul nu exista");
    }
}


function hidePreviousPage() {
    hide(activePage);
    const link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`);
    link.classList.remove("active");
}

function showPage(pageId){
    hidePreviousPage();
    document.getElementById(pageId).style.display = '';
    const link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
    link.classList.add("active");
    activePage = pageId;
}

function initMenu(){
    document.addEventListener("click", e => {
        const link = e.target;
        if (link.matches("#top-menu-bar a")) {
            const id = link.getAttribute("data-page").toLowerCase();
            showPage(id);
        } 
    })
}

initMenu();

showPage(activePage);

function getHTMLSkills(skills) {
    return skills.map(skill => 
         `<li class="${skill.endorsments > 9 ? "favorite" : ""}">
        ${skill.name}<span>&middot; ${skill.endorsments}</span>
        </li>`
    ).join("");
}

function showSkills(skills){  
    const ul = document.querySelector("#skills ul");
    ul.innerHTML = getHTMLSkills(skills);
}

fetch("data/skills.json")
    .then(r => r.json())
    .then((allSkills) => {
        allSkills.sort((s1, s2) => s2.endorsments - s1.endorsments);

        showSkills(allSkills);
});

 
