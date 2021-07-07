// Second basic exercise

const Person = {
    first: 'Neslihan',
    last: 'Minaz',
    age: 30
 };

 document.getElementById("head").innerHTML = Person.first + ` ` + Person.last;

var fname = [];
var lname = [];

for (let i=0; i<10; i++){
    fname.push(Person.first);
    lname.push(Person.last);
}


fname.forEach(function(val){
    document.getElementById("fullname").innerHTML += val + `<br>`;
})


setTimeout(function() {
    for (let val of lname){
        console.log(val);
    }
 }, 5000);