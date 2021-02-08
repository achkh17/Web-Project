let routes = {
    '/': function() {
        var template = getHomePage();
        loadHomePage();
        document.getElementById('content').innerHTML = template;
    },
    '': function() {
        var template = getHomePage();
        loadHomePage();
        document.getElementById('content').innerHTML = template;
    },
    '/news/allNews': function() {
        var template = getAllNews();
        loadAllNews();
        document.getElementById('content').innerHTML = template;
    },
    '/news/allNews/newsPage': function() {
        var template = getNewsPage();
        loadNewsPage();
        document.getElementById('content').innerHTML = template;
    },
    '/news/transfers': function() {
        var template = getTransfers();
        loadTransfers();
        document.getElementById('content').innerHTML = template;
    },
    '/news/photoGallery': function() {
        var template = getPhotoGallery();
        loadPhotoGallery();
        document.getElementById('content').innerHTML = template;
    },
    '/news/photoPage': function() {
        var template = getPhotoPage();
        loadPhotoPage();
        document.getElementById('content').innerHTML = template;
    },
    '/news/videoGallery': function() {
        var template = getVideoGallery();
        loadVideoGallery();
        document.getElementById('content').innerHTML = template;
    },
    '/club/awards': function() {
        var template = getAwards();
        loadAwards();
        document.getElementById('content').innerHTML = template;
    },
    '/club/history': function() {
        var template = getHistory();
        loadHistory();
        document.getElementById('content').innerHTML = template;
    },
    '/club/venues': function() {
        var template = getVenues();
        loadVenues();
        document.getElementById('content').innerHTML = template;
    },
    '/club/academy': function() {
        var template = getAcademy();
        loadAcademy();
        document.getElementById('content').innerHTML = template;
    },
    '/club/management': function() {
        var template = getManagement();
        loadManagement();
        document.getElementById('content').innerHTML = template;
    },
    '/season/schedules': function() {
        var template = getSchedules();
        loadSchedules();
        document.getElementById('content').innerHTML = template;
    },
    '/season/standings': function() {
        var template = getStandings();
        loadStandings();
        document.getElementById('content').innerHTML = template;
    },
    '/team': function() {
        var template = getTeam();
        loadTeam();
        document.getElementById('content').innerHTML = template;
    },
    '/player': function() {
        var template = getPlayer();
        loadPlayer();
        document.getElementById('content').innerHTML = template;
    },
    '/accreditations': function() {
        var template = getAccreditations();
        loadAccreditations();
        document.getElementById('content').innerHTML = template;
    },
    '/museumTickets': function() {
        var template = getMuseumTickets();
        loadMuseumTickets();
        document.getElementById('content').innerHTML = template;
    },
    '/banners': function() {
        var template = getBanners();
        loadBanners();
        document.getElementById('content').innerHTML = template;
    }
};

function changeRoute() {
    var path = window.location.hash.replace("#", "");
    if(path.length == 0 || path.charAt(0) == '/') routes[path]();
    window.scrollTo({top: 0});

    if(document.getElementById("navMenu") != null && document.getElementById("navMenu").style.display === "block")  {
        hamburgerMenuClicked(document.getElementById("hamburgerButton"));
    }
    closeMenu();    

}

window.onpopstate = () => {
    changeRoute();
}

window.addEventListener('hashchange', changeRoute());