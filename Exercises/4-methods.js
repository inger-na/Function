'use strict';

const methods = (iface) => {
  const array = [];
  for (const object in iface) {
    if (typeof iface[object] === 'function') {
      array.push([object, iface[object].length]);
    }
  }
  return array;
};

module.exports = { methods };
