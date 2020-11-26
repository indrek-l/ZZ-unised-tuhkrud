/*javascript kood on pärit leheküljelt: https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp*/

var slideIndex_3 = 1;
showSlides_3(slideIndex_3);

function plusSlides_3(n) {
  showSlides_3(slideIndex_3 += n);
}

function currentSlide_3(n) {
  showSlides_3(slideIndex_3 = n);
}

function showSlides_3(n) {
  var i_3;
  var slides_3 = document.getElementsByClassName("slaidid_3");
  var dots_3 = document.getElementsByClassName("täpp_3");
  if (n > slides_3.length) {slideIndex_3 = 1}
    if (n < 1) {slideIndex_3 = slides_3.length}
    for (i_3 = 0; i_3 < slides_3.length; i_3++) {
      slides_3[i_3].style.display = "none";
    }
    for (i_3 = 0; i_3 < dots_3.length; i_3++) {
      dots_3[i_3].className = dots_3[i_3].className.replace(" active", "");
    }
  slides_3[slideIndex_3-1].style.display = "block";
  dots_3[slideIndex_3-1].className += " active";
}