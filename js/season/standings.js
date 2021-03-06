function getStandings() {
    return `
    <div class="floatTiTle">
    <h1 class="titleH1" id="tournamentName"></h1>
  </div>
  
  <div class="dropdown tournamentDrop">
    <button onclick="dropdownLicked()" class="dropbtn" id="tournament">Tournament
      <i class="fa fa-caret-down"></i>
    </button>
    <div id="myDropdown" class="dropdown-content">
      <a href="#/season/standings" onclick="standingsClicked(this)" id="1">Copa Italia</a>
      <a href="#/season/standings" onclick="standingsClicked(this)" id="2">Seria A</a>
      <a href="#/season/standings" onclick="standingsClicked(this)" id="3">Europa League</a>
    </div>
  </div>
  
  <section id="bracket" class="clearfix">
    <div class="standingsContainer">
      <div class="split split-one" id="split1"></div> 
      <div class="champion" id="champion"></div>
      <div class="split split-two" id="split2"></div>
    </div>
  </section>
  
  <div class="center-main standTable clearfix" id="standingsTable">
    <div>
     <div class="seriaAStandings centerTable">
  
       <table class="standingsTable">
         <thead class="standingsThread tableFormat">
           <tr>
             <th>#</th>
             <th></th>
             <th class="clubText">club</th>
             <th>PTS</th>
             <th class="collapsable">P</th>
             <th class="collapsable">W</th>
             <th class="collapsable">D</th>
             <th class="collapsable">L</th>
             <th class="collapsable">GF</th>
             <th class="collapsable">GA</th>
             <th>GD</th>
           </tr>
         </thead>
  
         <tbody class="standingsTbody transfersTable" id="seasonTable"></tbody>							
       </table>
  
     </div>
   </div>	
  </div>
    `;
}

function loadStandings() {
    document.title = "AC Milan Standings";
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/seasonStandings.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        var arr = obj.copa;
        document.getElementById("tournamentName").innerHTML = 'COPA ITALIA';

        if(localStorage.getItem("standingsId") == 2) {
        arr = obj.seriaA;
        document.getElementById("tournamentName").innerHTML = 'SERIA A';
        } else if(localStorage.getItem("standingsId") == 3) {
        document.getElementById("tournamentName").innerHTML = 'EUROPA LEAGUE';
        arr = obj.europaLeague;
        }

        if(localStorage.getItem("standingsId") != 2 && localStorage.getItem("standingsId") != 3) {
        for(i = 0; i < 2; i++) {

            var text = "";
            for(j = 0; j < 3; j++) {
            var cur = arr.last32;
            if(j == 1) cur = arr.last16;
            else if(j == 2) cur = arr.last8;
            if(i == 1 && j == 0) cur = arr.last8;
            else if(i == 1 && j == 2) cur = arr.last32;

            var round = j + 1;
            if(i == 1) round = 3 - j;
            
            text += `
                <div class="round round-` + round;
                if(round == 3) text += ` current">`;
                else text += ` ">`;
                text += `<div class="round-details">` + cur[0].game + `<br/><span class="date">` + cur[0].date + `</span></div>`;

                for(k = 0; k < cur.length / 2; k++) {
                var ind = k;
                if(i == 1) ind += cur.length / 2;
                text += 
                `<ul class="matchup">
                    <li class="team team-top">` + cur[ind].team1 + `<span class="score">` + cur[ind].score1 + `</span></li>
                    <li class="team team-bottom">` + cur[ind].team2 + `<span class="score">` + cur[ind].score2 + `</span></li>
                </ul>`;
                }
                text += `</div>`;
            }
            document.getElementById("split" + (i + 1)).innerHTML = text;
        }

        text = "";
        for(i = 0; i < 3; i++) {
            var cur = arr.last4[0];
            if(i == 1) cur = arr.final[0];
            else if(i == 2) cur = arr.last4[1];

            text += `<div`;
                if(i == 1) text += ` class="final"><i class="fa fa-trophy"></i>`;
                else text += `>`;
                text += `
                <div class="round-details">` + cur.game + `<br/><span class="date">` + cur.date + `</span></div>
                <ul class="matchup">
                    <li class="team team-top">` + cur.team1 + `<span class="score">` + cur.score1 + `</span></li>
                    <li class="team team-bottom">` + cur.team2 + `<span class="score">` + cur.score2 + `</span></li>
                </ul></div>`;
        }
        document.getElementById("champion").innerHTML = text; 

        } else {
        document.getElementById("standingsTable").style = "display:block;";
        document.getElementById("bracket").style = "display:none;";
        var table = document.getElementById("seasonTable");

        for (i = arr.length - 1; i >= 0; i--) {
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            var cell9 = row.insertCell(8);
            var cell10 = row.insertCell(9);
            var cell11 = row.insertCell(10);

            cell1.className = "standingsNumber";
            cell1.innerHTML = arr[i].num;

            cell2.className = "standingsLogo";
            cell2.innerHTML = `<img src = "` + arr[i].logo + `">`;

            cell3.className = "standingsTeam";
            cell3.innerHTML = arr[i].name;

            cell4.innerHTML = arr[i].pts;
            cell5.innerHTML = arr[i].p;
            cell6.innerHTML = arr[i].w;
            cell7.innerHTML = arr[i].d;
            cell8.innerHTML = arr[i].l;
            cell9.innerHTML = arr[i].gf;
            cell10.innerHTML = arr[i].ga;
            cell11.innerHTML = arr[i].gd;

            cell5.className = "collapsable";
            cell6.className = "collapsable";
            cell7.className = "collapsable";
            cell8.className = "collapsable";
            cell9.className = "collapsable";
            cell10.className = "collapsable";

            if(arr[i].name == "Milan") {
            row.style = "color: red!important; font-weight: bold;";
            }

        }

        }
    }
    };
}

function dropdownLicked() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function standingsClicked(e) {
    localStorage.setItem("standingsId", e.id);
}