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
    $('#article').load(articleName + ".html");
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + articleName).addClass('selected');
};

function pushToHistory(articleName) {
    history.pushState({}, null, "?article=" + articleName);
}

function loadHeader() {
    $('#header').load("/assets/html/header.html");
}

function loadFooter() {
    $('#footer').load("/assets/html/footer.html");
}