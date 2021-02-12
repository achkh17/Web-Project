function loadFooter() {
	var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/footer.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var socials = obj.social;
			var sponsors = obj.sponsors;

			var i, j;
            var text = "";
			for(i = 0; i < socials.length / 4; i++) {
                text += `<div><ul class="footerIcons">`;
                for(j = 0; j < 4; j++) {
                    text += `
                        <li>
                            <a href="` + socials[i * 4 + j].link  + `" target="_blank">
                                <img src="` + socials[i * 4 + j].img + `" alt="` + socials[i * 4 + j].name  + `"/>
                            </a>
                        </li>`;
                }
				text += `</ul></div>`;
			}
            document.getElementById("footerSocials").innerHTML += text;


            text = "";
            var k = 0;
            var num = 2;
            for(i = 0; i < 4; i++) {
                if(i == 1) num = 3;
                if(i == 2) num = 5;
                if(i == 3) num = 9;

                text += `<div class="footerSponsorsRow">`;
                for(j = 0; j < num; j++) {
                    text += `
                        <a href="` + sponsors[k].link  + `" target="_blank">
                            <img src="` + sponsors[k].img + `" class="footerSponsorsRowImage">
                        </a>`;
                    k += 1;
                }
				text += `</div>`;
                if(i != 3) text += `<div class="whiteFooterLine"></div>`;
			}
            document.getElementById("footerSponsors").innerHTML += text;

        }
        
    };
}