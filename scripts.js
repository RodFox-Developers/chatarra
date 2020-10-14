$(document).ready(function() {
    $('#loadData').load('inicio.html');

    $('.inicio').click(function() {        
        $('#loadData').load('inicio.html');
    })

    $('.discografia').click(function() {        
        $('#loadData').load('discografia.html');
    })
    
    $('.videos').click(function() {        
        $('#loadData').load('videos.html');
    })

    $('.bio').click(function() {        
        $('#loadData').load('biografia.html');
    })

    $('.gira').click(function() {        
        $('#loadData').load('gira.html');
    })

    $('.contacto').click(function() {        
        $('#loadData').load('contacto.html');
    })

    $('.nav-item a').click(function() {
        $('.nav-item').removeClass('active');
        $(this).closest('.nav-item').addClass('active');
    })       
    
})