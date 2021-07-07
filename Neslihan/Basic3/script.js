// Third basic exercise
var arr = ["Hello", "my", "name", "is", "Neslihan", "Minaz"];
//Index of array
for (var val in arr) {
    console.log(val);
}
//values of array
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
//print index and values 
console.table(arr);
//print index and values another method
//Index of array
for (var val in arr) {
    console.log(val + " " + arr[val]);
}
