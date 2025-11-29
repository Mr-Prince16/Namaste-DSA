function searchElement(arr, target){
    for(let i =0; i< arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(searchElement([1,2,3,4,5], 3)); // Output: 2
console.log(searchElement(['a', 'b', 'c'], 'd')); // Output: -1