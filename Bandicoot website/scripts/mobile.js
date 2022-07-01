// Close/Open mobile Nav
function openNav() {
     document.getElementById("mobile__menu").style.width = "100%";
}

function closeNav() {
     document.getElementById("mobile__menu").style.width = "0";
}


// Sticky navbar
window.addEventListener("scroll", function () {
     var header = document.querySelector("header");
     header.classList.toggle("sticky", window.scrollY > 0);


     if (window.scrollY > 0) {
          changeImg();
     } else {
          changeImgBack();
     }


     function changeImg() {
          document.getElementById("logo").src = "/svg/bandicootSticky.svg"

     }

     function changeImgBack() {
          document.getElementById("logo").src = "/svg/bandicootNormal.svg"
     }

})

