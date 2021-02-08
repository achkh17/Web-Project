function getAccreditations() {
    return `
    <div class="main-container">

        <div class="pageMainImage">
            <div class="centerTitle">
                <h1 class="titleH1">ACCREDITATIONS</h1>
                <h2 class="titleH2" id="phrase"></h2>
            </div>

            <img id="mainImg">
        </div>

        <div class="center-main">

            <div class="tab">
                <button class="tablinks" onclick="openTab(event, 'info1')" id="defaultTab">ACCREDITATIONS</button>
                <button class="tablinks" onclick="openTab(event, 'info2')">DISABLED FANS</button>
            </div>

            <div id="info1" class="tabcontent"></div>
            <div id="info2" class="tabcontent"></div>

        </div>

    </div>
    `;
}

function loadAccreditations() {
    document.title = "AC Milan Accreditations";
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/accreditations.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("phrase").innerHTML = obj.phrase;
            document.getElementById("mainImg").src = obj.mainImg;

            var arr = obj.text;
            for (i = 0; i < arr.length; i++) {
                document.getElementById("info" + (i + 1)).innerHTML = arr[i];
            }
        
            document.getElementById("defaultTab").click();      
        }
    };
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}