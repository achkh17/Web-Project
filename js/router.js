let routes = {
    '/': function() {
        console.log("0")
        var template = getHomePage();
        loadHomePage();
        document.getElementById('content').innerHTML = template;
    },
    '': function() {
        console.log("1: ", window.location.hash)
        var template = getHomePage();
        loadHomePage();
        document.getElementById('content').innerHTML = template;
    },
    '/index.html': function() {
        console.log("2")
        var template = getHomePage();
        loadHomePage();
        document.getElementById('content').innerHTML = template;
    },

    '/news/allNews': function() {
        console.log("3")
        var template = getAllNews();
        loadAllNews();
        document.getElementById('content').innerHTML = template;
    },
    '#/news/allNews': function() {
        console.log("4")
        var template = getAllNews();
        loadAllNews();
        document.getElementById('content').innerHTML = template;
    },

    '/news/allNews/newsPage': function() {
        console.log("5")
        var template = getNewsPage();
        loadNewsPage();
        document.getElementById('content').innerHTML = template;
    }
};

window.onpopstate = () => {
    routes[window.location.hash]();
}

function onNavItemClick(bla) {
//     console.log("nav hash: ", window.location.hash);
//     var pathName = window.location.hash;
    // window.history.pushState({}, pathName, window.location.origin + pathName);
//     // var subMenu = document.getElementsByClassName("subMenu");
//     // var i;
//     // for(i = 0; i < subMenu.length; i++) {
//     //     subMenu[i].style.display = "none";
//     // }
//     routes[pathName]();
//     console.log("after")
}

// routes[window.location.pathname]();

console.log("hash: ", window.location.hash);
window.addEventListener('hashchange', routes[window.location.hash]());
// window.addEventListener('load', routes[window.location.pathname]());