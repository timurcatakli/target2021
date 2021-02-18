  /**
   * Async array.
   */
  function AsyncArray(arr) {
    this._arr = arr;
    this.length = arr.length;
  }
  
  /**
   * Asynchronously get the array item of the
   * given index.
   * @param {number} index - array index of the desired item
   * @param {function} callback - called with the array item
   */
  AsyncArray.prototype.get = function get(index, callback) {
    setTimeout(callback, 0, this._arr[index]);
  };
  
  
  /**
   * Async version of Array.prototype.map.
   * @param {AsyncArray} arr
   * @param {function} fn - (item: any) => any
   * @returns {Promise<AsyncArray>}
   */
  function asyncMap(arr, fn) {
    // Implement this
  }

  /**
   * Async version of Array.prototype.reduce.
   * @param {AsyncArray} arr
   * @param {function} fn - (val: any, item: any) => any
   * @returns {Promise<any>}
   */
  function asyncReduce(arr, fn, initVal) {
    // Implement this
  }

    const arr = new AsyncArray([1, 2, 3]);
  
  // arr.get(1, item => console.log(item)); // Existing - Prints 2
  
  // Expected result: [2, 4, 6];
  // asyncMap(arr, x => x * 2).then(arr_ => console.log('asyncMap:', arr_));

  // Expected result: 106
  // asyncReduce(arr, (v, x) => v + x, 100).then(val => console.log('asyncReduce:', val));


