const fetch = require('node-fetch');

const fetchQuote = async() => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const data = await res.json();
  const randomNumber = Math.floor(Math.random() * Math.floor(data.length));
  const result = {
    name: data[randomNumber].character, 
    text: data[randomNumber].quote, 
    image: data[randomNumber].image
  };

  return result;
};

module.exports = { fetchQuote };
