function getAwards() {
    return `
    <div class="main-container">
        <div class="pageMainImage">
            <h1 class="titleH1">AWARDS</h1>
            <h2 class="titleH2" id="phrase"></h2>
            <img id="pageImg">
        </div>

        <div class="titles" id="titles"></div>
    </div>
    `;
}


function loadAwards() {
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/awards.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("phrase").innerHTML = obj.phrase;
            document.getElementById("pageImg").src = obj.mainImg;
            
            var arr = obj.awards;
            var text = "";
            for (i = 0; i < arr.length; i += 2) {
                text += "<div class=\"awardInfo\">";
                text += "<div class=\"clubInfoItem\">";
                text += "<img src=\"" + arr[i].img + "\">";
                text += "<h3>" + arr[i].title + "</h3>";
                text += "<p>" + arr[i].years + "</p>";
                text += "</div>";

                text += "<div class=\"clubInfoItem\">";
                text += "<img src=\"" + arr[i + 1].img + "\">";
                text += "<h3>" + arr[i + 1].title + "</h3>";
                text += "<p>" + arr[i + 1].years + "</p>";
                text += "</div>";
                text += "</div>";			
            }
            document.getElementById("titles").innerHTML = text;
        }
    };
}