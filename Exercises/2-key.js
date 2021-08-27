'use strict';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generateKey = (length, possible) => {
  let result = '';
  const len = possible.length;
  for (let i = length; i > 0; i--) {
    const index = random(0, len - 1);
    result += possible[index];
  }
  return result;
};

module.exports = { generateKey };
