/*javascript kood on pärit leheküljelt: https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp*/

var slideIndex_4 = 1;
showSlides_4(slideIndex_4);

function plusSlides_4(n) {
  showSlides_4(slideIndex_4 += n);
}

function currentSlide_4(n) {
  showSlides_4(slideIndex_4 = n);
}

function showSlides_4(n) {
  var i_4;
  var slides_4 = document.getElementsByClassName("slaidid_4");
  var dots_4 = document.getElementsByClassName("täpp_4");
  if (n > slides_4.length) {slideIndex_4 = 1}
    if (n < 1) {slideIndex_4 = slides_4.length}
    for (i_4 = 0; i_4 < slides_4.length; i_4++) {
      slides_4[i_4].style.display = "none";
    }
    for (i_4 = 0; i_4 < dots_4.length; i_4++) {
      dots_4[i_4].className = dots_4[i_4].className.replace(" active", "");
    }
  slides_4[slideIndex_4-1].style.display = "block";
  dots_4[slideIndex_4-1].className += " active";
}