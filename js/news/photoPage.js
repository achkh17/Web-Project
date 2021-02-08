function getPhotoPage() {
    return `
    <div class="main-container center-main pos">
        <h2 class="titleH1">Photo Gallery</h2>

        <div id="gallerySlides"></div>
            
        <a class="prev" onclick="plusPhotoSlides(-1)">❮</a>
        <a class="next" onclick="plusPhotoSlides(1)">❯</a>

        <div class="caption-container">
            <p id="caption"></p>
        </div>

        <div class="photoRow" id="photoRow"></div>

        <h1 class="titleH1" id="photoTitle"></h1>
        <h1 class="titleH2" id="photoDate"></h1>

        </div>`;
}



function loadPhotoPage() {
    document.title = "AC Milan PhotoGallery";
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
                <img class="photoDemo imgWidth cursor" src="` + obj.photos[i].img + `" onclick="currentPhotoSlide(` + (i + 1) + `)" 
                alt="` + obj.photos[i].text + `">
              </div>
            `;
          }

          document.getElementById("photoTitle").innerHTML = obj.title;
          document.getElementById("photoTitle").style.textAlign = "left";
          document.getElementById("photoDate").innerHTML = obj.date;

          showPhotoSlides(1);
        }
      };
}

var slideInd = 1;

function plusPhotoSlides(n) {
  showPhotoSlides(slideInd += n);
}

function currentPhotoSlide(n) {
  showPhotoSlides(slideInd = n);
}

function showPhotoSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var photoDots = document.getElementsByClassName("photoDemo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideInd = 1}
  if (n < 1) {slideInd = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < photoDots.length; i++) {
      photoDots[i].className = photoDots[i].className.replace(" active", "");
  }
  slides[slideInd-1].style.display = "block";
  console.log(photoDots[slideInd-1]);
  photoDots[slideInd-1].className += " active";
  captionText.innerHTML = photoDots[slideInd-1].alt;
}