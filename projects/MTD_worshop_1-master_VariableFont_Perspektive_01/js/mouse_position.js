

$(document).ready(function(){
        document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        }, { passive: false });

    $(document).mousemove(function(event) {
            value_x = (event.pageX/window.innerWidth);
            value_y = (event.pageY/window.innerHeight);
    });
        $(document).on('touchstart', function(e) {
            value_x = (event.touches[0].pageX/window.innerWidth);
            value_y = (event.touches[0].pageY/window.innerHeight);
        })
        $(document).on('touchmove', function(e) {
            value_x = (event.touches[0].pageX/window.innerWidth);
            value_y = (event.touches[0].pageY/window.innerHeight);
        })

})