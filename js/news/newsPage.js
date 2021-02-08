function getNewsPage() {
    return `<div class="main-container">
 		<img id="mainImg">
 		<div id="newsItem" class="center-main">
 			<h1 class="newsTitle"></h1>
 			<p id="param1"></p>
 			<img id="lowerImg">
 			<p id="param2"></p>
 		</div>
 	</div>`;
}

function loadNewsPage() {
    document.title = "AC Milan News";
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/news/" + localStorage.getItem("newsId") + ".json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);

            document.getElementById("newsItem").querySelector("h1").innerHTML = obj.title;
            document.getElementById("param1").innerHTML = obj.param1.replace("\\n", "<br/>");
            document.getElementById("mainImg").src = obj.mainImg;
            document.getElementById("param2").innerHTML = obj.param2;
            document.getElementById("lowerImg").src = obj.img;
        }
    };

}