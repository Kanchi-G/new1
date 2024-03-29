let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
   slides.forEach((slide) => {
      slide.style.display = "none";
   });

   slides[index].style.display = "block";
}

function nextSlide() {
   currentIndex = (currentIndex + 1) % slides.length;
   showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

  
var countDownDate = new Date("March 4, 2024 15:37:25").getTime();
   // Update the count down every 1 second
   var x = setInterval(function() {
   
     // Get today's date and time
     var now = new Date().getTime();
       
     // Find the distance between now and the count down date
     var distance = countDownDate - now;
       
     // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
     // Output the result in an element with id="demo"
     document.getElementById("footer").innerHTML = days + "d " + hours + "h "
     + minutes + "m " + seconds + "s ";
       
     // If the count down is over, write some text 
     if (distance < 0) {
       clearInterval(x);
       document.getElementById("footer").innerHTML = "EXPIRED";
     }
   }, 1000);