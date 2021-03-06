function getMuseumTickets() {
    return `
    <div class="main-container">

 		<div class="pageMainImage">
 			<div class="centerTitle">
	 			<h1 class="titleH1">MUSEUM TICKETS</h1>
	 			<h2 class="titleH2" id="phrase"></h2>

	 			<a href="https://identity.acmilan.com/identity/s/login/?language=it&startURL=%2Fidentity%2Fsetup%2Fsecur%2FRemoteAccessAuthorizationPage.apexp%3Fsource%3DCAAAAXcRWBO8ME8wM1gwMDAwMDBQQXNGAAAA5DNDnC7DTo554vYPIP-MbmkQpZhBtjD31quC8Nk7pJl30vps91J-Qbu2T1K8K8kXEmQqdbIHzEEg1hKqRPPdLcYstD_tNMjqWS3a_GiXTebjTqkpLbnE_yjuzj0zwfNAK80sHsxl9iNZBgH8wBqSn4IlVHgDA4Xdtc8a-4RiK7iMJLhagCT03u20iEqnZOqCmKlIBsQmRGWshxN98utS6rau8NA_KBdKckr_j7plN0owQxAPjTT6yKriK9Cp0ft217eMAl3yTbQjp1ztebWOeTCaOPUbh4bbIyt__rT8ixfFgOmf8u9TnIb7rbZ6Tx9sSKvQ9oKIkYZkSCLboXSfaHfjQiXjAi3Ne5d3SmSAdhIMWt5hqbdFDa9PXz1MhVplWsQaFnBp4-mMXIgChXUxGqlfmjNycIAl_Lmdo2BpL-6vt0b7KLD7UslikKu9zjolc7GmTc-Fxp-JUBK-Y6d0uhI_-xmrx7kSTWp-TipuYDF07YrzJPv4dd6wCJ5kD7YEic9Eh7y3StP5w7aOxTw0_Bu6_NleCfLoEe3UiHWHuViSElR1FEUY-5r0jqXl0X9MstWExTWXEhnKOJOpAc3lS_TKSlSU6zzOon-qAIc-ANVMsmeB1HiEDGI2EjiNIQEVyT4_ddlsP0k9G9GPEgc-yCiBtYA4R_1M5bkjcX45_xCPGH88IKS2bP7U7jBbHhoihqR8xTqRLOx6DA9L5HuraY6qPLpyU-hong5Ub_HHFufVuuVfDGbiK-G742UbkuP1pKqSzK9oHA30pLTvRUwu_kajjMn_giXI-Oqwgk8UJlfnORhrcMtmRh4YI38_5CpEoYdV29xVVWIEwlrSyhWleBIIyni1l8nxzbYDzC_0-ogHFp9HK6Qrh9sZXaBAF_OobL9sHKuVV_cDmevHTWNDZ2U%253D&ec=302&inst=3X" target="_blank" class="textDecor">
		 			<button class="shopItemButton buyButton">
						<h3>BUY TICKET NOW</h3>
					</button>
				</a>

	 			<h2 class="titleH2" id="secondPhrase"></h2>
 			</div>

			<img id="mainImg">
		</div>

 		<div class="center-main">

			<div class="tab">
			  <button class="tablinks" onclick="openTab(event, 'info1')" id="defaultTab">THE MUSEUM</button>
			  <button class="tablinks" onclick="openTab(event, 'info2')">WHERE WE ARE</button>
			  <button class="tablinks" onclick="openTab(event, 'info3')">OPENING HOURS AND PRICES</button>
			</div>

			<div id="info1" class="tabcontent"></div>
			<div id="info2" class="tabcontent"></div>
			<div id="info3" class="tabcontent"></div>

			<div id="myModal" class="modal">
			  <span class="close cursor" onclick="closeModal()">&times;</span>
			  <div class="modal-content" id="museumSlides"></div>
			</div>

 		</div>
 	</div>
    `;
}

function loadMuseumTickets() {
    document.title = "AC Milan Museum";
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/museumTickets.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("phrase").innerHTML = obj.phrase[0];
            document.getElementById("secondPhrase").innerHTML = obj.phrase[1];
            document.getElementById("mainImg").src = obj.mainImg;

            for (j = 0; j < obj.infos.length; j++) {
                var info = obj.infos[j];
                var arr = info.paragraphs;
                var images = info.images;

                var text = "";
                for (i = 0; i < arr.length - 1; i++) {
                    text += arr[i];
                    if(j == 0) text += "<img src=\"" + images[i] + "\"  onclick=\"openModal();currentSlide(" + (i + 1) + ")\" class=\"imgPointer\">";
                    else if(j == 1) text += "<img src=\"" + images[i] + "\"  onclick=\"openModal();currentSlide(9)\" class=\"imgPointer\">";
                }
                text += arr[arr.length - 1];
                text += `
                    <a href="https://identity.acmilan.com/identity/s/login/?language=it&startURL=%2Fidentity%2Fsetup%2Fsecur%2FRemoteAccessAuthorizationPage.apexp%3Fsource%3DCAAAAXcRWBO8ME8wM1gwMDAwMDBQQXNGAAAA5DNDnC7DTo554vYPIP-MbmkQpZhBtjD31quC8Nk7pJl30vps91J-Qbu2T1K8K8kXEmQqdbIHzEEg1hKqRPPdLcYstD_tNMjqWS3a_GiXTebjTqkpLbnE_yjuzj0zwfNAK80sHsxl9iNZBgH8wBqSn4IlVHgDA4Xdtc8a-4RiK7iMJLhagCT03u20iEqnZOqCmKlIBsQmRGWshxN98utS6rau8NA_KBdKckr_j7plN0owQxAPjTT6yKriK9Cp0ft217eMAl3yTbQjp1ztebWOeTCaOPUbh4bbIyt__rT8ixfFgOmf8u9TnIb7rbZ6Tx9sSKvQ9oKIkYZkSCLboXSfaHfjQiXjAi3Ne5d3SmSAdhIMWt5hqbdFDa9PXz1MhVplWsQaFnBp4-mMXIgChXUxGqlfmjNycIAl_Lmdo2BpL-6vt0b7KLD7UslikKu9zjolc7GmTc-Fxp-JUBK-Y6d0uhI_-xmrx7kSTWp-TipuYDF07YrzJPv4dd6wCJ5kD7YEic9Eh7y3StP5w7aOxTw0_Bu6_NleCfLoEe3UiHWHuViSElR1FEUY-5r0jqXl0X9MstWExTWXEhnKOJOpAc3lS_TKSlSU6zzOon-qAIc-ANVMsmeB1HiEDGI2EjiNIQEVyT4_ddlsP0k9G9GPEgc-yCiBtYA4R_1M5bkjcX45_xCPGH88IKS2bP7U7jBbHhoihqR8xTqRLOx6DA9L5HuraY6qPLpyU-hong5Ub_HHFufVuuVfDGbiK-G742UbkuP1pKqSzK9oHA30pLTvRUwu_kajjMn_giXI-Oqwgk8UJlfnORhrcMtmRh4YI38_5CpEoYdV29xVVWIEwlrSyhWleBIIyni1l8nxzbYDzC_0-ogHFp9HK6Qrh9sZXaBAF_OobL9sHKuVV_cDmevHTWNDZ2U%253D&ec=302&inst=3X" target="_blank" class="textDecor">
                        <button class="shopItemButton buyButton">
                            <h3>BUY TICKET NOW</h3>
                        </button>
                    </a>`;
                document.getElementById("info" + (j + 1)).innerHTML = text;

                if(j == 0) {
                    var gallery = obj.gallery;
                    var imgText = "";
                    for (i = 0; i < gallery.length; i++) {
                        imgText += 
                        `<div class="mySlides">
                            <div class="numbertext">` +  (i + 1) + `&#47;` + gallery.length + `</div>
                            <img src="` + gallery[i] + `" style="width:100%">
                        </div>`
                    }
                    imgText += `
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>
                    `;

                    document.getElementById("museumSlides").innerHTML = imgText;
                }
            }
        var slideIndex = 1;
        document.getElementById("defaultTab").click();
        }
    };
}


function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }