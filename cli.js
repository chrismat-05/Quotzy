#!/usr/bin/env node
import { getRandomQuote, getCategories } from './index.js';

const args = process.argv.slice(2);

if (args.includes('--help')) {
  console.log(`
📦 Ran-Quote-dom — Random Quote Generator by Chris

Usage:
  ran-quote-dom           → Get a quote from a random category
  ran-quote-dom --category <name> → Get a quote from a specific category
  ran-quote-dom --list    → List available categories
  ran-quote-dom --help    → Show this help message
  `);
  process.exit(0);
}

if (args.includes('--list')) {
  console.log('📚 Available categories:\n');
  console.log(getCategories().map(c => `- ${c}`).join('\n'));
  process.exit(0);
}

const categoryIndex = args.indexOf('--category');
let category = null;
if (categoryIndex !== -1 && args[categoryIndex + 1]) {
  category = args[categoryIndex + 1];
}

const quote = getRandomQuote(category);
console.log(`📢 ${quote.quote} — ${quote.author} [${quote.category}]`);
