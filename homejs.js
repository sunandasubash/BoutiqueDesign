carousel()
var myIndex = 0;
function carousel() {
  var i=0;
  var x = document.getElementsByName("mySlides");
  for (i=0; i < x.length ; i++) {
    x[i].classList.add('display-none') 
  }
  myIndex++;
  if (myIndex > x.length)
   {myIndex = 1;}   
  var y= 
  x[myIndex-1].classList.remove('display-none') 
  setTimeout(carousel, 2000); // Change image every 2 seconds
  console.log(x)
}