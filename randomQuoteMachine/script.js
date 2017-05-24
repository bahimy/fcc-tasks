"use strict"

var quotes = [
    ['Open the pod bay doors, HAL.', '2001: A Space Odyssey'],
    ['The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.', 'Edsgar Dijkstra'],
    ['Maybe this world is another planet\'s Hell.', 'Aldous Huxley'],
    ['All right, Mr. DeMille, I\'m ready for my close-up.', 'Sunset Blvd.'],
    ['One morning I shot an elephant in my pajamas. How he got in my pajamas, I don\'t know.', 'Animal Crackers'],
    ["What we've got here is failure to communicate.", "Cool Hand Luke"],
    ["Everybody pities the weak; jealousy you have to earn.", "Arnold Schwarzenegger"],
    ["Carpe diem. Seize the day, boys. Make your lives extraordinary.", "Dead Poets Society"],
    ["A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.", "The Silence of the Lambs"],
    ["The full use of your powers along lines of excellence.", "Definition of 'happiness' by J"],
    ["When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion.", "Robert Pirsig"]
]

var quoteTextContainer = document.querySelector('.c-card__quote-text')
var quoteOrigin = document.querySelector('.c-card__quote-origin')
var button = document.querySelector('.c-card__quote-update')
var butTweet = document.querySelector('#c-button-tweet')

var updateCard = function() {
    var randomIndex = Math.floor(Math.random() * quotes.length)
    quoteTextContainer.textContent = quotes[randomIndex][0]
    quoteOrigin.textContent = quotes[randomIndex][1]
    butTweet.setAttribute('href',
        "https://twitter.com/intent/tweet?text=\"" +
        quotes[randomIndex][0].replace(/;/g, "%3B") + "\" " +
        quotes[randomIndex][1]
    )
}
window.onload = updateCard
button.addEventListener("click", updateCard)
