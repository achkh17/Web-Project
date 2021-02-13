
function getHomePage() {
    return `
    <!-- Only homepage is made this way, because I made it first, in other pages it's imporoved and almost everything is added from js -->
    <div class="main" id="main">
        <!-- Slider -->
        <div class="slideshow-container" id="slideshow-container">

            <div class="slide" id="slide1">
                <div class="sildeBackground"></div>
                <img class="slideImage" width="1280" height="600" id="bla">
                <div class="slideText" id="slide1Text">
                    <h2 class="upperSlideText"></h2>

                    <div class="lowerSlidePart">
                        <p class="lowerSlideText"></p>

                        <div class="slideButton">
                            <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="#">Discover more</a>
                        </div>
                    </div>

                </div>

            </div>

            <div class="slide" id="slide2">
                <div class="sildeBackground"></div>
                <img class="slideImage" width="1280" height="600">
                <div class="slideText" id="slide2Text">
                    <h2 class="upperSlideText"></h2>

                    <div class="lowerSlidePart">
                        <p class="lowerSlideText"></p>

                        <div class="slideButton">
                            <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="#">Discover more</a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="slide" id="slide3">
                <div class="sildeBackground"></div>
                <img class="slideImage" width="1280" height="600">
                <div class="slideText" id="slide3Text">
                    <h2 class="upperSlideText"></h2>

                    <div class="lowerSlidePart">
                        <p class="lowerSlideText"></p>

                        <div class="slideButton">
                            <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="#">Discover more</a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="slide" id="slide4">
                <div class="sildeBackground"></div>
                <img class="slideImage" width="1280" height="600">
                <div class="slideText" id="slide4Text">
                    <h2 class="upperSlideText"></h2>

                    <div class="lowerSlidePart">
                        <p class="lowerSlideText"></p>

                        <div class="slideButton">
                            <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="#">Discover more</a>
                        </div>
                    </div>

                </div>
            </div>

            <button class="slideLeftButton" onclick="plusDivs(-1)">&#10094;</button>
            <button class="slideRightButton" onclick="plusDivs(1)">&#10095;</button>

            <div class="slideshowDots">
                <span class="dot" onclick="currentDiv(1)"></span>
                <span class="dot" onclick="currentDiv(2)"></span>
                <span class="dot" onclick="currentDiv(3)"></span>
                <span class="dot" onclick="currentDiv(4)"></span>
            </div>
        </div>

        <!-- Standings table -->
        <div class="standings">
            <div class="standingsSection">
                <h2 class="matchText">Last match</h2>
                <div class="matches">
                    <div class="matchScore">

                        <div class="matchDay">
                            <span class="centerMatchDayNum" id="matchDayNum"></span>
                            <div class="matchDayDate" id="matchDayDate"></div>	
                        </div>

                        <div class="matchesFirstTeam">
                            <span class="matchesTeamText" id="team1"></span>
                            <img class="matchesTeamLogo" id="teamImg1">
                        </div>
                        <div class="matchesScore" id="score"></div>
                        <div class="matchesSecodTeam">
                            <span class="matchesTeamText" id="team2"></span>
                            <img class="matchesTeamLogo" id="teamImg2">
                        </div>

                        
                    </div>
                    <a class="moreMatchesLink" href="#/season/schedules"  onclick="scheduleClicked(this)" id="2">See all matches</a>

                </div>
            </div>

            <!-- <div class="standingsLine"></div> -->


            <div class="standingsSection">
                <h2 class="matchText">Standings</h2>
                <div class="seriaAStandings">

                    <table class="standingsTable">
                        <thead class="standingsThread">
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>p</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                        </thead>

                        <tbody class="standingsTbody" id="standingsTable">
                        <tr>
                            <td class="standingsNum"></td>
                            <td class="standingsLogo">
                                <img>
                            </td>
                            <td class="standingsTeam"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="standingsNum"></td>
                            <td class="standingsLogo">
                                <img>
                            </td>
                            <td class="standingsTeam"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="standingsNum"></td>
                            <td class="standingsLogo">
                                <img>
                            </td>
                            <td class="standingsTeam"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="standingsNum"></td>
                            <td class="standingsLogo">
                                <img>
                            </td>
                            <td class="standingsTeam"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>							
                    </table>

                    <a class="moreMatchesLink" href="#/season/standings"  onclick="standingsClicked(this)" id="2">See the standings</a>
                </div>
            </div>
            
        </div>


        <!-- Latest News -->
        <div class="lastestNews" id="allLatestNews"></div>

        <!-- Photo Gallery -->
        <div class="photos">
            <h2 class="lastNewsText">Photo Gallery</h2>
            <a href="#/news/photoGallery" class="lastNewsSeeMore">See More</a>
            

            <div class="photoGallery"> 
                <div class="photoGalleryColumn">

                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "9">
                            <img class="galleryImage" id="galleryImage1">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>

                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "2">
                            <img class="galleryImage" id="galleryImage2">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>

                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "7">
                            <img class="galleryImage" id="galleryImage3">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>
                </div>

                <div class="photoGalleryColumn">
                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "2">
                            <img class="galleryImage" id="galleryImage4">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>

                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "3">
                            <img class="galleryImage" id="galleryImage5">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>

                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "8">
                            <img class="galleryImage" id="galleryImage6">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>

                </div>  
                <div class="photoGalleryColumn">
                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "4">
                            <img class="galleryImage" id="galleryImage7">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>

                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "9">
                            <img class="galleryImage" id="galleryImage8">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>

                </div>
                <div class="photoGalleryColumn">
                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "1">
                            <img class="galleryImage" id="galleryImage9">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>

                    <div class="galleryDiv">
                        <a onclick="photoClicked(this)" href="#/news/photoPage" id=
                        "4">
                            <img class="galleryImage" id="galleryImage10">
                            <img src="/images/main/galleryIcon.png" class="galleryIcon">
                        </a>
                    </div>

                </div>
            </div>
        </div>


        <!-- Video Gallery -->
        <div class="videos">
            <h2 class="lastNewsText">Video Gallery</h2>
            <a href="#/news/videoGallery" class="lastNewsSeeMore">See More</a>

            <div class="videoGallery">
                <div class="videoGalleryDiv1" id="video1"> 
                    <a onclick="videoClicked(this)" id="1">
                        <img class="videoImage" id="videoImage1">
                        <img src="/images/main/playVideo.png" class="videoIcon">
                    </a>
                </div>

                <div class="videoGalleryDiv2" id="video2"> 
                    <a onclick="videoClicked(this)" id="2">
                        <img class="videoImage" id="videoImage2">
                        <img src="/images/main/playVideo.png" class="videoIcon">
                    </a>
                </div>

                <div class="videoGalleryDiv3" id="video3"> 
                    <a onclick="videoClicked(this)" id="3">
                        <img class="videoImage" id="videoImage3">
                        <img src="/images/main/playVideo.png" class="videoIcon">
                    </a>
                </div>

                <div class="videoGalleryDiv4" id="video4"> 
                    <a onclick="videoClicked(this)" id="4">
                        <img class="videoImage" id="videoImage4">
                        <img src="/images/main/playVideo.png" class="videoIcon">
                    </a>
                </div>

                <div class="videoGalleryDiv5" id="video5"> 
                    <a onclick="videoClicked(this)" id="5">
                        <img class="videoImage" id="videoImage5">
                        <img src="/images/main/playVideo.png" class="videoIcon">
                    </a>
                </div>
            </div>

        </div>



        <!-- App Store Ad -->
        <div class="appStore">
            <img class="appStoreImage" id="appStoreImage">
            <h2 class="downloadAppUpperText">AC MILAN OFFICIAL APP</h2>
            <p class="downloadAppText" id="appStoreText"></p>

            <div class="downlaodApp">
                <a href="https://apps.apple.com/it/app/ac-milan-official-app/id1473516867" target="_blank">
                    <img src="images/main/appStoreIcon.png" class="appStoreIcon">
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.app.acmilan" target="_blank">
                    <img src="images/main/googleStoreIcon.png" class="googleStoreIcon">
                </a>
                
            </div>
        </div>

        <div class="shopAds">
            <h2>CHRISTMAS COLLECTION</h2>
            <div class="shopItems">
                <div class="shopItem">
                    <a href="https://store.acmilan.com/it/natale.html?___from_store=en&utm_source=Sito_ACM&utm_medium=Banner_1080x1080_ITA&utm_campaign=natale" target="_blank">
                        <img class="shopItemImage" id="christmasImage1">
                    
                        <button class="shopItemButton">
                            <h3>BUY NOW</h3>
                        </button>
                    </a>
                </div>

                <div class="shopItem">
                    <a href="https://store.acmilan.com/it/natale.html?___from_store=en&utm_source=Sito_ACM&utm_medium=Banner_1080x1080_ITA&utm_campaign=natale" target="_blank">
                        <img class="shopItemImage" id="christmasImage2">

                        <button class="shopItemButton">
                            <h3>BUY NOW</h3>
                        </button>
                    </a>
                </div>

                <div class="shopItem">
                    <a href="https://store.acmilan.com/it/natale.html?___from_store=en&utm_source=Sito_ACM&utm_medium=Banner_1080x1080_ITA&utm_campaign=natale" target="_blank">
                        <img class="shopItemImage"  id="christmasImage3">

                        <button class="shopItemButton">
                            <h3>BUY NOW</h3>
                        </button>
                    </a>
                </div>
                
            </div>
            
        </div>



        <!-- Club info -->
        <div class="clubInfo">

            <div class="clubInfoItem" id="clubInfoItem1">

                <img>
                <h3></h3>
                <p></p>

                <a href="#/club/awards">
                    <button class="shopItemButton">
                        <h3>DISCOVER MORE</h3>
                    </button>
                </a>
                
            </div>

            <div class="clubInfoItem" id="clubInfoItem2">

                <img>
                <h3></h3>
                <p></p>

                <a href="#/club/management">
                    <button class="shopItemButton">
                        <h3>DISCOVER MORE</h3>
                    </button>
                </a>
                
            </div>
            
        </div>


        <div class="academyInfo" id="academyInfo">

            <img>
            <h2></h2>
            <p></p>

            <a href="#/club/academy">
                <button class="shopItemButton academyButton">
                    <h3>FIND OUT MORE</h3>
                </button>
            </a>
            <br>

        </div>

    </div>
    `;
}


function loadHomePage() {

		  // topNews
          var i;
          var arr;
		  var xhttp = new XMLHttpRequest();
		  xhttp.overrideMimeType("application/json");
		  xhttp.open("GET", "/json/topNews.json", true);
		  xhttp.send();

		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	var obj = JSON.parse(this.responseText);
				arr = obj.topNews;
				for (i = 0; i < arr.length; i++) {
					var slide = document.getElementById("slide" + (i + 1));
					slide.querySelector("img").src = arr[i].img;
					var slideText = document.getElementById("slide" + (i + 1) + "Text");
					slideText.querySelector("h2").innerHTML = arr[i].text;
					slideText.querySelector("div").querySelector("p").innerHTML = arr[i].desc;
					slideText.querySelector("div").querySelector("div").querySelector("a").id = arr[i].id;
				}

                showDivs(slideIndex);

		    }
		  };

		  // lastMatch
		  var xhttp = new XMLHttpRequest();
		  xhttp.overrideMimeType("application/json");
		  xhttp.open("GET", "/json/lastMatch.json", true);
		  xhttp.send();

		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	var obj = JSON.parse(this.responseText);
		    	document.getElementById("matchDayNum").innerHTML = obj.matchDayNum;
		    	document.getElementById("matchDayDate").innerHTML = obj.matchDayDate;
		    	document.getElementById("team1").innerHTML = obj.team1;
		    	document.getElementById("teamImg1").src = obj.img1;
		    	document.getElementById("team2").innerHTML = obj.team2;
		    	document.getElementById("teamImg2").src = obj.img2;
		    	document.getElementById("score").innerHTML = obj.score;
				
		    }
		  };

		  // standings
		  var xhttp = new XMLHttpRequest();
		  xhttp.overrideMimeType("application/json");
		  xhttp.open("GET", "/json/standings.json", true);
		  xhttp.send();



		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	var obj = JSON.parse(this.responseText);
		    	var arr = obj.standings;
				var table = document.getElementById("standingsTable");

				for (i = 0; i < arr.length; i++) {
					var row = table.rows[i];
					row.cells[0].innerHTML = arr[i].num;
					row.cells[1].innerHTML = "<img src=\"" + arr[i].logo + "\">";
					row.cells[2].innerHTML = arr[i].team;
					row.cells[3].innerHTML = arr[i].p;
					row.cells[4].innerHTML = arr[i].GD;
					row.cells[5].innerHTML = arr[i].Pts;

					if(arr[i].team == "Milan") {
						row.cells[2].style.color = "red";
						row.cells[3].style.color = "red";
						row.cells[4].style.color = "red";
						row.cells[5].style.color = "red";

						row.cells[2].style.fontWeight = "bold";
						row.cells[3].style.fontWeight = "bold";
						row.cells[4].style.fontWeight = "bold";
						row.cells[5].style.fontWeight = "bold";
					}
				}
				
		    }
		  };

		  // latestNews
		  var xhttp = new XMLHttpRequest();
		  xhttp.overrideMimeType("application/json");
		  xhttp.open("GET", "/json/lastestNews.json", true);
		  xhttp.send();

		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	var obj = JSON.parse(this.responseText);
		    	var arr = obj.news;
		    	var news = document.getElementById("allLatestNews");

				for (i = 0; i < arr.length; i++) {
                    var text = "";
                    var j;
					if(i % 5 == 0) {
                        text += "<div class=\"upperNews\">";
                        for (j = 0; j < 2; j++) {
                            text += `
                            <div class="newsItem upperNewsItem">
								<a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + j].id + `">
									<img src=\"` + arr[i + j].img + `\">
								</a>

								<div class="newsItemText">
									<div class="newsItemUpperText">` + arr[i + j].date + `</div>

									<a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + j].id + `">
										<h3 class="newsItemLowerText">` + arr[i + j].text + `</h3>
									</a>
								</div>
							</div>`;
                        }
                        text += "</div>";
                        news.innerHTML += text;
					}

					if(i % 5 == 2) {
                        text += "<div class=\"lowerNews\">";
                        for (j = 0; j < 3; j++) {
                            text += `
                            <div class="newsItem lowerNewsItem">
								<a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + j].id + `">
									<img src=\"` + arr[i + j].img + `\">
								</a>

								<div class="newsItemText">
									<div class="newsItemUpperText">` + arr[i + j].date + `</div>

									<a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + j].id + `">
										<h3 class="newsItemLowerText">` + arr[i + j].text + `</h3>
									</a>
								</div>
							</div>`;
                        }
                        text += "</div>";
                        news.innerHTML += text;
					}
				}
				
		    }
		  };

		  // gallery
		  var xhttp = new XMLHttpRequest();
		  xhttp.overrideMimeType("application/json");
		  xhttp.open("GET", "/json/gallery.json", true);
		  xhttp.send();

		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	var obj = JSON.parse(this.responseText);
		    	var arr = obj.gallery;
				for (i = 0; i < arr.length; i++) {
					document.getElementById("galleryImage" + (i + 1)).src = arr[i];
				}
				
		    }
		  };

		  // videos
		  var xhttp = new XMLHttpRequest();
		  xhttp.overrideMimeType("application/json");
		  xhttp.open("GET", "/json/videoImages.json", true);
		  xhttp.send();

		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	var obj = JSON.parse(this.responseText);
		    	var arr = obj.videoImages;
				for (i = 0; i < arr.length; i++) {
					document.getElementById("videoImage" + (i + 1)).src = arr[i];
				}
				
		    }
		  };

		  // christmasCollection
		  var xhttp = new XMLHttpRequest();
		  xhttp.overrideMimeType("application/json");
		  xhttp.open("GET", "/json/christmasCollection.json", true);
		  xhttp.send();

		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	var obj = JSON.parse(this.responseText);
		    	document.getElementById("appStoreImage").src = obj.appStoreImage;
		    	document.getElementById("appStoreText").innerHTML = obj.appStoreText;

		    	var arr = obj.christmasCollection;
				for (i = 0; i < arr.length; i++) {
					document.getElementById("christmasImage" + (i + 1)).src = arr[i];
				}
		    }
		  };

		  // clubInfo
		  var xhttp = new XMLHttpRequest();
		  xhttp.overrideMimeType("application/json");
		  xhttp.open("GET", "/json/clubInfo.json", true);
		  xhttp.send();

		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	var obj = JSON.parse(this.responseText);

		    	var academyInfo = document.getElementById("academyInfo");
				academyInfo.querySelector("img").src = obj.academyImg;
				academyInfo.querySelector("h2").innerHTML = obj.academyName;
				academyInfo.querySelector("p").innerHTML = obj.academyText;

				arr = obj.clubInfo;
				for (i = 0; i < arr.length; i++) {
					var clubInfoItem = document.getElementById("clubInfoItem" + (i + 1));
					clubInfoItem.querySelector("img").src = arr[i].img;
					clubInfoItem.querySelector("h3").innerHTML = arr[i].name;
					clubInfoItem.querySelector("p").innerHTML = arr[i].text;
				}
		    }
		  };

}

function newsClicked(e){
    localStorage.setItem("newsId", e.id);
}

function scheduleClicked(e) {
    localStorage.setItem("scheduleId", e.id);
}

function standingsClicked(e) {
    localStorage.setItem("standingsId", e.id);
}

function videoClicked(e){
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/video/" + e.id + ".json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);

            document.getElementById("video" + e.id).innerHTML = `
                <div class="videoImage">
                    <iframe width="100%" height="300px" src="` + obj.video + `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>`;
        }

    };
}

function photoClicked(e){
    localStorage.setItem("photoId", e.id);
}

var slideIndex = 1;
var timer = null;

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	clearTimeout(timer);
	var x = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");

	if (n === undefined) { n = slideIndex++; }
	if (n > x.length || slideIndex > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].style.backgroundColor = "transparent";
	}
	if(x[slideIndex-1] != null) {
        x[slideIndex-1].style.display = "block";  
    }
    if(dots[slideIndex-1] != null) {
	    dots[slideIndex-1].style.backgroundColor = "white";
    }
	timer = setTimeout(showDivs, 5000);

}
