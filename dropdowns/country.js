/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

const country_list = [
    { name: "Türkiye", downloadspeed: 26.34 },
    { name: "Afganistan", downloadspeed: 1.62 },
    { name: "Almanya", downloadspeed: 69.52 },
    { name: "Amerika Birleşik Devletleri", downloadspeed: 143.76 },
    { name: "Andora", downloadspeed: 92.42 },
    { name: "Angola", downloadspeed: 11.97 },
    { name: "Antigua ve Barbuda", downloadspeed: 17.36 },
    { name: "Arjantin", downloadspeed: 38.47 },
    { name: "Arnavutluk", downloadspeed: 33.50 },
    { name: "Avustralya", downloadspeed: 50.89 },
    { name: "Avusturya", downloadspeed: 51.62 },
    { name: "Azerbaycan", downloadspeed: 17.40 },
    { name: "Aziz Lucia", downloadspeed: 73.70 },
    { name: "Bahamalar", downloadspeed: 37.69 },
    { name: "Bahreyn", downloadspeed: 47.38 },
    { name: "Bangladeş", downloadspeed: 31.52 },
    { name: "Barbados", downloadspeed: 68.83 },
    { name: "Batı Sahra", downloadspeed: 10.51 },
    { name: "Belarus", downloadspeed: 45.67 },
    { name: "Belize", downloadspeed: 31.81 },
    { name: "Belçika", downloadspeed: 81.10 },
    { name: "Benin", downloadspeed: 10.77 },
    { name: "Birleşik Arap Emirlikleri", downloadspeed: 111.79 },
    { name: "Birleşik Krallık", downloadspeed: 61.69 },
    { name: "Bolivya", downloadspeed: 24.19 },
    { name: "Bosna Hersek", downloadspeed: 22.56 },
    { name: "Botsvana", downloadspeed: 7.22 },
    { name: "Brezilya", downloadspeed: 87.52 },
    { name: "Brunei", downloadspeed: 35.26 },
    { name: "Bulgaristan", downloadspeed: 55.90 },
    { name: "Burkina Faso", downloadspeed: 19.71 },
    { name: "Burundi", downloadspeed: 5.44 },
    { name: "Butan", downloadspeed: 8.52 },
    { name: "Cezayir", downloadspeed: 9.72 },
    { name: "Cibuti", downloadspeed: 4.71 },
    { name: "Çekya", downloadspeed: 47.68 },
    { name: "Çin", downloadspeed: 155.79 },
    { name: "Danimarka", downloadspeed: 163.60 },
    { name: "Dominik Cumhuriyeti", downloadspeed: 15.52 },
    { name: "Dominika", downloadspeed: 50.96 },
    { name: "Ekvador", downloadspeed: 33.96 },
    { name: "El Salvador", downloadspeed: 21.11 },
    { name: "Endonezya", downloadspeed: 20.20 },
    { name: "Ermenistan", downloadspeed: 34.26 },
    { name: "Estonya", downloadspeed: 52.30 },
    { name: "Etiyopya", downloadspeed: 2.69 },
    { name: "Fas", downloadspeed: 12.78 },
    { name: "Fiji", downloadspeed: 12.27 },
    { name: "Fildişi Sahili", downloadspeed: 31.42 },
    { name: "Filipinler", downloadspeed: 49.52 },
    { name: "Filistin", downloadspeed: 14.30 },
    { name: "Finlandiya", downloadspeed: 89.60 },
    { name: "Fransa", downloadspeed: 94.34 },
    { name: "Gabon", downloadspeed: 13.41 },
    { name: "Gambiya", downloadspeed: 7.84 },
    { name: "Gana", downloadspeed: 27.16 },
    { name: "Gine", downloadspeed: 3.79 },
    { name: "Grenada", downloadspeed: 50.66 },
    { name: "Guatemala", downloadspeed: 21.56 },
    { name: "Guyana", downloadspeed: 31.01 },
    { name: "Güney Afrika", downloadspeed: 29.60 },
    { name: "Güney Kore", downloadspeed: 99.59 },
    { name: "Gürcistan", downloadspeed: 20.18 },
    { name: "Haiti", downloadspeed: 14.89 },
    { name: "Hindistan", downloadspeed: 47.08 },
    { name: "Hollanda", downloadspeed: 102.60 },
    { name: "Honduras", downloadspeed: 25.98 },
    { name: "Hong Kong", downloadspeed: 165.49 },
    { name: "Hırvatistan", downloadspeed: 39.54 },
    { name: "Irak", downloadspeed: 20.64 },
    { name: "İran", downloadspeed: 10.39 },
    { name: "İrlanda", downloadspeed: 66.39 },
    { name: "İspanya", downloadspeed: 134.19 },
    { name: "İsrail", downloadspeed: 87.98 },
    { name: "İsveç", downloadspeed: 102.08 },
    { name: "İsviçre", downloadspeed: 110.30 },
    { name: "İtalya", downloadspeed: 49.80 },
    { name: "Jamaika", downloadspeed: 36.46 },
    { name: "Japonya", downloadspeed: 112.90 },
    { name: "Kamboçya", downloadspeed: 19.36 },
    { name: "Kamerun", downloadspeed: 9.04 },
    { name: "Kanada", downloadspeed: 100.06 },
    { name: "Karadağ", downloadspeed: 50.81 },
    { name: "Katar", downloadspeed: 72.22 },
    { name: "Kazakistan", downloadspeed: 33.76 },
    { name: "Kenya", downloadspeed: 8.91 },
    { name: "Kolombiya", downloadspeed: 59.97 },
    { name: "Kongo", downloadspeed: 11.84 },
    { name: "Kosova", downloadspeed: 45.28 },
    { name: "Kosta Rika", downloadspeed: 50.79 },
    { name: "Kuveyt", downloadspeed: 96.93 },
    { name: "Kuzey Makedonya", downloadspeed: 26.77 },
    { name: "Küba", downloadspeed: 1.90 },
    { name: "Kıbrıs", downloadspeed: 29.48 },
    { name: "Kırgızistan", downloadspeed: 43.31 },
    { name: "Laos", downloadspeed: 28.11 },
    { name: "Lesoto", downloadspeed: 18.92 },
    { name: "Letonya", downloadspeed: 64.93 },
    { name: "Liberya", downloadspeed: 9.48 },
    { name: "Libya", downloadspeed: 11.00 },
    { name: "Lihtenştayn", downloadspeed: 118.19 },
    { name: "Litvanya", downloadspeed: 79.81 },
    { name: "Lübnan", downloadspeed: 7.27 },
    { name: "Lüksemburg", downloadspeed: 92.10 },
    { name: "Macaristan", downloadspeed: 100.65 },
    { name: "Madagaskar", downloadspeed: 25.16 },
    { name: "Makao", downloadspeed: 156.73 },
    { name: "Malawi", downloadspeed: 5.54 },
    { name: "Maldivler", downloadspeed: 10.97 },
    { name: "Malezya", downloadspeed: 84.18 },
    { name: "Mali", downloadspeed: 17.71 },
    { name: "Malta", downloadspeed: 90.36 },
    { name: "Marşal Adaları", downloadspeed: 9.29 },
    { name: "Mauritius", downloadspeed: 19.88 },
    { name: "Meksika", downloadspeed: 38.77 },
    { name: "Mikronezya", downloadspeed: 9.75 },
    { name: "Moldova", downloadspeed: 92.40 },
    { name: "Monako", downloadspeed: 192.68 },
    { name: "Moritanya", downloadspeed: 6.10 },
    { name: "Mozambik", downloadspeed: 6.23 },
    { name: "Moğolistan", downloadspeed: 46.81 },
    { name: "Myanmar Birliği Cumhuriyeti", downloadspeed: 15.20 },
    { name: "Mısır", downloadspeed: 35.67 },
    { name: "Namibya", downloadspeed: 8.29 },
    { name: "Nepal", downloadspeed: 39.73 },
    { name: "Nijer", downloadspeed: 3.85 },
    { name: "Nijerya", downloadspeed: 10.06 },
    { name: "Nikaragua", downloadspeed: 29.04 },
    { name: "Norveç", downloadspeed: 105.61 },
    { name: "Özbekistan", downloadspeed: 36.85 },
    { name: "Pakistan", downloadspeed: 9.12 },
    { name: "Panama", downloadspeed: 94.51 },
    { name: "Papua Yeni Gine", downloadspeed: 9.25 },
    { name: "Paraguay", downloadspeed: 54.58 },
    { name: "Peru", downloadspeed: 43.21 },
    { name: "Polonya", downloadspeed: 86.20 },
    { name: "Portekiz", downloadspeed: 99.62 },
    { name: "Romanya", downloadspeed: 127.07 },
    { name: "Ruanda", downloadspeed: 9.52 },
    { name: "Rusya", downloadspeed: 63.76 },
    { name: "Saint Kitts ve Nevis", downloadspeed: 25.16 },
    { name: "Saint Vincent ve Grenadinler", downloadspeed: 58.26 },
    { name: "San Marino", downloadspeed: 68.29 },
    { name: "Senegal", downloadspeed: 20.36 },
    { name: "Seyşeller", downloadspeed: 22.13 },
    { name: "Sierra Leone", downloadspeed: 8.57 },
    { name: "Singapur", downloadspeed: 192.01 },
    { name: "Slovakya", downloadspeed: 47.34 },
    { name: "Slovenya", downloadspeed: 63.63 },
    { name: "Somali", downloadspeed: 6.78 },
    { name: "Sri Lanka", downloadspeed: 20.94 },
    { name: "Sudan", downloadspeed: 3.28 },
    { name: "Surinam", downloadspeed: 10.79 },
    { name: "Suriye", downloadspeed: 2.87 },
    { name: "Suudi Arabistan", downloadspeed: 79.32 },
    { name: "Svaziland", downloadspeed: 4.94 },
    { name: "Sırbistan", downloadspeed: 48.97 },
    { name: "Şili", downloadspeed: 189.36 },
    { name: "Tacikistan", downloadspeed: 16.96 },
    { name: "Tanzanya", downloadspeed: 9.45 },
    { name: "Tayland", downloadspeed: 184.03 },
    { name: "Tayvan", downloadspeed: 96.82 },
    { name: "Trinidad ve Tobago", downloadspeed: 79.35 },
    { name: "Tunus", downloadspeed: 7.64 },
    { name: "Türkmenistan", downloadspeed: 1.89 },
    { name: "Uganda", downloadspeed: 9.57 },
    { name: "Ukrayna", downloadspeed: 52.50 },
    { name: "Umman", downloadspeed: 42.65 },
    { name: "Uruguay", downloadspeed: 85.61 },
    { name: "Ürdün", downloadspeed: 50.18 },
    { name: "Venezuela", downloadspeed: 7.15 },
    { name: "Vietnam", downloadspeed: 67.50 },
    { name: "Yemen", downloadspeed: 2.74 },
    { name: "Yeni Zelanda", downloadspeed: 113.14 },
    { name: "Yeşil Burun Adaları", downloadspeed: 16.37 },
    { name: "Yunanistan", downloadspeed: 33.41 },
    { name: "Zambiya", downloadspeed: 4.60 },
    { name: "Zimbabve", downloadspeed: 5.21 }
];

const ul_country_list = document.querySelector("ul.country-list")
const div_dropdown_message_country = document.querySelector("div.dropdown-message-country");
const div_dropdown_country = document.querySelector("div.dropdown-country");
const div_download_speed = document.querySelector("div.download-speed");
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