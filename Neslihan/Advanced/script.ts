// Restaurant exercise

var offers : string [] = ["Starter", "Main dish", "Dessert", "Drinks"];
var color_offers : string [] = ["white", "#1E090B", "#F49426", "#E1C5BA"];

var offer_list = document.getElementsByClassName("offers__container__list")[0];

for (let val of offers){
    offer_list.innerHTML +=  `<li class="offers__container__list__item">` + val + `</li>`
}

var color_offer_list = document.getElementsByClassName("offers__container__list__item");

for (let i = 0; i< color_offers.length; i++){
    color_offer_list[i].style.color = color_offers[i];
}

