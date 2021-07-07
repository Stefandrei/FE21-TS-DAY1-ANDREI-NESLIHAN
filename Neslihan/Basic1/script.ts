// First basic exercise

const max_mul = 10;

var arr_one_to_ten: number[] = [];

for (let i = 1; i <= max_mul; i++) {
    arr_one_to_ten.push(i);
}


document.getElementById("head").innerHTML = `Multiply numbers from 1 to ` + max_mul.toString();

var mul_tbl = document.getElementById("multiply");

for (let val of arr_one_to_ten) {
    mul_tbl.innerHTML += `<h3>by` + val.toString();

    for (let mul of arr_one_to_ten) {
        
        mul_tbl.innerHTML += val.toString() + ` X ` + mul.toString() + ` = ` + val*mul + `<br>`;
    }
}





