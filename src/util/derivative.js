/**
 * Provides methods for approximating derivatives of
 * functions.
 * @module util/derivative
 **/

/**
 * Computes an array of derivative approximations
 * using the given array of function values. Values are
 * assumed to be unit distance from eachother.
 * @param {Array.<Number>} X - Array of x values.
 * @return {Array.<Number>} Array of derivatives.
 **/
module.exports.computeDF = function(X) {
  if (X.length === 1) {
    return [0];
  }

  return X.map((x, i) => {
    if (i == 0) {
      return (X[1] - x)/2;
    }
    else if (i == X.length-1) {
      return (x - X[X.length-2])/2;
    }
    else {
      return (X[i+1] - X[i-1])/2;
    }
  });
};
