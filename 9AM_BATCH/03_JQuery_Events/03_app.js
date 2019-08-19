// Click Event
$('#blue-btn').click(function() {
    $(this).removeClass('btn-primary').addClass('btn-danger').text('Register');
});

// DBL CLick
$('#red-btn').dblclick(function() {
    $(this).removeClass('btn-danger').addClass('btn-primary').text('Login');
});

// Toggle Effect
$('#toggle-btn').click(function () {
    let buttonText = $(this).text();
    if(buttonText === 'login'){
        $(this).removeClass('btn-primary').addClass('btn-danger').text('register');
    }
    else{
        $(this).removeClass('btn-danger').addClass('btn-primary').text('login');
    }
});

// change Event
$('#tech-select').change(function() {
    $('#tech-option').text($(this).val().toUpperCase());
});

// change event
$('#check-box').change(function() {
    let passwordBox = $('#password-box');
    if(passwordBox.attr('type') === 'password'){
        passwordBox.attr('type','text');
    }
    else{
        passwordBox.attr('type','password');
    }
});
