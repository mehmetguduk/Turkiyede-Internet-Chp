const city_list = [
    { name: "Türkiye Geneli", population: 83614362, lucky: 5304220, ratio: 15 },
    { name: "Adana", population: 2258718, lucky: 163817, ratio: 13 },
    { name: "Adıyaman", population: 632459, lucky: 17073, ratio: 37 },
    { name: "Afyonkarahisar", population: 736912, lucky: 16362, ratio: 45 },
    { name: "Ağrı", population: 535435, lucky: 4309, ratio: 124 },
    { name: "Amasya", population: 335494, lucky: 335494, ratio: 46 },
    { name: "Ankara", population: 5663322, lucky: 702067, ratio: 8 },
    { name: "Antalya", population: 2548308, lucky: 233815, ratio: 10 },
    { name: "Artvin", population: 169501, lucky: 4126, ratio: 41 },
    { name: "Aydın", population: 1119084, lucky: 47321, ratio: 23 },
    { name: "Balıkesir", population: 1240285, lucky: 45584, ratio: 27 },
    { name: "Bilecik", population: 218717, lucky: 9964, ratio: 21 },
    { name: "Bingöl", population: 281768, lucky: 6378, ratio: 44 },
    { name: "Bitlis", population: 350994, lucky: 6658, ratio: 52 },
    { name: "Bolu", population: 314802, lucky: 7567, ratio: 41 },
    { name: "Burdur", population: 267092, lucky: 2701, ratio: 98 },
    { name: "Bursa", population: 3101833, lucky: 184483, ratio: 16 },
    { name: "Çanakkale", population: 541548, lucky: 12940, ratio: 41 },
    { name: "Çankırı", population: 192428, lucky: 4431, ratio: 43 },
    { name: "Çorum", population: 530126, lucky: 11761, ratio: 45 },
    { name: "Denizli", population: 1040915, lucky: 75840, ratio: 13 },
    { name: "Diyarbakır", population: 1783431, lucky: 86663, ratio: 20 },
    { name: "Edirne", population: 407763, lucky: 25133, ratio: 16 },
    { name: "Elazığ", population: 587960, lucky: 19245, ratio: 30 },
    { name: "Erzincan", population: 234431, lucky: 11543, ratio: 12 },
    { name: "Eskişehir", population: 888828, lucky: 90802, ratio: 9 },
    { name: "Gaziantep", population: 2101157, lucky: 147332, ratio: 14 },
    { name: "Giresun", population: 448721, lucky: 7268, ratio: 61 },
    { name: "Gümüşhane", population: 141702, lucky: 3345, ratio: 42 },
    { name: "Hakkari", population: 280514, lucky: 2334, ratio: 120 },
    { name: "Hatay", population: 1659320, lucky: 32516, ratio: 51 },
    { name: "Isparta", population: 440304, lucky: 7761, ratio: 56 },
    { name: "Mersin", population: 1868757, lucky: 112736, ratio: 16 },
    { name: "İstanbul", population: 15462452, lucky: 1479243, ratio: 10 },
    { name: "İzmir", population: 4394694, lucky: 430664, ratio: 10 },
    { name: "Kars", population: 284923, lucky: 7344, ratio: 38 },
    { name: "Kastamonu", population: 376377, lucky: 15103, ratio: 24 },
    { name: "Kayseri", population: 1421455, lucky: 152403, ratio: 9 },
    { name: "Kırklareli", population: 361737, lucky: 12858, ratio: 28 },
    { name: "Kırşehir", population: 243042, lucky: 5994, ratio: 40 },
    { name: "Kocaeli", population: 1997258, lucky: 102803, ratio: 19 },
    { name: "Konya", population: 2250020, lucky: 142432, ratio: 15 },
    { name: "Kütahya", population: 576688, lucky: 11168, ratio: 51 },
    { name: "Malatya", population: 806156, lucky: 43846, ratio: 18 },
    { name: "Manisa", population: 1450616, lucky: 65112, ratio: 22 },
    { name: "Kahramanmaraş", population: 1168163, lucky: 29673, ratio: 39 },
    { name: "Mardin", population: 854716, lucky: 18219, ratio: 46 },
    { name: "Muğla", population: 1000773, lucky: 20873, ratio: 47 },
    { name: "Muş", population: 411117, lucky: 3426, ratio: 119 },
    { name: "Nevşehir", population: 304962, lucky: 8710, ratio: 35 },
    { name: "Niğde", population: 362071, lucky: 15820, ratio: 22 },
    { name: "Ordu", population: 761400, lucky: 16411, ratio: 46 },
    { name: "Rize", population: 344359, lucky: 13465, ratio: 25 },
    { name: "Sakarya", population: 1042649, lucky: 20690, ratio: 50 },
    { name: "Samsun", population: 1356079, lucky: 80476, ratio: 16 },
    { name: "Siirt", population: 331070, lucky: 8912, ratio: 37 },
    { name: "Sinop", population: 216460, lucky: 2652, ratio: 81 },
    { name: "Sivas", population: 635889, lucky: 19970, ratio: 31 },
    { name: "Tekirdağ", population: 1081065, lucky: 97732, ratio: 11 },
    { name: "Tokat", population: 597861, lucky: 9537, ratio: 62 },
    { name: "Trabzon", population: 811901, lucky: 59240, ratio: 13 },
    { name: "Tunceli", population: 83443, lucky: 1739, ratio: 47 },
    { name: "Şanlıurfa", population: 2115256, lucky: 28235, ratio: 74 },
    { name: "Uşak", population: 369433, lucky: 10024, ratio: 36 },
    { name: "Van", population: 1149342, lucky: 26150, ratio: 43 },
    { name: "Yozgat", population: 419095, lucky: 12161, ratio: 34 },
    { name: "Zonguldak", population: 591204, lucky: 26197, ratio: 22 },
    { name: "Aksaray", population: 423011, lucky: 13444, ratio: 31 },
    { name: "Bayburt", population: 81910, lucky: 2224, ratio: 36 },
    { name: "Karaman", population: 254919, lucky: 11117, ratio: 22 },
    { name: "Kırıkkale", population: 278703, lucky: 9155, ratio: 30 },
    { name: "Batman", population: 620278, lucky: 14274, ratio: 43 },
    { name: "Şırnak", population: 537762, lucky: 9428, ratio: 57 },
    { name: "Bartın", population: 198979, lucky: 6467, ratio: 30 },
    { name: "Ardahan", population: 96161, lucky: 2498, ratio: 38 },
    { name: "Iğdır", population: 201314, lucky: 4279, ratio: 47 },
    { name: "Yalova", population: 276050, lucky: 15642, ratio: 17 },
    { name: "Karabük", population: 243614, lucky: 13788, ratio: 17 },
    { name: "Kilis", population: 142792, lucky: 3942, ratio: 36 },
    { name: "Osmaniye", population: 548556, lucky: 9366, ratio: 58 },
    { name: "Düzce", population: 395679, lucky: 9034, ratio: 43 },
];

const ul_city_list = document.querySelector("ul.city-list")
const div_dropdown_message_city = document.querySelector("div.dropdown-message-city");
const div_dropdown_city = document.querySelector("div.dropdown-city");
const tr_value = document.querySelector("tr.value");

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

const li_city = document.querySelectorAll("li.city");

console.log(li_city)

li_city.forEach(li => {
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

        tr_value.innerHTML = `
            <td>${selected_population}</td>
            <td>${selected_lucky}</td>
            <td>${selected_ratio} kişiden yalnızca 1'i verimli internete erişebiliyor</td>
        `

        div_dropdown_city.style.display = "none";
        city_dropdown_toggle = true;
    })
})