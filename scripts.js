$(document).ready(function() {
    $('#loadData').load('inicio.html', function () {
        $(window).scrollTop(0);
    });

    $('.inicio').click(function() {        
        $('#loadData').load('inicio.html', function () {
            $(window).scrollTop(0);
        });
        
    })

    $('.discografia').click(function() {        
        $('#loadData').load('discografia.html', function () {
            $(window).scrollTop(0);
        });
        
    })
    
    $('.videos').click(function() {        
        $('#loadData').load('videos.html', function () {
            $(window).scrollTop(0);
        });
        
    })

    $('.bio').click(function() {        
        $('#loadData').load('biografia.html', function () {
            $(window).scrollTop(0);
        });
        
    })

    $('.gira').click(function() {        
        $('#loadData').load('gira.html', function () {
            $(window).scrollTop(0);
        });
        
    })

    $('.contacto').click(function() {        
        $('#loadData').load('contacto.html', function () {
            $(window).scrollTop(0);
        });
        
    })

    $('.nav-item a').click(function() {
        $('.nav-item').removeClass('active');
        $(this).closest('.nav-item').addClass('active');
    }) 
    
    $('.hide-toggle-navbar').on('click',function() {        
        $('.navbar-collapse').collapse('hide');        
    });
    
})