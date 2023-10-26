const originalArray = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const transformedArray = originalArray.map((item) => {
  if (item.trim() === '') {
    return 'empty string';
  }
  return item;
});

console.log(transformedArray);


//The spread operator (...) in JavaScript is used to create a shallow copy of an object (or array) or to merge multiple objects (or arrays) into a new one. It does not modify the original object but creates a new one. This is one of the key distinctions between the spread operator and other methods like Object.assign() or array methods that mutate the original object.

//The rest operator is useful when you want to work with an unknown or variable number of elements or parameters, making your code more flexible and dynamic.The rest operator in JavaScript, represented by three dots (...), is used to collect multiple elements or parameters into a single array or object. It is the counterpart to the spread operator, which allows you to spread elements out, and the rest operator allows you to gather elements or parameters into a single variable.

//{ key1: 1, key2: 2 }
//{ key1: 1000, key2: 2 }