const apiKey = '1d342ae9b0b6856504e9dad6fe843946';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial';

    const searchBox = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search button');
    const weatherIcon = document.querySelector('.weather-icon');
    const weatherDescription = document.querySelector('.weather-description');


    async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    const data = await response.json();

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        return;
    }

    else {
        
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°F';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' MPH';
    
            if (data.weather[0].main == 'Clouds') {
                weatherIcon.src = 'assets/images/clouds.png';
            }
            else if (data.weather[0].main == 'Clear') {
                weatherIcon.src = 'assets/images/clear.png';
            }
            else if (data.weather[0].main == 'Rain') {
                weatherIcon.src = 'assets/images/rain.png';
            }
            else if (data.weather[0].main == 'Drizzle') {
                weatherIcon.src = 'assets/images/drizzle.png';
            }
            else if (data.weather[0].main == 'Mist') {
                weatherIcon.src = 'assets/images/mist.png';
            }
            else if (data.weather[0].main == 'Snow') {
                weatherIcon.src = 'assets/images/snow.png';
            }
    
            document.querySelector('.weather').style.display = 'block';
            document.querySelector('.error').style.display = 'none';
        }
    }
    
    searchBtn.addEventListener('click', () => {
        if (searchBox.value.trim() !== '') {
            checkWeather(searchBox.value);
        }
    });
    searchBox.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && searchBox.value.trim() !== '') {
            checkWeather(searchBox.value);
        }
    });