function getPlayer() {
    return `
    <div class="center-player" id="playerInfo"></div>
    <div class="biography" id="bio"></div>
    <div id="transferButton"></div>
    `;
}

function loadPlayer() {
    var xhttp = new XMLHttpRequest();
      xhttp.overrideMimeType("application/json");
      xhttp.open("GET", "/json/players/" + localStorage.getItem("playerId") + ".json", true);
      xhttp.send();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var obj = JSON.parse(this.responseText);
          document.getElementById("playerInfo").innerHTML = `
            <div class="player-content" >
              <img src="` + obj.img + `" class="player-img">
              <div class="back-img"></div>

              <div class="player-info">
                <div class="upperInfo">
                  <h1 class="allInfo">
                    <div class="num">` + obj.num + `</div>
                    <span class="border"></span>
                    <div class="name">
                      <div class="player-name">` + obj.name + `</div>
                      <div class="player-lastname">` + obj.lastname + `</div>
                    </div>
                  </h1>
                </div>

                <div class="jersey">
                  <a href="` + obj.jersey + `" target="_blank" class="jerseyButton">Buy the jersey</a>
                </div>
              </div>

            </div>
          `;


          document.getElementById("bio").innerHTML = obj.info;

          if(localStorage.getItem("playerId") < 28) {
            document.getElementById("transferButton").innerHTML = `
              <a href="` + obj.link + `" target="_blank" class="transferA" >
                <button class="shopItemButton bioButton">
                  <h3>SEE MORE</h3>
                </button>
              </a>
            `;
          }
          
        }
      };
}