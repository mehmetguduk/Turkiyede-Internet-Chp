let slideIndexTax = 1;
let slideIndexEducation = 1;
showTaxSlides(slideIndexTax);
showEducationSlides(slideIndexEducation);

function plusSlides(element, n) {
    if (element.className == "prev-tax" || element.className == "next-tax") {
        showTaxSlides(slideIndexTax += n);
    }
    else if (element.className == "prev-education" || element.className == "next-education") {
        showEducationSlides(slideIndexEducation += n);
    }
}

function currentSlide(element, n) {
    if (element.className == "dot-tax" || element.className == "dot-tax") {
        showTaxSlides(slideIndexTax = n);
    }
    else if (element.className == "dot-education" || element.className == "dot-education") {
        showEducationSlides(slideIndexEducation = n);
    }
}

function showTaxSlides(n) {
    let i;
    let slides;
    let dots;
    slides = document.querySelectorAll("div.slide-tax");
    dots = document.querySelectorAll("span.dot-tax");
    if (n > slides.length) { slideIndexTax = 1 }
    if (n < 1) { slideIndexTax = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexTax - 1].style.display = "block";
    dots[slideIndexTax - 1].className += " active";
}

function showEducationSlides(n) {
    let i;
    let slides;
    let dots;
    slides = document.querySelectorAll("div.slide-education");
    dots = document.querySelectorAll("span.dot-education");
    if (n > slides.length) { slideIndexEducation = 1 }
    if (n < 1) { slideIndexEducation = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexEducation - 1].style.display = "block";
    dots[slideIndexEducation - 1].className += " active";
}