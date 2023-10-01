const Trie = require('./trie') // Import the Trie module

// Function to find the top 3 most repeated words in the Trie
function top_3_word(inputString) {
  // Convert the input string to lowercase to ensure case-insensitive word counting.
  const lowerCaseString = inputString.toLowerCase()
  // Replace all characters that are not letters or apostrophes with spaces to isolate words.
  const cleanedString = lowerCaseString.replace(/[^a-z']+/g, ' ')
  // Split the cleaned string into individual words and store them in an array.
  const words = cleanedString.split(' ')

  const trie = new Trie.Trie()

  // Add each word to the Trie
  for (const word of words) {
    if (word !== '') {
      trie.addString(word)
    }
  }

  // Function to traverse the Trie and find the top 3 words
  function findTopWords(node, results, prefix) {
    if (node.count > 0) {
      results.push({ word: prefix, count: node.count })
    }

    for (let i = 0; i < node.children.length; i++) {
      const childNode = node.children[i]
      if (childNode) {
        const char = Trie.getCodeChar(i)
        findTopWords(childNode, results, prefix + char)
      }
    }
  }

  const topWords = []
  findTopWords(trie.root, topWords, '')

  // Sort the topWords array by count in descending order
  topWords.sort((a, b) => b.count - a.count)
  const topWordsPlainStrings = topWords.slice(0, 3).map((item) => item.word)

  // Return the top 3 words or less if there are fewer than 3
  return topWordsPlainStrings.slice(0, 3)
}

module.exports = top_3_word
