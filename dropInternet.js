// Drop Js Code
var showDropDown = false;
function checkDropDown() {
    if (showDropDown == false) {
        openDropDown();
        showDropDown = true;
    }
    else {
        closeDropDown();
        showDropDown = false;
    }
}
function openDropDown() {
    document.getElementsByClassName("dropArrow")[0].classList.add("turn180");
    document.getElementsByClassName("dropCatalog")[0].classList.add("visible");
    document.getElementsByClassName("dropCatalog")[0].classList.remove("offvisible");
}
function closeDropDown() {
    document.getElementsByClassName("dropArrow")[0].classList.remove("turn180");
    document.getElementsByClassName("dropCatalog")[0].classList.add("offvisible");
    document.getElementsByClassName("dropCatalog")[0].classList.remove("visible");
}

function selectDrop($event) {
    let item = document.getElementsByClassName("dropItemSelect")[0];
    let btn = document.getElementsByClassName("btnDropContent")[0];
    btn.textContent = $event.textContent;
    item.classList.remove("dropItemSelect");
    item.classList.add("dropItem");
    $event.classList.remove("dropItem");
    $event.classList.add("dropItemSelect");
    closeDropDown();
}