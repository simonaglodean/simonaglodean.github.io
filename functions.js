var activePage = "skills";

function hide(id) {
    console.info("hide:" + id);
    var el = document.getElementById(id);
    console.info("hide:" + id + el);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("elementul nu exista");
    }
}


function hidePreviousPage() {
    hide(activePage);
    var link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`);
    link.classList.remove("active");
}

function showPage(pageId){
    hidePreviousPage();
    document.getElementById(pageId).style.display = '';
    var link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
    link.classList.add("active");
    activePage = pageId;
}

function initMenu(){
    document.addEventListener("click", function(e){
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.getAttribute("data-page").toLowerCase();
            showPage(id);
        } 
    })
}

initMenu();

showPage(activePage);

function showSkills(skills){
    var skillsLi = skills.map(function(skill){
        var endorsments = ` <span>&middot; ${skill.endorsments}</span>`;
        return "<li>" + skill.name + endorsments + "</li>";
    });
    
    // to do: add "favorite" skill
    var ul = document.querySelector("#skills ul");
    ul.innerHTML = skillsLi.join("");
}

fetch("data/skills.json").then(function(r){
    return r.json();
}).then(function(allSkills){
    showSkills(allSkills);
});

 
