import $ from 'jquery';

export default function changePageContent(parent, func, id) 
{
    parent.setState({ pageContent: func }); 
    $('.sidenav li').each(function() { $(this).removeClass('selected') }); $('#' + id).addClass('selected');
};
