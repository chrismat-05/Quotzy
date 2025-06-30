# 🎲 quotzy

> A customizable random quote generator — straight from CLI or JS.

**quotzy** lets you pick random quotes from categories like:
🎬 Movies, 📖 Verses, 🤪 Fun, ✝️ Christian, 🌟 Inspiration, 🧠 Deep

---

## Installation

You can run directly from GitHub (or install locally):

```bash
git clone https://github.com/chrismat-05/quotzy.git
cd quotzy
npm install
```

## Usage
### CLI
```
# Random quote
node cli.js

# Quote from category
node cli.js --category fun

# List categories
node cli.js --list

# Help
node cli.js --help
```

### JS Module
```
import { getRandomQuote, getCategories } from 'quotzy';

const quote = getRandomQuote();
console.log(quote); // { quote, author, category }

console.log(getCategories());
```

## Available Categories
(as of 30th June, 2025)
- christian
- deep
- fun
- inspiration
- movies
- verses

## Creator
Chris Mathew Aje
[Visit](https://thecma.xyz/)
[Github](https://github.com/chrismat-05))