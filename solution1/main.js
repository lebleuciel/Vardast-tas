const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter a string: ', (inputString) => {
  // Call the top_3_words function with the user's input
  const result = top_3_words(inputString)

  // Display the result
  console.log('Top 3 words:', result)

  // Close the interface to end the program
  rl.close()
})

// This function takes an input string and returns an array of the top three most frequently used words in it.
function top_3_words(inputString) {
  // Convert the input string to lowercase to ensure case-insensitive word counting.
  const lowerCaseString = inputString.toLowerCase()
  // Replace all characters that are not letters or apostrophes with spaces to isolate words.
  const cleanedString = lowerCaseString.replace(/[^a-z']+/g, ' ')
  // Split the cleaned string into individual words and store them in an array.
  const words = cleanedString.split(' ')
  const wordFrequency = {}
  // Count the frequency of each word.
  words.forEach((word) => {
    // Ensure that empty strings (resulting from consecutive spaces) are not counted
    if (word !== '') {
      if (wordFrequency[word]) {
        wordFrequency[word]++
      } else {
        wordFrequency[word] = 1
      }
    }
  })
  // Sort the words by their frequencies in descending order.
  const sortedWords = Object.keys(wordFrequency).sort(
    (a, b) => wordFrequency[b] - wordFrequency[a],
  )
  // Return the top three words with the highest frequencies.
  return sortedWords.slice(0, 3)
}
module.exports = top_3_words
