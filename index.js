import Christian from './data/christian.js';
import Deep from './data/deep.js';
import Fun from './data/fun.js';
import Inspiration from './data/inspiration.js';
import Movies from './data/movies.js';
import Verses from './data/verses.js';

const allCategories = {
  Christian,
  Deep,
  Fun,
  Inspiration,
  Movies,
  Verses
};

export function getRandomQuote(category = null) {
  const keys = Object.keys(allCategories);
  const chosenCategory = category && keys.includes(category.toLowerCase())
    ? category.toLowerCase()
    : keys[Math.floor(Math.random() * keys.length)];
  const quotes = allCategories[chosenCategory];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return { ...quote, category: chosenCategory };
}

export function getCategories() {
  return Object.keys(allCategories);
}

export { allCategories };
