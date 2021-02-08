function getSchedules() {
    return `
    <div class="floatTiTle">
        <h1 class="titleH1" id="scheduleTournamentName"></h1>
    </div>
    
    <div class="dropdown tournamentDrop">
        <button onclick="dropdownLicked()" class="dropbtn" id="tournament">Tournament
        <i class="fa fa-caret-down"></i>
        </button>
        <div id="myDropdown" class="dropdown-content">
        <a href="#/season/schedules" onclick="scheduleClicked(this)" id="1">Copa Italia</a>
        <a href="#/season/schedules" onclick="scheduleClicked(this)" id="2">Seria A</a>
        <a href="#/season/schedules" onclick="scheduleClicked(this)" id="3">Europa League</a>
        </div>
    </div>
    
    <div class="monthList" id="monthList"></div>
    
    <div class="center-main">
        <div id="schedule"></div>
    </div>
    `;
}

function loadSchedules() {
    document.title = "AC Milan Schedules";
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/schedules.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var arr = obj.copa;
            document.getElementById("scheduleTournamentName").innerHTML = 'COPA ITALIA';

            if(localStorage.getItem("scheduleId") == 2) {
            arr = obj.seriaA;
            document.getElementById("scheduleTournamentName").innerHTML = 'SERIA A';
            } else if(localStorage.getItem("scheduleId") == 3) {
            document.getElementById("scheduleTournamentName").innerHTML = 'EUROPA LEAGUE';
            arr = obj.europaLeague;
            }

            var monthText = "";
            var text = "";
            for(i = 0; i < arr.length; i++) {
            monthText += `<div class="monthTitle"><a href = "#` + arr[i].month.toLowerCase().substring(0, 3) + `">` + arr[i].month.substring(0, 3) + `</a></div>`;

            text += `
                <div class="monthSchedule" id="` + arr[i].month.substring(0, 3).toLowerCase() + `">
                <div class="monthName">` + arr[i].month + `</div>`;                

                var games = arr[i].games;

                for(j = 0; j < games.length; j++) {

                text += `<div class="matchInfo">
                    <div class="matchDay">
                        <span class="matchDayNum">MATCHDAY ` + games[j].matchNum + `</span>
                        <span class="matchDayDate">` + games[j].date + `</span>
                        <span class="matchDayTime">` + games[j].time + `</span>
                    </div>

                    <div class="teamInfo1">
                        <span class="teamName">` + games[j].team1 + `</span>
                        <img src="` + games[j].logo1 + `" class="teamImg">
                    </div>

                    <div class="matchRes">` + games[j].score + `</div>

                    <div class="teamInfo2">
                        <img src="` + games[j].logo2 + `" class="teamImg">
                        <span class="teamName">` + games[j].team2 + `</span>
                    </div>

                    <div class="flashscore">
                        <a href="` + games[j].link + `" target="_blanck">MATCHCENTER</a>
                    </div>

                    </div>
                    </div>`;
                }
            }

            document.getElementById("monthList").innerHTML = monthText;
            document.getElementById("schedule").innerHTML = text;

        }
    
    };
}

function dropdownLicked() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function scheduleClicked(e) {
    localStorage.setItem("scheduleId", e.id);
}