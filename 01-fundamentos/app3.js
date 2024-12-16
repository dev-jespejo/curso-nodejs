
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');

const wordsCount = content.match(/react/gi ?? []).length;

// const reactWordCount = words.filter(word => word.toLowerCase().includes('react')).length;

console.log('Palabras:', words.length);
console.log('Palabras React:', wordsCount); // Case insensitive