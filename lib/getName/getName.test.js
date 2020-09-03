const { getName } = require('./getName.js');

describe('getName function', () => {
  it('finds the value stored in the name key of a given object', () => {

    const dog = {
      name: 'leo',
      age: 12
    };

    const building = {
      name: 'large building',
      age_years: 44
    };

    const name = getName(dog);

    expect(name).toEqual('leo');
    
    
  });
});
