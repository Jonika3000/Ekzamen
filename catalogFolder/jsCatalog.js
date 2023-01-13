document.addEventListener("DOMContentLoaded", EditButton);

function EditButton() {
    let tmp = document.getElementsByClassName("buttonSection2");
    for (let i = 0; i < tmp.length; i++) {
        tmp[i].addEventListener("click", (event) => AddStyle(event));
    }
}

function AddStyle(event) {
    let tmp = document.getElementsByClassName("buttonSection2");
    for (let i = 0; i < tmp.length; i++) {
        tmp[i].classList.remove("Section2Active");
    }
    event.target.classList.add("Section2Active");
}
