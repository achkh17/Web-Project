function getVenues() {
    return `
    <div class="main-container">
        <h1 class="titleH1">AC MILAN VENUES</h1>
        <div class="locations" id="locations"></div>
    </div>
    `;
}

function loadVenues() {
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/venues.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var arr = obj.venues;
            var text = "";
            for (i = 0; i < arr.length; i++) {
                text += "<div class=\"location\">";
                text += "<img src=\"" + arr[i].img + "\">";
                text += "<div class=\"discoverInfo\">";
                text += "<h2>" + arr[i].name + "</h2>";
                text += "<p>" + arr[i].desc + "</p>";
                text += "<a href=\"" + arr[i].link + "\" target=\"_blank\"><button class=\"shopItemButton\"><h3>DISCOVER MORE</h3></button></a>";
                text += "</div>";
                text += "</div>";			
            }
            document.getElementById("locations").innerHTML = text;
        }
    };
}