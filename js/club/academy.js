function getAcademy() {
    return `
    <div class="main-container">
        <div class="pageMainImage">
            <div class="centerTitle">
                <h1 class="titleH1">AC Milan Academy</h1>
            </div>
            <img id="mainImg">
        </div>

        <div class="center-main">
            <div class="tab">
                <button class="tablinks" onclick="openTab(event, 'info1')">INFORMATION</button>
                <button class="tablinks" onclick="openTab(event, 'info2')" id="defaultTab">CONTACT</button>
            </div>

            <div id="info1" class="tabcontent"></div>
            <div id="info2" class="tabcontent"></div>

        </div>
    </div>
    `;
}

function loadAcademy() {
    document.title = "AC Milan Academy";
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "/json/academy.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("mainImg").src = obj.mainImg;
            document.getElementById("info1").innerHTML = obj.info;
            
            document.getElementById("info2").innerHTML = `
            <h3>Contact Form</h3>
                <div class="container">
                <form>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name..">

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your email address..">

                    <label for="country">Country</label>
                    <select id="country" name="country">
                    <option value="georgia">Georgia</option>
                    <option value="spain">Spain</option>
                    <option value="italy">Italy</option>
                    <option value="france">France</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    </select>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                    <input type="submit" value="Submit" onclick=submitClicked()>
                </form>
                </div>`;

            document.getElementById("defaultTab").click();
        }
        
    };
    
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

function submitClicked() {
    body = document.getElementById("subject").value + ". Sincerely " + document.getElementById("fname").value
    + " " + document.getElementById("lname").value + " from " + document.getElementById("country").value;
    subject = "AC Milan academy";
    mail = document.getElementById("email").value;

    url = "https://mail.google.com/mail/?view=cm&fs=1";
    url += "&to=" + mail;
    url += "&su=" + subject;
    url += "&body=" + body;
    window.open(url, '_blank');
}