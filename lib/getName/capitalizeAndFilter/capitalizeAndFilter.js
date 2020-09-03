const capitalizeAndFilter = (arrOfStrings) => {
  const capitalized = [];
  for(let i = 0; i < arrOfStrings.length; i++) {
    const currentString = arrOfStrings[i];
    (currentString.charAt(0) !== 'f') && capitalized.push(currentString.charAt(0).toUpperCase() + currentString.slice(1));
  }

  return capitalized;
};

module.exports = { capitalizeAndFilter };
