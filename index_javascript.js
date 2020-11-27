/*slaiderite javascripti kood on pärit leheküljelt: https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp.*/

/*slaider 1: kaubaladu*/
var slideIndex = 1;                /*slaidiloendur*/
showSlides(slideIndex);

function plusSlides(n) {           /*noolte jaoks*/
  showSlides(slideIndex += n);
}

function currentSlide(n) {         /*täppide jaoks*/
  showSlides(slideIndex = n);
}

function showSlides(n) {           /*slaider*/
  var i;
  var slides = document.getElementsByClassName("slaidid_1");
  var dots = document.getElementsByClassName("täpp_1");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*slaider 2: kitš, samasugune nagu eelmine*/
var slideIndex_2 = 1;
showSlides_2(slideIndex_2);

function plusSlides_2(n) {
  showSlides_2(slideIndex_2 += n);
}

function currentSlide_2(n) {
  showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
  var i_2;
  var slides_2 = document.getElementsByClassName("slaidid_2");
  var dots_2 = document.getElementsByClassName("täpp_2");
  if (n > slides_2.length) {slideIndex_2 = 1}
    if (n < 1) {slideIndex_2 = slides_2.length}
    for (i_2 = 0; i_2 < slides_2.length; i_2++) {
      slides_2[i_2].style.display = "none";
    }
    for (i_2 = 0; i_2 < dots_2.length; i_2++) {
      dots_2[i_2].className = dots_2[i_2].className.replace(" active", "");
    }
  slides_2[slideIndex_2-1].style.display = "block";
  dots_2[slideIndex_2-1].className += " active";
}
