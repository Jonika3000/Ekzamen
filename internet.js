document.addEventListener("DOMContentLoaded", editButton);

function editButton() {
    let tmp = document.getElementsByClassName("buttonSection2");
    for (let i = 0; i < tmp.length; i++) {
        tmp[i].addEventListener("click", (event) => addStyle(event));
    }
}

function addStyle(event) {
    let tmp = document.getElementsByClassName("buttonSection2");


    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] != event.target) {
            tmp[i].classList.remove("Section2Active");
        }
        else if (!tmp[i].classList.contains("Section2Active")) {
            event.target.classList.add("Section2Active");
            checkContain();
        }
    }


}
function checkContain() {
    let vis = document.getElementsByClassName("p-content");
    for (let i = 0; i < vis.length; i++) {
        if (vis[i].classList.contains("visible")) {
            vis[i].classList.remove("visible");
            vis[i].classList.add("offvisible");
        }
        else {
            vis[i].classList.add("visible");
            vis[i].classList.remove("offvisible");
        }
    }
}

