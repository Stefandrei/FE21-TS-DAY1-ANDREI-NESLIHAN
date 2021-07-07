// Third basic exercise

var arr : string[] = ["Hello", "my", "name", "is", "Neslihan", "Minaz"];

//Index of array
for (let val in arr){
    console.log(val);
}

//values of array
for (let val of arr){
    console.log(val);
}
//print index and values 
console.table(arr);

//print index and values another method
//Index of array
for (let val in arr){
    console.log(val + " " + arr[val]);
}