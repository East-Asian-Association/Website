function changePageContent(id) 
{
    $('#article-content').load(id + '.html');
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + id).addClass('selected');
};

function initPage(defaultId) {
    var page = new URLSearchParams(window.location.search).get('page');

    if ($('#' + page).length == 0)
      page = defaultId;
      
    changePageContent(page, page + '.html');
}