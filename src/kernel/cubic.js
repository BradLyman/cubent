/**
 * Provides a constructor for a kernel object which
 * will compute the cubic interpolation between two
 * points.
 * @module kernel/cubic
 **/

/** @class Cubic **/
let Cubic = {};

Cubic.prototype = {
  /** @lends Cubic **/

  /**
   * Computes the cubic interpolation. X values should
   * be in the range [0, 1].
   **/
  computeF : function(x) {
    return this.a*x*x*x + this.b*x*x + this.c*x + this.d;
  },

  /**
   * Computes the derivative of the interpolating function.
   * X values should be in the range [0, 1].
   **/
  computeDF : function(x) {
    return 3*this.a*x*x + 2*this.b*x + this.c;
  },
};

/**
 * Constructs a cubic execution kernel.
 * @param {Number} f0 - Value of f(0).
 * @param {Number} f1 - Value of f(1).
 * @param {Number} df0 - Value of df/dx at x=0.
 * @param {Number} df1 - Value of df/dx at x=1.
 * @return {Cubic}
 **/
module.exports.construct = function(f0, f1, df0, df1) {
  return {
    __proto__ : Class.prototype,
    a         : -2*f1 + df1 + df0 + 2*f0,
    b         : 3f1 - df1 - 2*df0 - 3*f0,
    c         : df0,
    d         : f0,
  };
};
