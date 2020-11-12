function hide(id) {
    console.info("hide:" + id);
    // document.getElementById(id).style.display = "none";
    var el = document.getElementById(id);
    console.info("hide:" + id + el);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("elementul nu exista");
    }
}

function show(id){
    console.info("show:" + id);
    var el = document.getElementById(id);
    console.info("show:" + id + el);
    if (el) {
        el.style.display = '';
    } else {
        console.error("elementul nu exista");
    }
}

function showHome() {
    hide("skills")
    hide("projects")
    hide("languages")
    show("home")
    // document.getElementById('home').style.display = '';
}

function showSkills() {
    hide("home")
    hide("languages")
    hide("projects")
    show("skills")
    // document.getElementById('skills').style.display = '';
}

function showProjects() {
    hide("home")
    hide("languages")
    hide("skills")
    show("projects")
    // document.getElementById("projects").style.display = '';
}
function showLanguages() {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("skills").style.display = "none";
    show("languages")
    // document.getElementById("languages").style.display = '';
}

