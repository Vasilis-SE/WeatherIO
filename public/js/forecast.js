const forecasForm = document.getElementById("forecast-form");
forecasForm.addEventListener("submit", (e) => {
	e.preventDefault();
	document.getElementById("results-area").style.display = "none";

	let address = document.getElementById("locationAddr").value; 
	if(address == "") {
		return console.log("You need to enter a valid address");
	}

	fetch('/weather?address='+address).then((response) => {
		response.json().then((data) => {
			document.getElementById("location-res").innerHTML = data.location;
			document.getElementById("temperature-res").innerHTML = data.temperature;
			document.getElementById("rainperc-res").innerHTML = data.rain_perc;
			
			document.getElementById("results-area").style.display = "block";
		});
	});
});



