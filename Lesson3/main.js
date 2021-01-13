const testFn = function (x) {
   return x * x;
    
}
const testArr = [1, 2, 3, 4];

const map = function(arr, fn) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        resArr.push(fn(arr[i]));
    }
    return resArr;
} 
console.log(map(testArr, testFn))

