'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Shuffle the array
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  // Take first 4
  const selected = digits.slice(0, 4);

  // If first is 0, swap with the first non-zero in selected
  if (selected[0] === 0) {
    for (let i = 1; i < 4; i++) {
      if (selected[i] !== 0) {
        [selected[0], selected[i]] = [selected[i], selected[0]];
        break;
      }
    }
  }

  // Join and return as number
  return parseInt(selected.join(''));
}

module.exports = {
  generateRandomNumber,
};
