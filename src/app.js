/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(cardTitle, cardBody, cardText) {
  //write your code hereconso le.log("Hello Rigo from the console!");
  const createCard = () => {
    const row = document.querySelector(".row");
    card.className = "card-col4";

    const card = document.createElement(".div");
    card.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = "card-title";

    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = "Este es el contenido de mi carta";

    const button = document.createElement("a");
    button.className = "btn-btn-prymary";
    button.textContent = "leer mas";
    button.href = "#";
  };
};
