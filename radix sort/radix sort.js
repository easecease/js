function radix(arr) {
    let maxdigits=0;
    for (let num of arr) {
    maxdigits = (maxdigits < num.toString().length ? arr.toString().length : maxdigits)
    }
    for (let i = 0; i < maxdigits; i++) {
        let buckets = Array.from({length:10}, () => [])
        for (let j = 0; j < arr.length; j++) {
            let radix = math.floor(arr[j] / math.pow (10,i) % 10);
            buckets[radix] = push(arr[j]);
            }
            arr = [].concat(...buckets);
        }
    return arr;
}

let arr = [9, 10, 11, 55, 429, 88, 52, 105, 3, 599, 201, 67];

console.log(radix(arr));