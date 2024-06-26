var prompt = require('prompt');

prompt.start();

let data = [30,45,77,55,90,80,10];

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr[0];
  for (i = 1; i < arr.length; i++) {
		let num = arr[i];
    if (num < pivot) {
    	left.push(num);
    } else {
    	right.push(num);
    }
  }
	return [...quicksort(left), pivot, ...quicksort(right)];
}
console.log(quicksort(data));

function binarysearch(arr,goal) {
	let head = 0;
  let end = arr.length - 1;
  let mid;
  while (head <= end) {
  	mid = ((head + end) / 2) | 0;
    if (goal < arr[mid]) {
    	end = mid - 1;
    } else if (goal > arr[mid]) {
    	head = mid + 1;
    } else {
    	return ("搜尋選項在第" + (mid + 1) + "項");
    }
  }
  return ("無搜尋資料");
}

prompt.get(['number'],function(err,result) {
    console.log(binarysearch(quicksort(data),result.number));
});
