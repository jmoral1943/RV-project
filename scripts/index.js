window.onscroll = function() {
  myFunction();
  pivotIndex();
};

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

const myFunction = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const halfwayPoint = document.getElementById("indexTitle");
const halfwayPointMeasurement = halfwayPoint.offsetTop;
const image = document.querySelector(".inner-index-right-image");
const text = document.querySelector(".inner-first");

const pivotIndex = () => {
  if (window.pageYOffset > halfwayPointMeasurement) {
    image.classList.add("rotate-left");
    text.classList.add("rotate-right");
  }
}