function getHistory() {
    return `
    <div class="main-container">

        <div class="pageMainImage">
            <h1 class="titleH1">HISTORY</h1>
            <h2 class="titleH2" id="phrase"></h2>
        <img id="pageImg">
        <p class="KilpinPhrase" id="KilpinPhrase"></p>
    </div>

        <div class="center-main">
            <div id="text"></div>

        <!-- Club info -->
        <div class="clubInfo">

            <div class="clubInfoItem">

                <img src="/images/main/clubInfo1.png">
                <h3>AWARDS</h3>
                <p>A blast from the past: the great victories and unforgettable successes</p>

                <a href="#/club/awards">
                    <button class="shopItemButton">
                        <h3>DISCOVER MORE</h3>
                    </button>
                </a>
                
            </div>

            <div class="clubInfoItem">

                <img src="/images/main/clubInfo2.png">
                <h3>CLUB MANAGEMENT</h3>
                <p>People who build the club and make Milan glorious behind the curtains</p>

                <a href="#/club/management">
                    <button class="shopItemButton">
                        <h3>DISCOVER MORE</h3>
                    </button>
                </a>
                
            </div>
            
        </div>
            
        </div>

    </div>`;
}

function loadHistory() {
    document.title = "AC Milan History";
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/history.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("phrase").innerHTML = obj.phrase;
            document.getElementById("KilpinPhrase").innerHTML = obj.KilpinPhrase;
            document.getElementById("pageImg").src = obj.mainImg;

            var arr = obj.paragraphs;
            var images = obj.images;
            var text = "";
            for (i = 0; i < arr.length; i++) {
                text += arr[i];
                if(images.length > i) text += "<img src=\"" + images[i] + "\">";
            }
            document.getElementById("text").innerHTML = text;
        }
    };
}