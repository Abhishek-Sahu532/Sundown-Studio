const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3Animation() {
  const elemC = document.querySelector(".elemContainer");
  const fixedImage = document.querySelector("#fixed-image");
  // console.log(fixedImage)
  elemC.addEventListener("mouseenter", () => {
    fixedImage.style.display = "block";
  });

  elemC.addEventListener("mouseleave", () => {
    fixedImage.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  // console.log(elems)
  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var image = e.getAttribute("data-image");
      // console.log(image);
      fixedImage.style.backgroundImage = `url(${image})`;
    });
  });
}

page3Animation();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}

swiperAnimation();

var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var navimg = document.querySelector("nav img");
var flag = 0;
console.log(navimg);
menu.addEventListener("click", () => {
  if (flag == 0) {
    full.style.top = 0;
    navimg.style.opactiy = 0;
    menu.textContent = "Close";
    flag = 1;
    console.log(0);
  } else {
    full.style.top = "-100%";
    navimg.style.opactiy = 1;
    menu.textContent = "Menu";
    flag = 0;
    console.log(1);
  }
});
