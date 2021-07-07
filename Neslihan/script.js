// First basic exercise
var max_mul = 10;
var arr_one_to_ten = [];
for (var i = 1; i <= max_mul; i++) {
    arr_one_to_ten.push(i);
}
document.getElementById("head").innerHTML = "Multiply numbers from 1 to " + max_mul.toString();
var mul_tbl = document.getElementById("multiply");
for (var _i = 0, arr_one_to_ten_1 = arr_one_to_ten; _i < arr_one_to_ten_1.length; _i++) {
    var val = arr_one_to_ten_1[_i];
    mul_tbl.innerHTML += "<h3>by" + val.toString();
    for (var _a = 0, arr_one_to_ten_2 = arr_one_to_ten; _a < arr_one_to_ten_2.length; _a++) {
        var mul = arr_one_to_ten_2[_a];
        mul_tbl.innerHTML += val.toString() + " X " + mul.toString() + " = " + val * mul + "<br>";
    }
}
