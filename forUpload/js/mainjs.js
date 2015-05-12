/*
 *Main js file 
  do all the initialization here in
 * */

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $("#menu-toggle").click(function(e) {
                e.preventDefault();
                        $("#wrapper").toggleClass("active");
    });
    function initialize() {
        var mapProp = {
            center:new google.maps.LatLng(23.2500,77.4167),
            zoom:10,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});

