var data = [1, 2, 3, 4, 5, 6, 7, 8];

function chunk(array, size) {
  var i = 0;
  var arrayMod = [];
  while (i < array.length) {
    arrayMod.push(array.slice(i, size + i));
    i = i + size;
  }
  return arrayMod;
}

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]