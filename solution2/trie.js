const characterLimit = 27

function getCharCode(char) {
  if (char === "'") {
    return 26
  } else if (char >= 'a' && char <= 'z') {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
  } else {
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

class TrieNode {
  constructor() {
    this.count = 0
    this.parent = null
    this.children = Array(characterLimit).fill(null)
  }

  createChild(char) {
    const charCode = getCharCode(char)
    if (!this.children[charCode]) {
      this.children[charCode] = new TrieNode()
      this.children[charCode].parent = this
    }
    return this.children[charCode]
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

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
