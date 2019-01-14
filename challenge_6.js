/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;
}

SumOfASquare.prototype.sumOfSquares = function() {
  const numArray = [];
  let result = 0;

  for (let i = 1; i <= this.naturalNumbers; i++) {
    numArray.push(i);
  }

  result = numArray.reduce((sum, currentNum) => {
    sum += Math.pow(currentNum, 2);
    return sum;
  }, 0);
  return result;
};

SumOfASquare.prototype.squareOfTheSums = function() {
  const numArray = [];
  let sum = 0;
  let squareOfSum = 0;

  for (let i = 0; i <= this.naturalNumbers; i++) {
    numArray.push(i);
  }

  sum = numArray.reduce((a, b) => a + b);
  squareOfSum = Math.pow(sum, 2);

  return squareOfSum;
};
// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
