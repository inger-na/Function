'use strict';

const random = (min, max) => {
  const randomNumber = Math.random() * (max - min + 1) + min;
  const result = Math.floor(randomNumber);
  return result;
};

module.exports = { random };
