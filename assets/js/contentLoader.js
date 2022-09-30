function getCurrentArticle(fallback) {
    var article = new URLSearchParams(window.location.search).get('article');
    if ($('#' + article).length == 0)
        return fallback;
    return article;
}

function changeArticleContent(articleName) 
{
    $('#article').load(articleName + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + articleName).addClass('selected');
};

function pushToHistory(articleName) {
    history.pushState({}, null, "?article=" + articleName);
}

function loadHeaderAndFooter() {
    $("#header").load("/assets/html/header.html"); 
    $("#footer").load("/assets/html/footer.html"); 
}