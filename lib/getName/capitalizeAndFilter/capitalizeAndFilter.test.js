const { capitalizeAndFilter } = require('./capitalizeAndFilter.js');

describe('capitalizeAndFilter function', () => {
  it('recieves an array of strings and capitalizes them and filters out any strings that start with the letter f', () => {
    const arrOfStrings = ['hello', 'to', 'the', 'friend'];

    const result = capitalizeAndFilter(arrOfStrings);

    expect(result).toEqual(['Hello', 'To', 'The']);
    
  });
});
