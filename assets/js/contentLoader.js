function getCurrentArticle(fallback) {
    var article = new URLSearchParams(window.location.search).get('article');
    if ($('#' + article).length == 0)
        return fallback;
    return article;
}

function changeArticleContent(articleName) {
    loadArticleContent(articleName);
    pushToHistory(articleName);
}

function loadArticleContent(articleName) 
{
    $('#article').load(articleName + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + articleName).addClass('selected');
};

function pushToHistory(articleName) {
    history.pushState({}, null, "?article=" + articleName);
}

function loadHeader(root) {
    $('#header').append(`
        <nav class="navbar">
            <a href='/' class="navbar-logo-wrapper">
                <img class="navbar-logo" src="` + root + `assets/svg/navbar-logo.svg"></img>
            </a>

            <button class="navbar-toggle" onClick='toggleNavbar()'>
                <img class="navbar-toggle-icon" src="` + root + `assets/svg/navbar-toggle-icon.svg"></img>
            </button>

            <ul class="black white-bg">
            <li>
                <a class="redOnHover" href='` + root + `about'>About</a>
            </li>
            <li>
                <a class="redOnHover" href='` + root + `contact'>Contact</a>
            </li>
            <li>
                <a class="redOnHover" href='` + root + `sponsors'>Sponsors</a>
            </li>
            <li>
                <a class="redOnHover" href='` + root + `membership'>Membership</a>
            </li>
            <li>
                <a class="redOnHover" href='` + root + `asienkunskap'>Asienkunskap</a>
            </li>
            <li>
                <a class="redOnHover" href='` + root + `international'>International Students</a>
            </li>
            </ul>
        </nav>

        <script>
            var collapsed = true;

            function toggleNavbar () {
                collapsed = !collapsed;
                if (collapsed) {
                    $(".navbar ul").animate({
                        top: -175
                    }, 400);
                }
                else {
                    $(".navbar ul").animate({
                        top: 60
                    }, 400);
                }
            }
        </script>
    `);
}

function loadFooter(assetLocation) {
    $('#footer').append(`
        <div class='footer-grid'>
            <div id='Contact' class='footer-grid-item'>
                <h1 class='red'>Contact</h1>
                <hr/>
                <p>Tekniska Högskolan</p>
                <p>581 83 Linköping</p>
                <p>infoansvarig.eaa@gmail.com</p>
            </div>
            <div class='footer-grid-item'>
                <h1 class='red'>EAA</h1>
                <hr/>
                <a href='https://www.facebook.com/eastasianassociation' class='social-media-button red-bg gray'><img src="` + root + `assets/svg/facebook-icon.svg" /></a>
                <a href='https://www.instagram.com/east_asian_association/' class='social-media-button red-bg gray'><img src="` + root + `assets/svg/instagram-icon.svg" /></a>
            </div>
            <div class='footer-grid-item'>
                <h1 class='red'>TEKKEN</h1>
                <hr/>
                <a href='https://www.facebook.com/FadderietTekken' class='social-media-button red-bg gray'><img src="` + root + `assets/svg/facebook-icon.svg" /></a>
                <a href='https://www.instagram.com/fadderiet_tekken/' class='social-media-button red-bg gray'><img src="` + root + `assets/svg/instagram-icon.svg" /></a>
            </div>
        </div>
    `);
}