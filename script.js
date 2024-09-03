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
var closeBtn = document.querySelector(".close-btn");

menu.addEventListener("click", () => {
  full.style.top = 0;
});

closeBtn.addEventListener("click", () => {
  full.style.top = "-100%";
});
