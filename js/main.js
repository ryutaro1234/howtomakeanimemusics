function nav_toggle(){
  document.getElementById("nav_toggle").classList.toggle("nav_toggle");
  document.getElementById("navigation").classList.toggle("navigation");
  document.getElementById("nav").classList.toggle("nav");
};

var Ease = {
  easeInOut: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; }
}
var duration = 500;
window.addEventListener('DOMContentLoaded', function () {
  var smoothScrollTriggers = [].slice.call(document.querySelectorAll('a[href^="#"]'));
  smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
    smoothScrollTrigger.addEventListener('click', function (e) {
      var href = smoothScrollTrigger.getAttribute('href');
      var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
      var targetElement = document.getElementById(href.replace('#', ''));
      if (targetElement) {
        e.preventDefault();
        e.stopPropagation();
        var targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - 115;
        var startTime = performance.now();
        var loop = function (nowTime) {
          var time = nowTime - startTime;
          var normalizedTime = time / duration;
          if (normalizedTime < 1) {
            window.scrollTo(0, currentPostion + ((targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)));
            requestAnimationFrame(loop);
          } else {
            window.scrollTo(0, targetPosition);
          }
        }
        requestAnimationFrame(loop);
      }
    });
  });
});

let fadeIn = document.getElementsByClassName('fade-in');
window.addEventListener("scroll", () => {
  for (let i = 0; i < fadeIn.length; i++){
    const rect = fadeIn[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      fadeIn[i].classList.add('active');
    }
  }
});

let scrollUp = document.getElementsByClassName('scroll-up');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollUp.length; i++){
    const rect = scrollUp[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollUp[i].classList.add('active');
    }
  }
});
let scrollUpL = document.getElementsByClassName('scroll-up-l');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollUpL.length; i++){
    const rect = scrollUpL[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollUpL[i].classList.add('active');
    }
  }
});
let scrollUpR = document.getElementsByClassName('scroll-up-r');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollUpR.length; i++){
    const rect = scrollUpR[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollUpR[i].classList.add('active');
    }
  }
});


let scrollSlideL = document.getElementsByClassName('scroll-slide-l');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollSlideL.length; i++){
    const rect = scrollSlideL[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollSlideL[i].classList.add('active');
    }
  }
});
let scrollSlideR = document.getElementsByClassName('scroll-slide-r');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollSlideR.length; i++){
    const rect = scrollSlideR[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollSlideR[i].classList.add('active');
    }
  }
});

let scrollDown = document.getElementsByClassName('scroll-down');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollDown.length; i++){
    const rect = scrollDown[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollDown[i].classList.add('active');
    }
  }
});

let scrollDownL = document.getElementsByClassName('scroll-down-l');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollDownL.length; i++){
    const rect = scrollDownL[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollDownL[i].classList.add('active');
    }
  }
});
let scrollDownR = document.getElementsByClassName('scroll-down-r');
 window.addEventListener("scroll", () => {
   for (let i = 0; i < scrollDownR.length; i++){
    const rect = scrollDownR[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollDownR[i].classList.add('active');
    }
  }
});
