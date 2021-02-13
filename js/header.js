function loadHeader() {
	var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/header.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var socials = obj.social;
			var sponsors = obj.sponsors;

			var i;
			for(i = 0; i < socials.length; i++) {
				document.getElementById("upperIcons").innerHTML += `
				<li>
					<a href="` + socials[i].link  + `" target="_blank">
						<img src="` + socials[i].img + `" alt="` + socials[i].name  + `"/>
					</a>
				</li>
				`;
			}

			for(i = 0; i < sponsors.length; i++) {
				document.getElementById("upperSponsors").innerHTML += `
				<a href="` + sponsors[i].link  + `" target="_blank">
					<img src="` + sponsors[i].img + `" class="sponsorsLogo" />
				</a>
				`;
			}
        }
        
    };
}
