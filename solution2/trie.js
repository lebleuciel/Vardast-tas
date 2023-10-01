const characterLimit = 27

function getCharCode(char) {
  if (char === "'") {
    // Return a unique code for single quotes
    return 26
  } else if (char >= 'a' && char <= 'z') {
    // Return the character code for lowercase letters
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
  } else {
    // Return -1 for other characters (not in the range a-z, or ')
    return -1
  }
}

function getCodeChar(code) {
  if (code === 26) {
    return "'"
  } else {
    return String.fromCharCode('a'.charCodeAt(0) + code)
  }
}

// Define the Node structure for the Trie
class TrieNode {
  constructor() {
    this.count = 0 // Number of times this word is present
    this.parent = null // Reference to parent node
    this.children = Array(characterLimit).fill(null) // Array to hold child nodes for each letter
  }

  // Create and set a child node for a given character if it doesn't exist
  createChild(char) {
    const charCode = getCharCode(char)
    if (!this.children[charCode]) {
      this.children[charCode] = new TrieNode()
      this.children[charCode].parent = this
    }
    return this.children[charCode]
  }
}

// Define the Trie structure
class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  // Add a string to the Trie
  addString(str) {
    let currentNode = this.root
    for (const char of str) {
      const charCode = getCharCode(char)
      if (charCode >= 0 && charCode < 27) {
        currentNode = currentNode.createChild(char)
      }
    }
    currentNode.count++
  }
}

module.exports.Trie = Trie
module.exports.getCodeChar = getCodeChar
