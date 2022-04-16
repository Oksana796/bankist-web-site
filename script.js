"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////////////////////////
//Tab window
const tabContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", function (e) {
  let clicked = e.target.closest(".operations__tab");
  //closest it is for span el inside of tabs
  if (!clicked) return; //if click outside of tab buttons - stop f

  //remove active classes
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  //activate tab
  clicked.classList.add("operations__tab--active");

  //activate content
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});