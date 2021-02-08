function getManagement() {
    return `
    <div class="main center-main">
        <div class="pageMainImage">
            <h1 class="titleH1">Management</h1>
            </div>
        <div id="management"></div>
    </div>
    `;
}

function loadManagement() {
    document.title = "AC Milan Management";
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/management.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var arr = obj.management;

            for (i = 0; i < arr.length; i++) {
            document.getElementById("management").innerHTML += `
            <div class="responsive">
                <div class="managementGallery">
                    <img src="` + arr[i].img + `">
                    <p class="managementName">` + arr[i].name + `</p>
                    <div class="managementPosition">` + arr[i].position + `</div>
                    <a href="` + arr[i].resume + `" target="_blank" class="managementPosition resume">see the resume</a>
                </div>
            </div>
            `;
            }
        }
    };
}