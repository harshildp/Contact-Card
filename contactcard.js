$(document).ready(function(){
    $('form').submit(function(){
        var data = [$('#first_name').val(), $('#last_name').val(), $('#box').val()];
        $('#content').append('<div id="card"><h3>'+data[0]+ ' ' +data[1]+'</h3><p>Click to see description. \\_(~.~)_/</p><p id="back">'+data[2]+'</p></div>');
        return false;
    });
    $(document).on('click', '#card', function(){
        $(this).children().toggle();
    });
});