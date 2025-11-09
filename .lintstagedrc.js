module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    '*.{json,md,html,css,scss}': ['prettier --write'],
    '*.{js,jsx,ts,tsx,css,scss,md}': ['git add']
  };