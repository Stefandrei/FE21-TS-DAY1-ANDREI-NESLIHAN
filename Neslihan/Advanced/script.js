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
