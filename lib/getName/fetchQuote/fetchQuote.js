const fetch = require('node-fetch');

const fetchQuote = async() => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const data = await res.json();
  const result = {
    name: data[0].character, 
    text: data[0].quote, 
    image: data[0].image
  }

  return result;
};

module.exports = { fetchQuote };
