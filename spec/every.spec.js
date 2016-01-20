var myCode = require('../every');
var chai = require('chai');
var expect = chai.expect;

describe('myCode', function () {
  it('#allEven', function () {
    var goodInput = [2,4,10];
    expect(myCode.allEven(goodInput)).to.equal(true);

    var badInput = [2,4,11];
    expect(myCode.allEven(badInput)).to.equal(false);
  });

  it('#allSameType', function () {
    var goodInput = [1,2,3];
    expect(myCode.allSameType(goodInput)).to.equal(true);

    var badInput = [1,2,3,'4'];
    expect(myCode.allSameType(badInput)).to.equal(false);
  });

  it('#positiveMatrix', function () {
    var goodInput = [[1,2,3],
                     [4,5,6],
                     [7,8,9]];
    expect(myCode.positiveMatrix(goodInput)).to.equal(true);

    var badInput = [[-1,2,3],
                    [4,-5,6],
                    [7,8,-9]];
    expect(myCode.positiveMatrix(badInput)).to.equal(false);
  });

  it('#allSameVowels', function () {
    var goodInput = ['amalgam', 'zoom'];
    expect(myCode.allSameVowels(goodInput)).to.equal(true);

    var badInput = ['zoom', 'oligopoly'];
    expect(myCode.allSameVowels(badInput)).to.equal(false);
  });
});