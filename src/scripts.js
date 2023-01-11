$(document).ready(function () {

  $(".hide-toggle-navbar").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });  

  var router = function (route) {
    switch (route) {
      case "":
        $("#loadData").load("pages/inicio.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#inicio").addClass("active");
          window.location.hash = "#/";
        });        
        break;
      case "#/":
        $("#loadData").load("pages/inicio.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#inicio").addClass("active");
        });        
        break;
      case "#/discografia":
        $("#loadData").load("pages/discografia.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#discografia").addClass("active");
        });        
        break;
      case "#/videos":
        $("#loadData").load("pages/videos.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#videos").addClass("active");
        });        
        break;
      case "#/biografia":
        $("#loadData").load("pages/biografia.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#biografia").addClass("active");
        });        
        break;
      case "#/contacto":
        $("#loadData").load("pages/contacto.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#contacto").addClass("active");
        });        
        break;
      case "#/rider":
        $("#loadData").load("pages/rider.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
        });        
        break;
      case "#/cache":
        $("#loadData").load("pages/cache.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");          
        });        
        break;  
/*       case "#/shop":
        $("#loadData").load("pages/shop.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");          
        });        
        break;  */
      default:
        $("#loadData").load("404.html", function () {
          $(window).scrollTop(0);
        });
    }
  };
  router(window.location.hash);
  $(window).on("hashchange", function (e) {
    router(window.location.hash);
  });  
});
