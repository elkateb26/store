

$(function(){ 
    var navMain = $("#navbarNav");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});



var imgs = Array.from(document.querySelectorAll(".itme img"));
var boxContaier = document.getElementById("boxContaier");
var innerBox = document.getElementById("innerBox");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var crunetIndex = 0;

for (i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    boxContaier.style.display = "flex";
    crunetIndex = imgs.indexOf(e.target);
    var imgSrc = e.target.getAttribute("src");

    innerBox.style.backgroundImage = "url(" + imgSrc + ")";
  });
}
close.addEventListener("click", closeSlide);

function closeSlide() {
  boxContaier.style.display = "none";
}

next.addEventListener("click", nextSlide);

function nextSlide() {
  crunetIndex++;
  if (crunetIndex == imgs.length) {
    crunetIndex = 0;
  }

  var imgSrc = imgs[crunetIndex].getAttribute("src");
  innerBox.style.backgroundImage = "url(" + imgSrc + ")";
}

prev.addEventListener("click", prevSlide);

function prevSlide() {
  crunetIndex--;

  if (crunetIndex < 0) {
    crunetIndex = imgs.length - 1;
  }

  var imgSrc = imgs[crunetIndex].getAttribute("src");
  innerBox.style.backgroundImage = "url(" + imgSrc + ")";
}

document.addEventListener("keyup", function (e) {
  if (e.code == "ArrowRight") {
    nextSlide();
  } else if (e.code == "ArrowLeft") {
    prevSlide();
  } else if (e.code == "Escape") {
    closeSlide();
  }
});
