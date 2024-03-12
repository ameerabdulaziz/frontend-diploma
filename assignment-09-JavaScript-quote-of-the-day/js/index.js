var quotes = [
    {
        quote: "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "Nelson Mandela",
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch",
    },
    {
        quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        author: "William W. Purkey",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    }
]
var previousQuoteIndex = -1;

// Get random integer between minimum and maximum values
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get html element by id
function getElementByID(id) {
    return document.getElementById(id)
}

// Set inner html div content
function setInnerHTML(div, content) {
    div.innerHTML = content
}

// Set quote div content quote text and author
function setQuoteContent(quote) {
    var quoteDiv = getElementByID('quote')
    var authorDiv = getElementByID('author')
    setInnerHTML(quoteDiv, `"${quote.quote}"`)
    setInnerHTML(authorDiv, `--${quote.author}`)
}

// Show quote info
function showQuote() {
    var min = 0;
    var randNumber;
    // Loop  until check if the random number you get doesn't have the same value of the previous quote index
    do {
        randNumber = getRandomInt(min, quotes.length -1)
    } while (randNumber === previousQuoteIndex)
    previousQuoteIndex = randNumber
    setQuoteContent(quotes[randNumber])
}