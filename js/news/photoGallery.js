function getPhotoGallery() {
    return `
    <div class="main-container">

    <div id="headerSpace"></div>

    <div class="pageMainImage">
      <h1 class="titleH1">PHOTO GALLERY</h1>
    </div>

    <div class="center-main">
      <div id="photoGall"></div>
    </div>

    <div class="clearfix"></div>
    <div id="footerSpace"></div>

  </div>`;
}

function loadPhotoGallery() {
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/photoGallery.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var arr = obj.photos;

            var photos = document.getElementById("photoGall");
            for (i = 0; i < arr.length; i++) {
            photos.innerHTML += `
            <div class="responsivePhoto">
                <div class="gallery">
                <a onclick="galleryClicked(this)" href="#/news/photoPage" id="` + arr[i].id + `">
                    <img src="` + arr[i].img + `">
                </a>
                <div class="desc">` + arr[i].text + `</div>
                </div>
            </div>
            `;
            }
        }
    };
}

function galleryClicked(e) {
    localStorage.setItem("photoId", e.id);
}


var slideIndex = 1;
  // showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }