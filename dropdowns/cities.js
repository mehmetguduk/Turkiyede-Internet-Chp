/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

import city_list from "DatabaseCities.js"

const ul_city_list = document.querySelector("ul.city-list")
const div_dropdown_message_city = document.querySelector("div.dropdown-message-city");
const div_dropdown_city = document.querySelector("div.dropdown-city");
const span_population = document.querySelector("span.population");
const span_lucky = document.querySelector("span.lucky");
const span_ratio = document.querySelector("span.ratio");

let city_dropdown_toggle = true;

city_list.forEach(city => {
    ul_city_list.innerHTML += `<li class="city">${city.name}</li>`
})

div_dropdown_message_city.addEventListener("click", function (event) {
    event.preventDefault();
    if (city_dropdown_toggle) {
        div_dropdown_city.style.display = "block";
        city_dropdown_toggle = false;
    }
    else {
        div_dropdown_city.style.display = "none";
        city_dropdown_toggle = true;
    }
})

document.querySelectorAll("li.city").forEach(li => {
    li.addEventListener("click", function (event) {
        event.preventDefault();

        let selected = city_list.filter(function (city) {
            return city.name == event.target.textContent;
        })
        let selected_name = selected[0].name;
        let selected_population = selected[0].population;
        let selected_lucky = selected[0].lucky;
        let selected_ratio = selected[0].ratio;

        div_dropdown_message_city.innerHTML = selected_name + ' <i class="fa fa-caret-down" aria-hidden="true"></i>'

        span_population.innerHTML = selected_population
        span_lucky.innerHTML = selected_lucky
        span_ratio.innerHTML = `${selected_ratio} kişiden yalnızca 1'i verimli internete erişebiliyor`

        div_dropdown_city.style.display = "none";
        city_dropdown_toggle = true;
    })
})