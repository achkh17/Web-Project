function getTransfers() {
  return `
    <div class="main-container">

      <div class="center-main">
        <div>
          <h2 class="matchText centerText">Arrivals</h2>
          <div class="seriaAStandings centerTable">

            <table class="standingsTable">
              <thead class="standingsThread tableFormat">
                <tr>
                  <th></th>
                  <th>player</th>
                  <th class="collapsable">position</th>
                  <th class="collapsable">age</th>
                  <th class="collapsable">nationality</th>
                  <th>club</th>
                  <th>fee</th>
                </tr>
              </thead>

              <tbody class="standingsTbody transfersTable" id="transfersTable"></tbody>							
            </table>

          </div>
        </div>	
      </div>
      
    </div>
  `;
}

function loadTransfers() {

  var xhttp = new XMLHttpRequest();
			xhttp.overrideMimeType("application/json");
			xhttp.open("GET", "/json/transfers.json", true);
			xhttp.send();

			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var obj = JSON.parse(this.responseText);
			    	var arr = obj.arrivals;
					var table = document.getElementById("transfersTable");

					for (i = 0; i < arr.length; i++) {
						var row = table.insertRow(0);
						var cell1 = row.insertCell(0);
						var cell2 = row.insertCell(1);
						var cell3 = row.insertCell(2);
						var cell4 = row.insertCell(3);
						var cell5 = row.insertCell(4);
						var cell6 = row.insertCell(5);
						var cell7 = row.insertCell(6);

						cell1.innerHTML = `<img src = "` + arr[i].photo + `">`;
						cell1.className = "playerImage";
						cell2.innerHTML = "<a href = \"" + arr[i].link + "\"  target=\"_blank\">" + arr[i].player + "</a>";
						cell2.className = "playerName standingsTeam";
						cell3.innerHTML = arr[i].position;
						cell3.className = "collapsable";
						cell4.innerHTML = arr[i].age;
						cell4.className = "collapsable age";
						cell5.innerHTML = `<img src = "` + arr[i].nationality + `">`;
						cell5.className = "flag collapsable";
						cell6.innerHTML = arr[i].club;
						cell7.innerHTML = arr[i].fee;
						cell7.className = "fee";
					}
				}
			};

}

