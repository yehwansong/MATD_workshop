
    $(document).mousemove(function(event) {
        console.log(event.clientX)
            value_x = (event.clientX)/$('body').outerWidth();
            value_y = (event.clientY)/$('body').outerHeight();
    });