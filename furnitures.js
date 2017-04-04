window.onload = showDivs, showDivss, showDivsss;
var slideIndex = 1;
var slideIndex1 = slideIndex;
var slideIndex2 = slideIndex;
showDivs(slideIndex);
showDivss(slideIndex1);
showDivsss(slideIndex2);
function plusDivs(n) {
    showDivs(slideIndex += n);
  
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block";
}  

/*window.onload = showDivss;
var slideIndex = 1;
showDivss(slideIndex);
function plusDivss(n) {
    showDivss(slideIndex += n);
} */
function plusDivss(n) {
    showDivss(slideIndex1 += n);
}
function showDivss(n) {
    var j;
    var y = document.getElementsByClassName("mySlidess");
    if (n > y.length) {slideIndex1 = 1} 
    if (n < 1) {slideIndex1 = y.length} ;
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none"; 
    }
    y[slideIndex1-1].style.display = "block";
}  
function plusDivsss(n) {
    showDivsss(slideIndex2 += n);
}
function showDivsss(n) {
    var k;
    var z = document.getElementsByClassName("mySlidesss");
    if (n > z.length) {slideIndex2 = 1} 
    if (n < 1) {slideIndex2 = z.length} ;
    for (k = 0; k < z.length; k++) {
        z[k].style.display = "none"; 
    }
    z[slideIndex2-1].style.display = "block";
}  


