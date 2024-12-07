"use strict";
// AOS ACTIVATION
AOS.init();
// RELOAD? TO TOP!
window.onload = function () {
  window.scrollTo(0, 0);
};
//---
// SCROLL MAGIC ---------------------------->
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const outro = document.querySelector(".outro");
const video2 = outro.querySelector("video");

const controller = new ScrollMagic.Controller();

let accelAmount1 = 0.01666666667;
let scrollPos1 = 0;
let delay1 = 0;

let accelAmount2 = 0.01666666667;
let scrollPos2 = 0;
let delay2 = 0;
// SCROLL MAGIC 1@1@1@1@1@1@1@1@1@1@1@1@1@1@1@1@1
//      Scene 1
let scene = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators({ name: "FRONTEND", ident: 600 }) // ⛳️
  .setPin(intro) // Stuck scroll
  .addTo(controller);

scene.on("update", (e) => {
  scrollPos1 = e.scrollPos / 1000;

  // console.log(scrollPos1);
  // console.log(e);
});

let lastUpdate1 = 0;
function animateVideo1(timestamp) {
  if (timestamp - lastUpdate1 >= 16) {
    delay1 += (scrollPos1 - delay1) * accelAmount1;
    if (Math.abs(video.currentTime - delay1) > 0.01) {
      video.currentTime = delay1;
    }
    lastUpdate1 = timestamp;
  }
  requestAnimationFrame(animateVideo1);
}
animateVideo1();

// SCROLL MAGIC 2@2@2@2@2@2@2@2@2@2@2@2@2@2@2@2@2
//      Scene 2
let scene2 = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: outro,
  triggerHook: 0,
})
  .addIndicators({ name: "BACKEND", indent: 300 }) // ⛳️
  .setPin(outro) // Stuck scroll
  .addTo(controller);

scene2.on("update", (e) => {
  scrollPos2 = (e.scrollPos - 5200) / 1000; // e.scrollPos from Scroll Magic

  // console.log(scrollPos2);
  // console.log(e);
});

let lastUpdate2 = 0;
function animateVideo2(timestamp) {
  if (timestamp - lastUpdate2 >= 16) {
    delay2 += (scrollPos2 - delay2) * accelAmount2;
    if (Math.abs(video2.currentTime - delay2) > 0.01) {
      video2.currentTime = delay2;
    }
    lastUpdate2 = timestamp;
  }
  requestAnimationFrame(animateVideo2);
}
animateVideo2();

// SCROLL EVENT TO DISPLAY
//      INTRO --->
const firstH1 = intro.querySelector(".firstH1");

window.addEventListener("scroll", () => {
  const One = window.scrollY;
  // console.log(scrolled);
  if (Math.ceil(One) > 500 && Math.ceil(One) < 1500) {
    firstH1.classList.add("scrolledFirst");
  } else {
    firstH1.classList.remove("scrolledFirst");
  }
});

// (fading interlude)

const interlude = document.querySelector(".interlude");

window.addEventListener("scroll", () => {
  const One = window.scrollY;
  console.log("window.scrollY: ", One);

  if (One > 4300 && One < 5000) {
    interlude.style.opacity = 1;
  } else {
    interlude.style.opacity = 0;
  }
});

const secondH1 = intro.querySelector(".secondH1");

window.addEventListener("scroll", () => {
  const One = window.scrollY;
  // console.log(scrolled);
  if (Math.ceil(One) > 2800 && Math.ceil(One) < 3400) {
    secondH1.classList.add("scrolledSecond");
  } else {
    secondH1.classList.remove("scrolledSecond");
  }
});
// SCROLL EVENT TO DISPLAY
//      OUTRO --->
const thirdH1 = outro.querySelector(".thirdH1");

window.addEventListener("scroll", () => {
  const One = window.scrollY;
  // console.log(scrolled);
  if (Math.ceil(One) > 5500 && Math.ceil(One) < 6100) {
    thirdH1.classList.add("scrolledSecond");
  } else {
    thirdH1.classList.remove("scrolledSecond");
  }
});
const fourthH1 = outro.querySelector(".fourthH1");

window.addEventListener("scroll", () => {
  const One = window.scrollY;
  // console.log(scrolled);
  if (Math.ceil(One) > 7400 && Math.ceil(One) < 8400) {
    fourthH1.classList.add("scrolledFirst");
  } else {
    fourthH1.classList.remove("scrolledFirst");
  }
});

// TABS DISPLAY
const tabs = document.getElementsByClassName("tab-content");
const interludeContainer = document.getElementsByClassName(
  "interlude-container"
)[0];

const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tab3 = document.getElementById("tab-3");
const tab4 = document.getElementById("tab-4");
const button1 = document.getElementsByClassName("button-1");
const button2 = document.getElementsByClassName("button-2");
const button3 = document.getElementsByClassName("button-3");
const button4 = document.getElementsByClassName("button-4");

// "taking out interludeContainer const in order to make and another effect sooner"
const arrayOfTabs = [tab1, tab2, tab3, tab4];

function openTab1() {
  tab1.classList.add("tab-active");
  tab2.classList.remove("tab-active");
  tab3.classList.remove("tab-active");
  tab4.classList.remove("tab-active");
  interludeContainer.style.filter = "blur(20px)";
  interludeContainer.style.transition = "1s";
  interludeContainer.style.scale = ".5";
}
function openTab2() {
  tab1.classList.remove("tab-active");
  tab2.classList.add("tab-active");
  tab3.classList.remove("tab-active");
  tab4.classList.remove("tab-active");
  interludeContainer.style.filter = "blur(20px)";
  interludeContainer.style.transition = "1s";
  interludeContainer.style.scale = ".5";
}
function openTab3() {
  tab1.classList.remove("tab-active");
  tab2.classList.remove("tab-active");
  tab3.classList.add("tab-active");
  tab4.classList.remove("tab-active");
  interludeContainer.style.filter = "blur(20px)";
  interludeContainer.style.transition = "1s";
  interludeContainer.style.scale = ".5";
}
function openTab4() {
  tab1.classList.remove("tab-active");
  tab2.classList.remove("tab-active");
  tab3.classList.remove("tab-active");
  tab4.classList.add("tab-active");
  interludeContainer.style.filter = "blur(20px)";
  interludeContainer.style.transition = "1s";
  interludeContainer.style.scale = ".5";
}
const exitBoxes = document.querySelectorAll("i");
for (let i = 0; i < exitBoxes.length; i++) {
  exitBoxes[i].addEventListener("click", () => {
    tab1.classList.remove("tab-active");
    tab2.classList.remove("tab-active");
    tab3.classList.remove("tab-active");
    tab4.classList.remove("tab-active");
    interludeContainer.style.filter = "blur(0)";
    interludeContainer.style.scale = "1";
  });
}
