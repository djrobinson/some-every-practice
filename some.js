module.exports = {
  anyGreaterThan10 : anyGreaterThan10,
  longWord : longWord,
  truePossibilities : truePossibilities,
  lostCarcosa : lostCarcosa
};

// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some(function(num){
    return (num > 10);
  });
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(function(word){
    return (word.length > 10);
  });
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.reduce(function(a, b){ return a.concat(b);})
              .some(function(binary){ return  (binary === true);
  });
}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input.map(function(sent){ return sent.split(' '); } )
              .reduce(function(a, b){ return a.concat(b);})
              .some(function(word){ return (word === 'Lost');});

        //input.some  (  el
                   // el > split > .some
                          // conditional

}