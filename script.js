const countries = {
  'Afghanistan': 'Афганістан',
  'Albania': 'Албанія',
  'Algeria': 'Алжир',
  'Andorra': 'Андорра',
  'Anguilla': 'Анґілла',
  'Antarctica': 'Антарктика',
  'Antigua And Barbuda': 'Антиґуа і Барбуда',
  'Argentina': 'Аргентина',
  'Armenia': 'Вірменія',
  'Aruba': 'Аруба',
  'Australia': 'Австралія',
  'Austria': 'Австрія',
  'Azerbaijan': 'Азербайджан',
  'Bahamas': 'Багами',
  'Bahrain': 'Бахрейн',
  'Bangladesh': 'Бангладеш',
  'Barbados': 'Барбадос',
  'Belarus': 'Білорусь',
  'Belarussia': 'Білорусія',
  'Belgium': 'Бельгія',
  'Belize': 'Беліз',
  'Benin': 'Бенін',
  'Bermuda': 'Бермуда',
  'Bhutan': 'Бутан',
  'Bolivia': 'Болівія',
  'Bosnia and Herzegovina': 'Боснія і Герцеґовина',
  'Botswana': 'Ботсвана',
  'Brazil': 'Бразилія',
  'Brunei Darussalam': 'Бруней Даруссалам',
  'Bulgaria': 'Болгарія',
  'Burkina Faso': 'Буркіна Фасо',
  'Burundi': 'Бурунді',
  'Cambodia': 'Камбоджа',
  'Cameroon': 'Камерун',
  'Canada': 'Канада',
  'Cape Verde': 'Капо Верде',
  'Cayman Islands': 'Кайманові острови',
  'Central African Republic': 'Центральна Африканська Республіка',
  'Chad': 'Чад',
  'Chile': 'Чилі',
  'China': 'Китай',
  'Christmas Island': 'Різдвяні острови',
  'Colombia': 'Колумбія',
  'Comoros': 'Комори',
  'Congo': 'Конго',
  'Cook Islands': 'Кука, острови',
  'Costa Rica': 'Ко ста Ріка',
  'Croatia': 'Хорватія',
  'Cyprus': 'Кіпр',
  'Czech Republic': 'Че ська Респу бліка',
  'Denmark': 'Данія',
  'Djibouti': 'Джибу ті',
  'Dominica': 'Домініка',
  'Dominican Republic': 'Домініка нська Республіка',
  'East Timor': 'Східний Тимор',
  'Ecuador': 'Еквадор',
  'Egypt': 'Єгипет',
  'El Salvador': 'Ель Сальвадор',
  'England': 'Англія',
  'Equatorial Guinea': 'Екваторіальна Ґвінея',
  'Eritrea': 'Еритрея',
  'Espana': 'Іспанія',
  'Estonia': 'Естонія',
  'Ethiopia': 'Ефіопія',
  'Falkland Islands': 'Фолклендські острови',
  'Faroe Islands': 'Фарерські острови ',
  'Fiji': 'Фіджі',
  'Finland': 'Фінляндія',
  'France': 'Франція',
  'Gabon': 'Ґабон',
  'Gambia': 'Ґамбія',
  'Georgia': 'Грузія',
  'Germany': 'Німеччина',
  'Ghana': 'Ґана',
  'Gibraltar': 'Ґібралтар',
  'Great Britain': 'Велика Британія',
  'Greece': 'Греція',
  'Greenland': 'Ґренландія',
  'Grenada': 'Ґренада',
  'Guadeloupe': 'Ґваделупа',
  'Guam': 'Ґуам',
  'Guatemala': 'Ґватемала',
  'Guinea': 'Ґвінея',
  'Guinea-Bissau': 'Ґвінея-Біссау',
  'Guyana': 'Ґвіа  на',
  'Haiti': 'Гаїті',
  'Honduras': 'Гондурас',
  'Hong Kong': 'Гон-Конґ',
  'Hungary': 'Угорщина',
  'Iceland': 'Ісландія',
  'India': 'Індія',
  'Indonesia': 'Індонезія',
  'Iran': 'Іран',
  'Iraq': 'Ірак',
  'Ireland': 'Ірландія',
  'Israel': 'Ізраїль',
  'Italy': 'Італія',
  'Jamaica': 'Ямайка',
  'Japan': 'Японія',
  'Jordan': 'Іорданія',
  'Kazakhstan': 'Казахстан',
  'Kenya': 'Кенія',
  'Kiribati': 'Кірібаті',
  'Korea, Republic of': 'Корейська Республіка',
  'Korea (South)': 'Корея (Південна)',
  'Kuwait': 'Кувейт',
  'Kyrgyzstan': 'Киргизстан',
  'Latvia': 'Латвія',
  'Lebanon': 'Ливан',
  'Lesotho': 'Лесото',
  'Liberia': 'Ліберія',
  'Liechtenstein': 'Ліхтенштейн',
  'Lithuania': 'Литва',
  'Luxembourg': 'Люксембург',
  'Macau': 'Макао',
  'Macedonia': 'Македонія',
  'Madagascar': 'Мадагаскар',
  'Malawi': 'Малаві',
  'Malaysia': 'Малайзія',
  'Maldives': 'Мальдиви',
  'Mali': 'Малі',
  'Malta': 'Мальта',
  'Marshall Islands': 'Маршаллові острови',
  'Martinique': 'Мартиніка',
  'Mauritania': 'Мавританія',
  'Mexico': 'Мексика',
  'Monaco': 'Монако',
  'Mongolia': 'Монголія',
  'Morocco': 'Марокко',
  'Mozambique': 'Мозамбік',
  'Namibia': 'Намібія',
  'Nauru': 'Науру',
  'Nepal': 'Непал',
  'Netherlands': 'Нідерланди',
  'New Caledonia': 'Нова Каледонія',
  'New Zealand': 'Нова Зеландія',
  'Nicaragua': 'Нікарагуа',
  'Nigeria': 'Нігерія',
  'Northern Ireland': 'Північна Ірландія',
  'Norway': 'Норвегія',
  'Oman': 'Оман',
  'Pakistan': 'Пакістан',
  'Palau': 'Палау',
  'Panama': 'Панама',
  'Papua New Guinea': 'Папуа Нова Ґвінея',
  'Paraguay': 'Парагвай',
  'Peru': 'Перу',
  'Philippines': 'Філіппіни',
  'Poland': 'Польща',
  'Portugal': 'Португалія',
  'Puerto Rico': 'Пуерто Ріко',
  'Qatar': 'Катар',
  'Reunion': 'Реуніон',
  'Romania': 'Румунія',
  'Russia': 'Росія',
  'Russian Federation': 'Російська Федерація',
  'Rwanda': 'Руанда',
  'Saint Lucia': 'Санта Люсія',
  'Saint Vincent and the Grenadines': 'Сент Вінсент і Ґренадіни',
  'Samoa (Independent)': 'Самоа',
  'San Marino': 'Сан Маріно',
  'Saudi Arabia': 'Саудівська Аравія',
  'Scotland': 'Шотландія',
  'Senegal': 'Сенегал',
  'Seychelles': 'Сейшели',
  'Sierra Leone': 'Сьєрра Леоне',
  'Singapore': 'Сингапур',
  'Slovakia': 'Словаччина',
  'Slovenia': 'Словенія',
  'Solomon Islands': 'Соломонові острови',
  'Somalia': 'Сомалі',
  'South Africa': 'Південна Африка',
  'South Korea': 'Південна Корея',
  'Spain': 'Іспанія',
  'Sri Lanka': 'Шрі Ланка',
  'Suriname': 'Сурінам',
  'Swaziland': 'Свазиленд',
  'Sweden': 'Швеція',
  'Switzerland': 'Швейцарія',
  'Taiwan': 'Тайвань',
  'Tajikistan': 'Таджикістан',
  'Tanzania': 'Танзанія',
  'Thailand': 'Таїланд',
  'Togo': 'Тоґо',
  'Tonga': 'Тонґа',
  'Trinidad': 'Тринідад',
  'Trinidad and Tobago': 'Тринідад і Тобаґо',
  'Tunisia': 'Туніс',
  'Turkey': 'Туреччина',
  'Turkmenistan': 'Туркменістан',
  'Tuvalu': 'Тувалу',
  'Uganda': 'Уґанда',
  'Ukraine': 'Україна',
  'United Arab Emirates': "Об'єднані Арабські Емірати",
  'United Kingdom': "Об'єднане Королівство",
  'United States of America': 'Сполучені Штати Америки',
  'United States': 'США',
  'Uruguay': 'Уругвай',
  'USA': 'США',
  'Uzbekistan': 'Узбекістан',
  'Vanuatu': 'Вануату',
  'Venezuela': 'Венесуела',
  'Viet Nam': "В'єтнам",
  'Wales': 'Уельс',
  'Western Sahara': 'Західна Сахара',
  'Yemen': 'Ємен',
  'Yugoslavia': 'Югославія',
  'Zambia': 'Замбія',
  'Zimbabwe': 'Зимбабве'
};

let root = document.getElementById('sold');
let list = root.querySelectorAll('.cart_level_cost_for_seller>.order');


// template view


let templates = '';
list.forEach((item) => {
  if (item.querySelector('input').checked) {

    let address = item.querySelector('.ship-to-address address');

    /*const name = address.querySelector('.name').innerText;
    const firstLine = address.querySelector('.first-line').innerText;
    const city = address.querySelector('.city').innerText;
    const state = address.querySelector('.state').innerText;
    const zip = address.querySelector('.zip').innerText;*/
    const countryName = address.querySelector('.country-name').innerText;
    const elementCountry = (!!countries[countryName]) ? `<div>--</div><div>${countries[countryName]}</div>` : '';
    //const elementTemp = `<div>${name}</div><div>${firstLine}</div><div>${city}, ${state}</div><div>${zip}</div><div>${countryName}</div>`;
    const elementTemp = address.innerHTML;


    // [] => all products on one address
    const itemsList = item.querySelectorAll('.items .item');
    let variationsAndTypes = '';
    if (!!itemsList.length) {
      itemsList.forEach((item, index) => {

        const variationTemp = item.querySelector('.item-details>h3>a').innerText.match(/\*\w+/g);

        const variation = variationTemp[0].substring(1);
        variationsAndTypes += `${(index !== 0)? '<span>   |   </span>': ''}<span>${variation}:</span>`;
        const typesList = item.querySelectorAll('.item-details .item-selected-options>li');
        typesList.forEach((type, index) => {

          const typeTemp = type.innerText.replace(/\s/g, '').match(/(\:\w+$)|(\-\w+)/g);
          const string = typeTemp[0].substring(1, 4);

          variationsAndTypes += `${(index !== 0)? ',': ''}<span>${string}</span>`;
        });

      });
    }


      templates += `<div style="text-align: left; width: 100vw; height: 100vh; display: flex;"><div style="border: 1px solid; margin-left: 300px; width: 250px; height: 770px; display: flex;"><div style="width: 64%; height: 100%; position: relative;"><div style="width: 100%; height: 388px;">
<div id="types" style="writing-mode: vertical-lr; position: absolute; left: -15px; font-size: 11px; bottom: 0px;">${variationsAndTypes}</div>
</div><div style="position: relative; width: 100%; height: 370px;"><div style="right: -15px; border-top: 1px solid; border-right: 1px solid; width: 173px; font-size: 12px; font-weight: 600; top: 34px; height: 335px; position: absolute; writing-mode: vertical-rl;"><div style="padding-top: 2px; background: rgb(158, 158, 158); border-left: 1px solid;">To:</div><div id="temp" style="padding-top: 3px; margin-right: 23px;">${elementTemp}${elementCountry}</div></div></div></div><div style="width: 36%; height: 100%;"><div style="font-size: 12px; border-bottom: 1px solid; border-left: 1px solid; font-weight: 600; width: 100%; height: 185px; writing-mode: vertical-rl;"><div style="padding-top: 3px; background: rgb(158, 158, 158); border-right: 1px solid;">From:</div><div style="padding-top: 3px; padding-right: 8px; border-right: 1px solid;"><div>Andriy Proforuk</div><div>Sobornosti 31, 34</div><div>Lutsk Volyn 43000</div><div>Ukraine</div></div></div><div style="height: 573px; width: 100%; writing-mode: vertical-rl;"><div style="font-size: 34px; font-weight: 600; padding: 44px 14px 0px 0px;"><span>IMPRIMES</span><span style="padding-top: 24px;">PAR AVION</span></div><div style="padding-top: 92px; font-size: 12px; font-weight: 600;">БАНДЕРОЛЬ</div></div></div></div></div>`;

  }
});

document.body.innerHTML = templates;