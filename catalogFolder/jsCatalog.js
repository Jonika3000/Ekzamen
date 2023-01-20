document.addEventListener("DOMContentLoaded", editButton);

let routerArray = [
    {
        nameElem: "Роутер TP-LINK Archer C64",
        type: "Router",
        price: "1599",
        imageClass: "Section3Image1"
    },
    {
        nameElem: "Роутер TP-LINK Archer AX10",
        type: "Router",
        price: "2499",
        imageClass: "Section3Image4"
    }
]

let mediaArray = [
    {
        nameElem: "Медіаплеєр inext TV5",
        type: "Media",
        price: "1299",
        imageClass: "Section3Image3"
    },
    {
        nameElem: "Медіаплеєр inext TV5 ultra",
        type: "Media",
        price: "1599",
        imageClass: "Section3Image3"
    }
]
let BBGArray = [
    {
        nameElem: "Блок безперебійного живлення Full Energy BBGP-125 + акумулятор 7Ah",
        type: "BBG",
        price: "3999  ",
        imageClass: "Section3Image2"
    },
    {
        nameElem: "Блок безперебійного живлення Full Energy BBGP-1210 + акумулятор 18Ah",
        type: "BBG",
        price: "5999 ",
        imageClass: "Section3Image5"
    }
    
]




function editButton() {
    let tmp = document.getElementsByClassName("buttonSection2");
    for (let i = 0; i < tmp.length; i++) {
        tmp[i].addEventListener("click", (event) => addStyle(event));
    }
}

function addStyle(event) {
    let tmp = document.getElementsByClassName("buttonSection2");
    for (let i = 0; i < tmp.length; i++) {
        tmp[i].classList.remove("Section2Active");
        if (tmp[i] == event.target) {
            editCatalog(i);
        }
    }
    event.target.classList.add("Section2Active");

}

function editCatalog(i) {
    if (i == 0) {
        addElem( routerArray);
    }
    if (i == 1) {
        addElem(mediaArray);
    }
    if (i == 2) {
        addElem(BBGArray);
    }
}

function addElem(arrTmp) {
    for (let i = 0; i < arrTmp.length; i++) {
                document.getElementsByClassName("divSection3")[i].remove();
                let div = document.createElement('div');
                div.className = "divSection3";
                div.id = "mainDiv3";
                div.innerHTML = `
        <div class="divSec3F">
                    <p class="nameP">${arrTmp[i].nameElem}</p>
                    <p class="priceP">${arrTmp[i].price} ₴</p>
                    <div onclick="About()" class="moreButton"><p>Детальніше</p></div>
        </div>
        <div class="divSec3S">
                    <div class="SectionImage ${arrTmp[i].imageClass}"></div>
        </div>
        `;
                document.getElementsByClassName("card")[i].appendChild(div);
            }
}

function About(){
    window.location.href = 'moreRouterC64.html';
}

function Getfaq()
{
    window.location.href = 'FAQ/FAQ.html';
}
