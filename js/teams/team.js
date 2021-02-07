function getTeam() {
    return `
    <div class="teamMain">
        <div class="pageMainImage">
            <h1 class="titleH1">Team Players</h1>
        </div>
    
        <div id="myBtnContainer">
        <button class="btn active" onclick="filterSelection('all')">ALL</button>
        <button class="btn" onclick="filterSelection('goalkeeper')">GOALKEEPERS</button>
        <button class="btn" onclick="filterSelection('defender')">DEFENDERS</button>
        <button class="btn" onclick="filterSelection('midfielder')">MIDFIELDERS</button>
        <button class="btn" onclick="filterSelection('forward')">FORWARDS</button>
        </div>
    
        <div class="teamRow" id="team"></div>
    
    </div>
    `;
}

function loadTeam() {
    var xhttp = new XMLHttpRequest();
      xhttp.overrideMimeType("application/json");
      xhttp.open("GET", "/json/teams.json", true);
      xhttp.send();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var obj = JSON.parse(this.responseText);
          var arr = obj.menTeam;

          if(localStorage.getItem("teamId") == 2) {
            arr = obj.womenTeam;
          }

          for (i = 0; i < arr.length; i++) {
            document.getElementById("team").innerHTML += `
              <div class="teamColumn ` +  arr[i].position + `">
                <a onclick="playerClicked(this)" href="#/player" id="` + arr[i].id + `">
                  <div class="teamContent">
                    <img src="` + arr[i].img + `" class="teamColumn-img">
                    <div class="back-img"></div>
                    <div class="text-block">
                      <h1>` + arr[i].num + `</h1>
                      <h2>` + arr[i].name + `</h2>
                    </div>
                  </div>
                </a>
              </div>
            `;
          }
        }

        filterSelection("all");
        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            });
        }
      };
}

  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("teamColumn");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }


  function playerClicked(e){
      localStorage.setItem("playerId", e.id);
  }

  function teamClicked(e) {
    localStorage.setItem("teamId", e.id);
}

  