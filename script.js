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


// mobile menu started
var menu = document.querySelector("nav h3");

var full = document.querySelector("#full-scr");
var closeBtn = document.querySelector(".close-btn");


var navimg = document.querySelector('nav img')

menu.addEventListener("click", () => {
  full.style.top = 0;
  navimg.style.opactiy = 0
});

closeBtn.addEventListener("click", () => {
  full.style.top = "-100%";
});

// mobile menu ended

const design = document.querySelector('#design')
const project = document.querySelector('#project')
const execution = document.querySelector('#execution')
const imagePart = document.querySelector("#image-part")

design.addEventListener('click', ()=>{
  console.log('clicked design')
  imagePart.src = "/assets/pageDesign/design1.webp"
  design.classList.add('active') 
  project.classList.remove('active') 
  execution.classList.remove('active') 
})

project.addEventListener('click', ()=>{
  console.log('clicked project')
  imagePart.src = "/assets/pageDesign/project1.webp"
  project.classList.add('active') 
  execution.classList.remove('active')
  design.classList.remove('active')
})

execution.addEventListener('click', ()=>{
  console.log('clicked execution')
  imagePart.src = "/assets/pageDesign/execution1.webp"
  execution.classList.add('active') 
  project.classList.remove('active') 
  design.classList.remove('active') 
})

imagePart.addEventListener('click', ()=>{
  console.log('clicked imagePart')

})