const { copyAndPush } = require('./copyAndPush.js');

describe('copyAndPush Function', () => {
  it('receives an array and items, returns a new array with new items pushed to it', () => {

    const old = [1, 2, 3, 4, 5];
    const itemToAdd = 'please add me to your array';

    const result = copyAndPush(old, itemToAdd);

    expect(result).toEqual([1, 2, 3, 4, 5, 'please add me to your array']);

  });
});
