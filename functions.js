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
        if (e.target.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
        
    })
}

initMenu();