function getPhotoPage() {
    return `
    <div class="main-container center-main pos">
        <h2 class="titleH1">Photo Gallery</h2>

        <div id="gallerySlides"></div>
            
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>

        <div class="caption-container">
            <p id="caption"></p>
        </div>

        <div class="photoRow" id="photoRow"></div>

        <h1 class="titleH1" id="photoTitle"></h1>
        <h1 class="titleH2" id="photoDate"></h1>

        </div>`;
}



function loadPhotoPage() {
    var xhttp = new XMLHttpRequest();
      xhttp.overrideMimeType("application/json");
      xhttp.open("GET", "/json/gallery/" + localStorage.getItem("photoId") + ".json", true);
      xhttp.send();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var obj = JSON.parse(this.responseText);
          var slide = document.getElementById("gallerySlides");
          var row = document.getElementById("photoRow");

          for (i = 0; i < obj.photos.length; i++) {
            slide.innerHTML += `
              <div class="mySlides">
                <div class="numbertext">` + (i + 1) + `/ 6</div>
                <img src="` + obj.photos[i].img + `" class="imgWidth">
              </div>
            `;

            row.innerHTML += `
              <div class="photoColumn">
                <img class="demo imgWidth cursor" src="` + obj.photos[i].img + `" onclick="currentSlide(` + (i + 1) + `)" 
                alt="` + obj.photos[i].text + `">
              </div>
            `;
          }

          document.getElementById("photoTitle").innerHTML = obj.title;
          document.getElementById("photoTitle").style.textAlign = "left";
          document.getElementById("photoDate").innerHTML = obj.date;

          showSlides(1);
        }
      };
}