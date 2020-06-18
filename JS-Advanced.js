// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
  const Outputs = [];
  for (let i = 0; i < array.length; i++) {
    Outputs.push(callback(array[i]));
  }
  return Outputs;
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  //iteraten through elements of collection, push into an empty array all elements where callback returns truthy
  //initialize empty array, return that array
  const truthy = [];
  // callback has element, index, collection (3 parameters)

  let keys = Object.keys(collection); // ['a', 'b', 'c', 'd'] // [0, 1, 2, 3]

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (callback(collection[key])) truthy.push(collection[key]);
  }

  return truthy;
}

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
  function oppositeCallback(e) {
    return !callback(e);
  }
  const rejectedArr = filter(collection, oppositeCallback);
  // Shorter notation
  // const rejectedArr = filter(collection, callback);

  if (Array.isArray(collection)) {
    return rejectedArr;
  } else {
    const rejectedObj = {};
    for (const key in collection) {
      if (rejectedArr.includes(collection[key])) {
        rejectedObj[key] = collection[key];
      }
    }
    return rejectedObj;
  }
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
  //CODE HERE
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) < 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  //CODE HERE
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}

// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
  //CODE HERE
  let hasBeenRun = false;
  let output;
  return function (input) {
    if (hasBeenRun === false) {
      output = func(input);
      hasBeenRun = true;
      return output;
    }
    return output;
  };
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  let startIndex = 0;
  let accum;
  if (typeof arguments[2] === "undefined") {
    accum = array[0];
    startIndex++;
  } else {
    accum = start;
  }
  for (let i = startIndex; i < array.length; i++) {
    accum = callback(accum, array[i]);
  }
  return accum;
}

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
  //CODE HERE
  return array.reduce((accum, currVal) => {
    if (!func(accum)) {
      return false;
    }
    return func(currVal) ? accum : false;
  }, true);
}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flat.push(...array[i]);
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flat.push(...flattenDeep(array[i]));
    } else flat.push(array[i]);
  }
  return flat;
}
