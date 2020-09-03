const { fetchQuote } = require('./fetchQuote.js');

describe('fetchQuote Function', () => {
  it('returns a quote from the futurama API in a specific format', async() => {
    const result = await fetchQuote();

    expect(result).toEqual({ name: expect.any(String), text:expect.any(String), image: expect.any(String) });
  });
});
