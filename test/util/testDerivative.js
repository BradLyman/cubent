let should = require('should');
let util   = require('../../src/util/derivative.js');

describe('Approximating derivatives', () => {
  describe('of a single point', () => {
    it('should equal 0', () => {
      let X = [5];
      let dx = util.computeDF(X);

      dx.length.should.equal(1);
      dx[0].should.equal(0);
    });
  });

  describe('of two points', () => {
    it('should equal 1/2 slope btwn points', () => {
      let X = [2, 4];
      let dx = util.computeDF(X);

      dx.length.should.equal(2);
      dx[0].should.equal(1);
      dx[1].should.equal(1);
    });
  });

  describe('of arbitrary points', () => {
    it('should equal slope btwn surrounding points', () => {
      let X      = [1, 3, 3, -2, 8, 0];
      let dx     = util.computeDF(X);
      let realDX = [1, 1, -2.5, 2.5, 1.0, -4];

      dx.length.should.equal(X.length);
      dx.forEach((val, i) => {
        val.should.equal(realDX[i]);
      });
    });
  });
});
