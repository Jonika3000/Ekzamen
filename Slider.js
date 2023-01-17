let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function picWidth() {
    win = $(document).width();
    width = String(Math.round(((win - 960) / 2) + 960));

    $('.pic-container').css({ 'width': width });
}
$(window).resize(picWidth);
picWidth();

window.onresize = (() => {
    var imgWidth = Math.min(
        window.innerWidth,
        window.innerHeight
    );
    document.getElementById('photo').innerHTML = '';
    for (var i = 0; true; i++) {
        if (
            (document.querySelectorAll('img').length * imgWidth) <
            (window.innerWidth * 2)) {
            var img = new Image();
            img.src = "https://picsum.photos/200"
            document.getElementById('photo').append(img);
            document.getElementById('photo').append(img);
            document.getElementById('photo').animation =
                `move ${document.querySelectorAll('img').length / 6}s linear infinite`
        } else {
            return -1;
        }
    }
});

function Getfaq()
{
    window.location.href = 'FAQ/FAQ.html';
}