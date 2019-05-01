window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function formValidate() {
  var valid = document.getElementById("name");
  if( valid == "") {
    valid.style.border = "red"; 
  }
}

var images = document.getElementsByClassName("sliders");

function sliders () {
  images.style.animation = "moveImages 20s";
}