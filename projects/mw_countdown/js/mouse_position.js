

$(document).ready(function(){
        document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        }, { passive: false });
    
    $(document).mousemove(function(event) {
        console.log(event.clientX)
            value_x = (event.clientX)/$('body').outerWidth();
            value_y = (event.clientY)/$('body').outerHeight();
    })

        $(document).on('touchstart', function(e) {
            console.log('hey')
            if(event.touches[0].pageX>$('.wrapper').offset().left && event.touches[0].pageX<($('.wrapper').offset().left+$('.wrapper').outerWidth())){
                value_x = (event.touches[0].pageX-$('.wrapper').offset().left)/$('.wrapper').outerWidth();
            }else{
                value_x = -10
            }
            if(event.touches[0].pageY>$('.wrapper').offset().top && event.touches[0].pageY<($('.wrapper').offset().top+$('.wrapper').outerHeight())){
                value_y = (event.touches[0].pageY-$('.wrapper').offset().top)/$('.wrapper').outerHeight();
            }else{
                value_y = -10
            }
        })
        $(document).on('touchmove', function(e) {
            console.log('hey')
            if(event.touches[0].pageX>$('.wrapper').offset().left && event.touches[0].pageX<($('.wrapper').offset().left+$('.wrapper').outerWidth())){
                value_x = (event.touches[0].pageX-$('.wrapper').offset().left)/$('.wrapper').outerWidth();
            }else{
                value_x = -10
            }
            if(event.touches[0].pageY>$('.wrapper').offset().top && event.touches[0].pageY<($('.wrapper').offset().top+$('.wrapper').outerHeight())){
                value_y = (event.touches[0].pageY-$('.wrapper').offset().top)/$('.wrapper').outerHeight();
            }else{
                value_y = -10
            }
        })

})