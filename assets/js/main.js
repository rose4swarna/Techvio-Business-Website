// loader start
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// go top button
const goTopBtn = document.getElementById("goTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    goTopBtn.style.bottom = "20px";
    goTopBtn.style.right = "8px";
  } else {
    goTopBtn.style.bottom = "33320px";
  }
});

// handle event bottom to top button
goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// navbar start
const showMenuIcon = document.getElementById("show-icon");
const hideMenuIcon = document.getElementById("hide-icon");
const navbar = document.querySelector("header nav ul");

function showMenu() {
  navbar.style.display = "block";
  navbar.style.top = "50px";
  showMenuIcon.classList.add("d-none");
  hideMenuIcon.classList.remove("d-none");
}

function hideMenu() {
  navbar.style.display = "none";
  hideMenuIcon.classList.add("d-none");
  showMenuIcon.classList.remove("d-none");
}

// typing animation
var typing = new Typed(".text", {
  strings: ["", "Freelancer", "Web Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

/*
// bottom to top
const goTopBtn = document.getElementById("bottomToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.classList.remove("d-none");
  } else {
    goTopBtn.classList.add("d-none");
  }
});
*/
// Progress Bar
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const targetWidth = progressBar.getAttribute("data-target");
          progressBar.style.width = targetWidth + "%";
          /* progressBar.textContent = targetWidth + "%";*/
          observer.unobserve(progressBar);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll(".progress-bar").forEach((bar) => {
    observer.observe(bar);
  });
});

// Portfolio button start //
/*
const tabBtns = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".item");

function openTab(tabName){
for(let btn of tabBtns){
btn.classList.remove("active");
}
event.target.classList.add("active");

for (let item of items){
  item.classList.add("hidden");
  item.classList.remove("block")
}
const activeItems = document.getElementsByClassName(tabName);
for(let activeItem of activeItems){
  activeItem.classList.add("block")
}
}
*/
const tabBtns = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".portfolio-item");
function openTab(tabName) {
  for (let btn of tabBtns) {
    btn.classList.remove("active");
  }
  event.target.classList.add("active");
  for (let item of items) {
    item.classList.add("d-none");
    item.classList.remove("d-block");
  }
  const activeItems = document.getElementsByClassName(tabName);
  for (let activeItem of activeItems) {
    activeItem.classList.add("d-block");
  }
  console.log(tabName);
}

// details js

var counted = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    counted = 1;
  }
});

// splider js

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  autoplay: true,
  interval: 3000,
  arrows: false,
});

splide.mount();
