const top_3_words = require('./main')

describe('top_3_words function', () => {
  it('should return the top three words in a string', () => {
    const inputString =
      'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.'

    const result = top_3_words(inputString)
    expect(result).toEqual(['a', 'of', 'on'])
  })
  it('should handle an empty string input', () => {
    const inputString = ''
    const result = top_3_words(inputString)
    expect(result).toEqual([])
  })
  it('should handle input with no words', () => {
    const inputString = '!@#$%^&*()'
    const result = top_3_words(inputString)
    expect(result).toEqual([])
  })
  it('should handle input with different capitalization', () => {
    const inputString = 'Apple apple BANANA Banana banana'
    const result = top_3_words(inputString)
    expect(result).toEqual(['banana', 'apple'])
  })
  it('should handle input with special characters', () => {
    const inputString = 'word@word word#word word$word'
    const result = top_3_words(inputString)
    expect(result).toEqual(['word'])
  })
})
