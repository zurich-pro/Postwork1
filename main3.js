function frequency(string) {
  var count = {};
  string.split('').sort().forEach(function(s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

console.log('Test 1:', frequency('cccbbbaaa'));
console.log('Test 2:', frequency('www.bedu.org'));
console.log('Test 3:', frequency('john.doe@domain.com'));