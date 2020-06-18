// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  //CODE HERE
  const odds = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      odds.push(array[i]);
    }
  }
  return odds;
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  //CODE HERE
  const evens = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }
  return evens;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  //CODE HERE
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}

// returns an empty object that has methods which give the object functionality that is found in arrays. this object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and return an object that has those methods
function createArray() {
  //CODE HERE
  return {
    array: [],
    push: function (val) {
      this.array[this.array.length] = val;
    },
    pop: function () {
      let popped = this.array.length - 1;
      this.array = this.array.slice(0, this.array.length - 1);
      return popped;
    },
    unshift: function (val) {
      this.array = [val, ...this.array];
    },
    shift: function () {
      let shifted = this.array[0];
      this.array = this.array.slice(1);
      return shifted;
    },
  };
}
