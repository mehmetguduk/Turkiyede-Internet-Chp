/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

import country_list from "DatabaseCountries.js"

const ul_country_list = document.querySelector("ul.country-list")
const div_dropdown_message_country = document.querySelector("div.dropdown-message-country");
const div_dropdown_country = document.querySelector("div.dropdown-country");
const div_download = document.querySelector("div.download");

let country_dropdown_toggle = true;

country_list.forEach(country => {
    ul_country_list.innerHTML += `<li class="country">${country.name}</li>`
})

div_dropdown_message_country.addEventListener("click", function (event) {
    event.preventDefault();
    if (country_dropdown_toggle) {
        div_dropdown_country.style.display = "block";
        country_dropdown_toggle = false;
    }
    else {
        div_dropdown_country.style.display = "none";
        country_dropdown_toggle = true;
    }
})

document.querySelectorAll("li.country").forEach(li => {
    li.addEventListener("click", function (event) {
        event.preventDefault();

        let selected = country_list.filter(function (country) {
            return country.name == event.target.textContent
        })
        let selected_name = selected[0].name
        let selected_downloadspeed = selected[0].downloadspeed
        div_dropdown_message_country.innerHTML = selected_name + ' <i class="fa fa-caret-down" aria-hidden="true"></i>'
        div_download.innerHTML = `<div class="download-header">ORTALAMA İNDİRME HIZI</div>
        <div class="download-speed">${selected_downloadspeed + " Mbps"}</div>`
        div_dropdown_country.style.display = "none";
        country_dropdown_toggle = true;
    })
})