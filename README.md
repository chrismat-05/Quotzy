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
npm link
```

## Usage
### CLI
```
# Random quote
quotzy

# Quote from category
quotzy -- fun

# List categories
quotzy --list

# Help
quotzy --help
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
[Github](https://github.com/chrismat-05)