/*javascript kood on pärit leheküljelt: https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp*/

var slideIndex_5 = 1;
showSlides_5(slideIndex_5);

function plusSlides_5(n) {
  showSlides_5(slideIndex_5 += n);
}

function currentSlide_5(n) {
  showSlides_5(slideIndex_5 = n);
}

function showSlides_5(n) {
  var i_5;
  var slides_5 = document.getElementsByClassName("slaidid_5");
  var dots_5 = document.getElementsByClassName("täpp_5");
  if (n > slides_5.length) {slideIndex_5 = 1}
    if (n < 1) {slideIndex_5 = slides_5.length}
    for (i_5 = 0; i_5 < slides_5.length; i_5++) {
      slides_5[i_5].style.display = "none";
    }
    for (i_5 = 0; i_5 < dots_5.length; i_5++) {
      dots_5[i_5].className = dots_5[i_5].className.replace(" active", "");
    }
  slides_5[slideIndex_5-1].style.display = "block";
  dots_5[slideIndex_5-1].className += " active";
}