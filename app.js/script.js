"use strict";

const nav = document.querySelector(".hero-nav");
const burger = document.querySelector(".hero-burger");
const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line");
const navLinks = document.querySelectorAll(".hero-nav-links");
const projectBoxes = document.querySelectorAll(".projects-boxes");
const bgGradientColor = document.querySelector(".bg-gradient-color");
const bgOverlayImg = document.querySelector(".bg-overlay-img");
const bgOverlayBox = document.querySelector(".bg-overlay-image-box");
const overlayClose = document.querySelector(".overlay-close");
const projectBoxOverlay = document.querySelector(".project-bg-overlay");

// Media Queries
const mediaQueryDesktop = window.matchMedia("(min-width: 1280px)");

// Show Nav Menu Function
const showNavMenu = () => {
  nav.classList.toggle("showNav");
  topLine.classList.toggle("rotateTop");
  bottomLine.classList.toggle("rotateBottom");
};

// Show Nav Menu after Burger Click
burger.addEventListener("click", () => {
  showNavMenu();
});

// Close Nav Menu after Clicking Links
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    if (nav.classList.contains("showNav")) showNavMenu();
  });
});

// Nav BG Change after scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 5 && mediaQueryDesktop.matches === true) {
    nav.classList.add("navBackground");
  } else {
    nav.classList.remove("navBackground");
  }
});

// Open Projects Modal Overlay BG
projectBoxes.forEach((pb) => {
  pb.addEventListener("click", () => {
    projectBoxOverlay.classList.add("moveRight");
  });
});

// Close Projects Modal Overlay BG
overlayClose.addEventListener("click", () => {
  projectBoxOverlay.classList.remove("moveRight");
});

// projectBoxes.forEach((pb) => {
//   pb.addEventListener("mouseenter", (e) => {
//     // console.log(e.target.children[0].src);
//     let currentImage = e.target.children[0].src;
//     const newImageSrc = currentImage;
//     bgOverlayImg.src = newImageSrc;
//   });
// });
