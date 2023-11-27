// script.js
const quotes = [
    "Be the change that you wish to see in the world.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "An eye for an eye only ends up making the whole world blind.",
    // Add more quotes here
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.getElementById("quote");
    const gandhiImage = document.getElementById("gandhi-image");

    gandhiImage.addEventListener("click", function () {
        const randomQuote = getRandomQuote();
        console.log(randomQuote)
        quoteElement.textContent = `${randomQuote}`;
    });
});