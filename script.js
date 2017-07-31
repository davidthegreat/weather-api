	$(document).ready(function(){
		$('#zipcode').submit(function(){
			var cityZip = $('#zip').val();
			var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + cityZip + "&APPID=";	
			$.get(url, function (weather) {
			    WEATHER = weather;
			    console.log(weather);
			    console.log(weather.main.temp);
			    $('#right').append("<div class='weather'>"+ "<fieldset>" + "<legend>" + weather.name + "</legend>" + "<br>" + "Weather Description : " + weather.weather[0].description + "<br>" + "Temperarture : " + weather.main.temp + "</fieldset>" + "</div>");
			});
			return false
		});	
		$('#citystate').submit(function(){
			var City = $('#city').val();
			var State = $('#state').val();
			var url = "http://api.openweathermap.org/data/2.5/weather?q=" + "livingston" + ",us-" + "california" + "&APPID=";
			$.get(url, function (weather) {
				console.log(weather)
			    WEATHER = weather;
			    console.log(weather);
			    console.log(weather.main.temp);
			
				$('#right').append("<div class='weather'>"+ "<fieldset>" + "<legend>" + weather.name + "</legend>" + "<br>" + "Weather Description : " + weather.weather[0].description + "<br>" + "Temperarture : " + weather.main.temp + "</fieldset>" + "</div>");
			});
			return false 
		});

   //  $.ajax({
   //      url: "http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=eeccc27f766fba0b0d53c24f16b883df",
  
   //    }).done(function(repos){
   //      console.log(repos)
   //      console.log(repos.weather)
   //      console.log(repos.name)
   //      console.log(repos.main)
	  // });

		$(document).on('click','.weather', function(){
			$(this).hide();
		
		});
		
			
			
			
	});