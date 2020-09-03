const capitalizeAndFilter = (arrOfStrings) => {
  const noFWords = arrOfStrings.filter(string => (string.charAt(0) !== 'f'));

  const upperCase = noFWords.map(string => string.charAt(0).toUpperCase() + string.slice(1));

  return upperCase;
};

module.exports = { capitalizeAndFilter };
