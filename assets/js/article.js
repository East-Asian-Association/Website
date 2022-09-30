function changePageContent(pageName) 
{
    $('#article').load(pageName + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + pageName).addClass('selected');

    history.pushState({}, null, "?page=" + pageName);
};

function initPage(pageName) {
    var page = new URLSearchParams(window.location.search).get('page');

    if ($('#' + page).length == 0)
      page = pageName;
      
    $('#article').load(page + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + page).addClass('selected');
}