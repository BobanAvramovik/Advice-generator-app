const btn = document.querySelector(".dice-box");
const quoteText = document.getElementById("quote");
const quoteNumber = document.getElementById("number");

const quoteGenerator = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      quoteNumber.innerHTML = `#${data.slip.id}`;
      quoteText.innerHTML = `"${data.slip.advice}"`;
    });
};

btn.addEventListener("click", quoteGenerator);
window.addEventListener("load", quoteGenerator);
