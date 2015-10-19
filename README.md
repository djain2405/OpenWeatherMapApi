# OpenWeatherMapApi
A small Web App which queries the OpenWeatherMap Api to determine lattitude, longitude & weather conditions for a place.

The Framework used is Nodejs Express, which queries the OpenWeatherMap Api and renders the result in the form of a Json Object.
This Json Object is then parsed to get the specific information.

- To start the nodejs server, please use the following command:<br>
<code>node query.js</code>
- Open <code>query.html</code> in the browser
- Enter the city name or the zip code and the units in which you want to see the temperature - Celsius, Fahrenheit or Kelvin
- Press Submit to see the results
- In case there is no data found for the city or the zipcode entered, an error, no data found statement is shown.

