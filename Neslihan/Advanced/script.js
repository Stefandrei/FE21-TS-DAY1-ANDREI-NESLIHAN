// Restaurant exercise
var offers = ["Starter", "Main dish", "Dessert", "Drinks"];
var color_offers = ["white", "#1E090B", "#F49426", "#E1C5BA"];
var offer_list = document.getElementsByClassName("offers__container__list")[0];
for (var _i = 0, offers_1 = offers; _i < offers_1.length; _i++) {
    var val = offers_1[_i];
    offer_list.innerHTML += "<li class=\"offers__container__list__item\">" + val + "</li>";
}
var color_offer_list = document.getElementsByClassName("offers__container__list__item");
for (var i = 0; i < color_offers.length; i++) {
    color_offer_list[i].style.color = color_offers[i];
}
//creating objects for inner HTML
var Starter = [{
        title: 'Soups',
        description: 'All soups are served with bread.',
        image: "https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375__340.jpg"
    }, {
        title: 'Snacks',
        description: 'Always room for the stomach.',
        image: "https://cdn.pixabay.com/photo/2018/07/14/21/30/club-sandwich-3538455__340.jpg"
    }];
var titles = ["Our Starters", "Our Main Dishes", "Must have: Dessert!", "And don't forget to drink ;)"];
var content = document.getElementsByClassName("container")[0];
var menu_id = ["starter", "main", "dessert", "drinks"];
// I don't understand why the <p> style is bold, but that could be fixed with CSS I hope
for (var i = 0; i < Starter.length; i++) {
    if (i % 2 === 0) {
        document.getElementById("starter").innerHTML +=
            "<div class=\"d-flex align-items-center justify-content-center\">\n        <p class=\"pe-5\">" + Starter[i].description + "</p>\n        <img class=\"ps-5\" src=\"" + Starter[i].image + "\" alt=\"\">\n    </div>";
    }
    else {
        document.getElementById("starter").innerHTML +=
            " <div class=\"d-flex align-items-center justify-content-center\">\n            <img class=\"pe-5\" src=\"" + Starter[i].image + "\" alt=\"\">\n            <p class=\"ps-5\">" + Starter[i].description + "</p>\n        </div>";
    }
}
