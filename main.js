function top_3_words(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    const cleanedString = lowerCaseString.replace(/[^a-z']+/g, ' ');
    const words = cleanedString.split(' ');
    const wordFrequency = {};

    words.forEach(word => {
        if (word !== '') {
            if (wordFrequency[word]) {
                wordFrequency[word]++;
            } else {
                wordFrequency[word] = 1;
            }
        }
    });

    const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
    return sortedWords.slice(0, 3);
}

