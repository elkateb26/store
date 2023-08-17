
const $ = (selector) => document.querySelector(selector);

const changeNavbarPosition = () => {
  const pageOffset = window.pageYOffset;
  const navbar = $('nav');
  const navbarHeight = navbar.offsetHeight;
  const navbarVisible = pageOffset > navbarHeight;

  if (navbarVisible) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.backgroundColor = '#fff';
    navbar.style.zIndex = '9';
  } else {
    navbar.style.position = 'absolute';
    navbar.style.top = '40px'
    navbar.style.backgroundColor = 'transparent';

  }
}
window.addEventListener('scroll', changeNavbarPosition);


// ashreey  
var header = document.getElementById("myDIV");
var categries = document.getElementsByClassName("cat");
for (var i = 0; i < categries.length; i++) {
  categries[i].addEventListener("click", function () {

    var current = document.getElementsByClassName("active-cat");
    current[0].className = current[0].className.replace("active-cat", "");
    this.className += "active-cat";
  });
}

/////////////////////////
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function toggleNavMenuVisibility() {
  $('.nav-items-modal').classList.toggle('inactive');
}

if ($('#nav-toggle')) {
  $('#nav-toggle').addEventListener('click', toggleNavMenuVisibility);
}
if ($('.close-icon')) {
  $('.close-icon').addEventListener('click', toggleNavMenuVisibility);
}
if ($('.nav-links')) {
  const links = document.querySelectorAll('.nav-links li');
  links.forEach(link => {
    link.addEventListener('click', toggleNavMenuVisibility);
  }
  );
}
var swiper = new Swiper(".mySwiper", {
  breakpoints: {

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});

