// WRITE CODE HERE
// NO HIGHER-ORDER FUNCTIONS PERIOD

function _forEach(arr, cb) {
  // should iterate over the arr

  for (let i = 0; i < arr.length; i += 1) {
    // should callback on each iteration
    cb(arr[i], i, arr);
  }
}

function _map(/* what should parameters be?? */) {
  // what should I do with the parameters?
}

exports._forEach = _forEach;
exports._map = _map;