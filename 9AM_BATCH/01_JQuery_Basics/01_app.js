// External JQuery
$('#red-btn').click(function() {
    /*let buttonText = $(this).text(); // inner Text
    if(buttonText === 'hide'){
        $(this).text('show');
    }
    else{
        $(this).text('hide');
    }*/
    $('#red-card').toggle(500);
    ($(this).text() === 'hide') ? $(this).text('show') : $(this).text('hide');
});