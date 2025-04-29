const apiKey = '1d342ae9b0b6856504e9dad6fe843946';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial';

    const searchBox = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search button');


    async function checkWeather(city) {
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°F';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' MPH';
    }

        searchBtn.addEventListener('click', () => {
            checkWeather(searchBox.value);
        });