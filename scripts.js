$(document).ready(function() {
    $('.nav-item a').click(function() {
        $('.nav-item').removeClass('active');
        $(this).closest('.nav-item').addClass('active');
    })
})