let quote = document.querySelector(".quote");
let btn = document.querySelector(".button");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    person: "Alan Kay",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    person: "Charles R. Swindoll",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    person: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "It always seems impossible until it’s done.",
    person: "Nelson Mandela",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    person: "Sam Levenson",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    person: "Henry Ford",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote: "Believe you can and you’re halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    person: "Dalai Lama",
  },
  {
    quote:
      "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    person: "Roy T. Bennett",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    person: "Albert Einstein",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot; but make it hot by striking.",
    person: "William Butler Yeats",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    person: "Mark Twain",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    person: "George Addair",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    person: "Henry David Thoreau",
  },
  { quote: "Dream big and dare to fail.", person: "Norman Vaughan" },
  {
    quote: "Do what you can, with what you have, where you are.",
    person: "Theodore Roosevelt",
  },
];


btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})