function changePageContent(page) 
{
    $('#article-content').load(page + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + page).addClass('selected');

    history.pushState({page: page}, page, "?page=" + page);
};

function initPage(defaultId) {
    var page = new URLSearchParams(window.location.search).get('page');

    if ($('#' + page).length == 0)
      page = defaultId;
      
    $('#article-content').load(page + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + page).addClass('selected');
}