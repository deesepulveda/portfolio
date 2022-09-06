"use strict";

const nav = document.querySelector(".hero-nav");
const burger = document.querySelector(".hero-burger");
const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line");
const navLinks = document.querySelectorAll(".hero-nav-links");

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
    showNavMenu();
  });
});
