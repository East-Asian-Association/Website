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

function loadHeader(assetLocation) {
    $('#header').append(`
        <nav class="navbar">
            <a href='/' class="navbar-logo-wrapper">
                <img class="navbar-logo" src="` + assetLocation + `svg/navbar-logo.svg"></img>
            </a>

            <button class="navbar-toggle" onClick='toggleNavbar()'>
                <img class="navbar-toggle-icon" src="` + assetLocation + `svg/navbar-toggle-icon.svg"></img>
            </button>

            <ul class="black white-bg">
            <li>
                <a class="redOnHover" href='/about'>About</a>
            </li>
            <li>
                <a class="redOnHover" href='/contact'>Contact</a>
            </li>
            <li>
                <a class="redOnHover" href='/sponsors'>Sponsors</a>
            </li>
            <li>
                <a class="redOnHover" href='/membership'>Membership</a>
            </li>
            <li>
                <a class="redOnHover" href='/asienkunskap'>Asienkunskap</a>
            </li>
            <li>
                <a class="redOnHover" href='/international'>International Students</a>
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