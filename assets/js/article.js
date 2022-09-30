function changeArticleContent(articleName) 
{
    $('#article').load(articleName + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + articleName).addClass('selected');

    history.pushState({}, null, "?page=" + articleName);
};

function initArticle(articleName) {
    var article = new URLSearchParams(window.location.search).get('page');

    if ($('#' + page).length == 0)
    article = articleName;
      
    $('#article').load(article + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + article).addClass('selected');
}