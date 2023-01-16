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
        tmp[i].classList.remove("Section2Active");
        if (tmp[i] == event.target) {
            editCatalog(i);
        }
    }
    event.target.classList.add("Section2Active");

}

function editCatalog(i) {
    if (i == 0) {
        addRouter();
    }
    if (i == 1) {
        addMedia();
    }
    if (i == 2) {
        addAKB();
    }
}

function addRouter() {
    document.getElementById("mainDiv3").remove();
    let div = document.createElement('div');
    div.className = "divSection3";
    div.id = "mainDiv3";
    div.innerHTML = `
    <div class="divSec3F">
                <p class="nameP">Роутер TP-LINK Archer C64</p>
                <p class="priceP">1599 ₴</p>
                <div class="moreButton"><p>Детальніше</p></div>
    </div>
    <div class="divSec3S">
                <div class="SectionImage Section3Image1"></div>
    </div>
    `;
    document.getElementsByClassName("card")[0].appendChild(div);

    
}

function addAKB() {
    document.getElementById("mainDiv3").remove();
    let div = document.createElement('div');
    div.className = "divSection3";
    div.id = "mainDiv3";
    div.innerHTML = `
    <div class="divSec3F">
                <p class="nameP">Блок безперебійного живлення Full Energy BBGP-1210 + акумулятор 18Ah</p>
                <p class="priceP">5999 ₴</p>
                <div class="moreButton"><p>Детальніше</p></div>
    </div>
    <div class="divSec3S">
                <div class="SectionImage Section3Image2"></div>
    </div>
    `;
    document.getElementsByClassName("card")[0].appendChild(div);
}

function addMedia() {
    document.getElementById("mainDiv3").remove();
    let div = document.createElement('div');
    div.className = "divSection3";
    div.id = "mainDiv3";
    div.innerHTML = `
    <div class="divSec3F">
                <p class="nameP">Медіаплеєр inext TV5 ultra</p>
                <p class="priceP">1599 ₴</p>
                <div class="moreButton"><p>Детальніше</p></div>
    </div>
    <div class="divSec3S">
                <div class="SectionImage Section3Image3"></div>
    </div>
    `;
    document.getElementsByClassName("card")[0].appendChild(div);
}
