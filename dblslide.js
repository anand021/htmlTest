
var imageSlide = 1;
moveSlide(imageSlide);
 
 function showBlock(x) {
 	
 	moveSlide(imageSlide += x)
 }
 function moveSlide(x) {

 	 var a;
    var b = document.getElementsByClassName("slide-content");
    if (x > b.length) {imageSlide = 1} 
    if (x < 1) {imageSlide = b.length} ;
   
    for (a = 0; a < b.length; a++) {
        b[a].style.display = "block"; 
    }
    b[imageSlide-1].style.display = "none";

}  
