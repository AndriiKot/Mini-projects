﻿const selectButton = document.querySelector(".select-btn");
const dropDown = document.querySelector(".list-items");
const dropDownClassOpen = "open";

const handleSelectButtonClick = (element, class_name) => {
  element.classList.toggle(class_name);
};

selectButton.addEventListener(
  "click",
  handleSelectButtonClick.bind(
    handleSelectButtonClick,
    dropDown,
    dropDownClassOpen
  )
);
