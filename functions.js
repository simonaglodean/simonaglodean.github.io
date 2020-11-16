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

function hideAllPages(){
    var pages = document.querySelectorAll(".page");
    //for(initializare; conditie; post execute)
    for(var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var id = page.id;
        console.info("i=", i, id, page);
        hide(id);
    }

}

function showPage(pageId){
    hideAllPages();
    document.getElementById(pageId).style.display = '';
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

showPage("skills");

var skills = ["HTML", "CSS", "Javascript"];


// to do: add "favorite" skill
var ul = document.querySelector("#skills ul");
ul.innerHTML = "<li>" + skills[0] + "</li>" +
               "<li>" + skills[1] + "</li>" +
               "<li>" + skills[2] + "</li>";
