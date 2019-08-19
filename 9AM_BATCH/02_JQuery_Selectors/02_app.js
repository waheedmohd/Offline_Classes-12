// Tag Selector , id , class selectors
$('.lead').click(function() {
    $(this).css({
        backgroundColor : 'orange',
        padding : '15px',
        boxShadow: '0 0 10px black'
    });
});

// Attribute Selection
let inputField = $('input[type="text"]');
inputField.focus(function() {
    $(this).css({
        backgroundColor : 'orange'
    });
}).blur(function() {
    $(this).css({
        backgroundColor : 'white'
    });
});