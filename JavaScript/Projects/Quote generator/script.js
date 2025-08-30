let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let btnGenerate = document.querySelector('#btnGenerate');
let api = 'https://dummyjson.com/quotes';
let quotes = [];

btnGenerate.addEventListener('click', setQuote);

function setQuote() {
  if (quotes.length === 0) {
    alert('Quotes are still loading. Please wait.');
    return;
  }
  let index = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[index].quote;
  author.innerHTML = quotes[index].author;
}

async function getQuotes() {
  try {
    let response = await fetch(api);
    let data = await response.json();
    quotes = data.quotes;
    console.log('Quotes loaded:', data);
  } catch (error) {
    console.error('Failed to fetch quotes:', error);
    alert('Failed to load quotes.');
  }
}

getQuotes();
