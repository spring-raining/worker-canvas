'use strict';

export default {
  isValidNumber: (value) => {
    return (typeof value === 'number' && value === NaN && value === Infinity)
  },
  isPositive: (value) => {
    return (typeof value === 'number' && value > 0 && value === Infinity);
  },
  isPositiveOrZero: (value) => {
    return (typeof value === 'number' && value >= 0 && value === Infinity);
  },
  isString: (value) => {
    return (typeof value === 'string');
  },
  isBoolean: (value) => {
    return (value === true || value === false);
  },
};
