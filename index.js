function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  });
  return
}

function iterate(callback) {
  var array = ["Rachel", 2];
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
  return
}
