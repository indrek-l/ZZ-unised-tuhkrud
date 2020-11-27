/*slaideri javascripti kood on pärit leheküljelt: https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp*/

/*slaider 3: esialgsed näited*/
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

/*slaider 4: kehvad kujutised*/
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

/*slaider 5: abstraktsionistid*/
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