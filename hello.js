var express    = require('express');
var app = express();
var needle = require('needle');
var url = "http://api.openweathermap.org/data/2.5/weather";
var cityname;
var apikey = "";
var res;
var var3;
app.get('/', function (req, res)
{
		if (req.query.criteria == 'CityName')
		{
			console.log(req.query.criteria);
			var1 = req.query.city;
			var2 = '';
		}
		else
		{
			console.log(req.query.criteria);
			var1 = '';
			var2 = req.query.city;
		}
		
		
		if(req.query.unittest == 'Celsius')
		{
			console.log("Celsius");
			var3 = 'metric';
		}
		else if (req.query.unittest == 'Farenheit')
		{
			console.log("FH");
			var3 = 'imperial';
		}
		else 
		{
			console.log("default");
			var3 = '';
		}
	
		//console.log(var3);
		
	var data = {
	
		q : var1,
		zip : var2,
		units : var3,
		APPID : apikey
	
	}
	//console.log(data);
	cityname = req.query.city;
	var queryString = url+cityname+"&APPID="+apikey;
	console.log(queryString);
	needle.request('get', url, data, function(error, response) {
	  if (!error && response.statusCode == 200)
		//console.log(response.body);
			var img = '<img src="http://openweathermap.org/img/w/'+response.body.weather[0].icon+'.png">'
			res.send('<p> Weather Condition for <b>'+ response.body.name+'</b> </p><p>Current Longitude is <b>' + response.body.coord.lon + '</b> </p><p>Current Latitude is <b>' + response.body.coord.lat + '</b></p><p>' + img + '</p><p>Current condition is <b>' + response.body.weather[0].main + ' </b></p><p>Temperature in ' + req.query.unittest + ' is : </p><p>Current temperature is <b>' + response.body.main.temp  + '</b></p><p>Min temperature is <b>' + response.body.main.temp_min + '</p><p>Max temperature is <b>' + response.body.main.temp_max)
			
});
});
	
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});