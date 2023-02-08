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
function changeCity(number) {
    let all = document.getElementsByClassName("b-price-item");
    let old = document.getElementsByClassName("p-tarrif__price-old");
    let btnSec = document.getElementsByClassName("buttonSection2");
    switch (number) {
        case 1:
            all[0].textContent = '260 ₴';
            all[1].textContent = '99 ₴';
            old[0].textContent = '300₴/міс';
            all[2].textContent = '315 ₴';
            for (let i = 0; i < btnSec.length; i++) {
                btnSec[i].classList.add("visible");
                btnSec[i].classList.remove("offvisible");
            }
            all[3].textContent = '295 ₴';
            all[4].textContent = '99 ₴';
            old[1].textContent = '330₴/міс';
            all[5].textContent = '420 ₴';
            break;
        case 2:
            all[0].textContent = '330 ₴';
            all[1].textContent = '99 ₴';
            all[2].textContent = '420 ₴';
            btnSec[0].classList.add("offvisible");
            old[0].textContent = '320₴/міс';
            all[3].textContent = '330 ₴';
            all[4].textContent = '99 ₴';
            old[1].textContent = '320₴/міс';
            all[5].textContent = '420 ₴';
            break;
        case 3:
            for (let i = 0; i < btnSec.length; i++) {
                btnSec[i].classList.add("visible");
                btnSec[i].classList.remove("offvisible");
            }
            all[0].textContent = '270 ₴';
            all[1].textContent = '99 ₴';
            old[0].textContent = '340₴/міс';
            all[2].textContent = '370 ₴';
            all[3].textContent = '333 ₴';
            all[4].textContent = '99 ₴';
            old[1].textContent = '377₴/міс';
            all[5].textContent = '444 ₴';
            break;
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

function selectDrop($event, number) {
    let item = document.getElementsByClassName("dropItemSelect")[0];
    let btn = document.getElementsByClassName("btnDropContent")[0];
    btn.textContent = $event.textContent;
    item.classList.remove("dropItemSelect");
    item.classList.add("dropItem");
    $event.classList.remove("dropItem");
    $event.classList.add("dropItemSelect");
    closeDropDown();
    changeCity(number)
}