
function changePageContent(pageName) 
{
    $('#article-content').load(pageName + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + pageName).addClass('selected');

    const state = { page: pageName }
    history.pushState(state, null, "?page=" + pageName);
};

function initPage(pageName) {
    var page = new URLSearchParams(window.location.search).get('page');

    if ($('#' + page).length == 0)
      page = pageName;
      
    $('#article-content').load(page + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + page).addClass('selected');
}