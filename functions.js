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
}

function showPage(pageId){
    hidePreviousPage();
    document.getElementById(pageId).style.display = '';
    activePage = pageId;
}

function initMenu(){
    document.addEventListener("click", function(e){
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        } 
    })
}

initMenu();

showPage(activePage);

var skills = [
    "HTML",
    "CSS", 
    "Javascript"
];


var skillsLi = skills.map(function(skill){
    return "<li>" + skill + "</li>";
});

// to do: add "favorite" skill
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsLi.join("");
