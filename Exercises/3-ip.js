'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (prev, actuel) => (prev << 8) + parseInt(actuel);
  return ip.split('.').reduce(fn, 0);
};

module.exports = { ipToInt };
