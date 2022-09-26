function changePageContent(page) 
{
    $('#article-content').load(page + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + page).addClass('selected');

    var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?page=" + page;
    history.pushState({path:newUrl}, null, newUrl);
};

function initPage(defaultId) {
    var page = new URLSearchParams(window.location.search).get('page');

    if ($('#' + page).length == 0)
      page = defaultId;
      
    $('#article-content').load(page + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + page).addClass('selected');
}