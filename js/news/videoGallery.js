function getVideoGallery() {
    return `
    <div class="main-container">
        <div class="pageMainImage">
        <h1 class="titleH1">VIDEO GALLERY</h1>
        </div>

        <div class="center-main">
        <div id="videoGall"></div>
        </div>

        <div class="clearfix"></div>
    </div>`;
}

function loadVideoGallery() {
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/videoGallery.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var vedeoArr = obj.videos;

            var photos = document.getElementById("videoGall");
            for (i = 0; i < vedeoArr.length; i++) {
            photos.innerHTML += `
            <div class="responsiveVideo">
                <div class="gallery">

                <iframe width="100%" height="350px" src="` + vedeoArr[i].video + `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>

                <div class="desc">` + vedeoArr[i].text + `</div>
                </div>
            </div>
            `;
            }
        }
    };
}