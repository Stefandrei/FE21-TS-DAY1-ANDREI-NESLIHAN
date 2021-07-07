// Second basic exercise
var Person = {
    first: 'Neslihan',
    last: 'Minaz',
    age: 30
};
document.getElementById("head").innerHTML = Person.first + " " + Person.last;
var fname = [];
var lname = [];
for (var i = 0; i < 10; i++) {
    fname.push(Person.first);
    lname.push(Person.last);
}
fname.forEach(function (val) {
    document.getElementById("fullname").innerHTML += val + "<br>";
});
setTimeout(function () {
    for (var _i = 0, lname_1 = lname; _i < lname_1.length; _i++) {
        var val = lname_1[_i];
        console.log(val);
    }
}, 5000);
