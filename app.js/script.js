"use strict";

const nav = document.querySelector(".hero-nav");
const burger = document.querySelector(".hero-burger");
const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line");
const navLinks = document.querySelectorAll(".hero-nav-links");

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

window.addEventListener("scroll", () => {
  if (window.scrollY > 5 && mediaQueryDesktop.matches === true) {
    nav.classList.add("navBackground");
    console.log("It is working");
  } else {
    nav.classList.remove("navBackground");
  }
});
