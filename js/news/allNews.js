function getAllNews() {
    return  `
<div class="main-container">
    <div class="pageMainImage">
        <h1 class="titleH1">NEWS</h1>
    </div>

    <div class="centerPage">
        <div class="lastestNews" id="allNews"></div>
    </div>
</div>`;
}


function loadAllNews() {
  var xhttp = new XMLHttpRequest();
  xhttp.overrideMimeType("application/json");
  xhttp.open("GET", "/json/allNews.json", true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        var arr = obj.news;
        var news = document.getElementById("allNews");

        var i;
        for (i = 0; i < arr.length; i++) {
            if(i % 5 == 0) {
                news.innerHTML += `
                <div class=\"upperNews\">
                    <div class="newsItem upperNewsItem">
                        <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i].id + `">
                            <img src=\"` + arr[i].img + `\">
                        </a>

                        <div class="newsItemText">
                            <div class="newsItemUpperText">` + arr[i].date + `</div>

                            <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i].id + `">
                                <h3 class="newsItemLowerText">` + arr[i].text + `</h3>
                            </a>
                        </div>
                    </div>
                    

                    <div class="newsItem upperNewsItem">
                        <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + 1].id + `">
                            <img src=\"` + arr[i + 1].img + `\">
                        </a>

                        <div class="newsItemText">
                            <div class="newsItemUpperText">` + arr[i + 1].date + `</div>

                            <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + 1].id + `">
                                <h3 class="newsItemLowerText">` + arr[i + 1].text + `</h3>
                            </a>
                        </div>
                    </div>
                </div>`
            }

            if(i % 5 == 2) {
                news.innerHTML += `
                <div class=\"lowerNews\">
                    <div class="newsItem lowerNewsItem">
                        <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i].id + `">
                            <img src=\"` + arr[i].img + `\">
                        </a>

                        <div class="newsItemText">
                            <div class="newsItemUpperText">` + arr[i].date + `</div>

                            <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i].id + `">
                                <h3 class="newsItemLowerText">` + arr[i].text + `</h3>
                            </a>
                        </div>
                    </div>

                    <div class="newsItem lowerNewsItem">
                        <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + 1].id + `">
                            <img src=\"` + arr[i + 1].img + `\">
                        </a>

                        <div class="newsItemText">
                            <div class="newsItemUpperText">` + arr[i + 1].date + `</div>

                            <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + 1].id + `">
                                <h3 class="newsItemLowerText">` + arr[i + 1].text + `</h3>
                            </a>
                        </div>
                    </div>

                    <div class="newsItem lowerNewsItem">
                        <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + 2].id + `">
                            <img src=\"` + arr[i + 2].img + `\">
                        </a>

                        <div class="newsItemText">
                            <div class="newsItemUpperText">` + arr[i + 2].date + `</div>

                            <a href="#/news/allNews/newsPage" onclick="newsClicked(this)" id="` + arr[i + 2].id + `">
                                <h3 class="newsItemLowerText">` + arr[i + 2].text + `</h3>
                            </a>
                        </div>
                    </div>
                </div>`
            }

        }
        
    }
  };
}

function newsClicked(e) {
    localStorage.setItem("newsId", e.id);
}