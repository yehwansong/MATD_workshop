

$(document).ready(function(){
        document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        }, { passive: false });

    $(document).mousemove(function(event) {
        if(event.pageX>$('.wrapper').offset().left && event.pageX<($('.wrapper').offset().left+$('.wrapper').outerWidth())){
            value_x = (event.pageX-$('.wrapper').offset().left)/$('.wrapper').outerWidth();
        }else{
            value_x = -100
        }
        if(event.pageY>$('.wrapper').offset().top && event.pageY<($('.wrapper').offset().top+$('.wrapper').outerHeight())){
            value_y = (event.pageY-$('.wrapper').offset().top)/$('.wrapper').outerHeight();
        }else{
            value_y = -10
        }
    });
        $(document).on('touchstart', function(e) {
           $('.element').addClass('show')
        })
        // $(document).on('touchend', function(e) {
        //    $('.element').removeClass('show')
        // })
        var  pre_touch_x = 0
        var  pre_touch_y = 0
        var hor_draw = false
        var ver_draw = false
        $(document).on('touchmove', function(e) {
            event.touches[0].pageX
            event.touches[0].pageY
                if( pre_touch_x == 0){pre_touch_x =event.touches[0].pageX}
                if( pre_touch_y == 0){pre_touch_y =event.touches[0].pageY}
            if(event.touches[0].pageX-pre_touch_x>20){
                console.log('sdlfkj')
                $('.wrapper_2 .element').addClass('slow')
                setTimeout(function(){
                    $('.wrapper_2 .element').removeClass('slow')
                    $('.wrapper_2 .element').removeClass('show')
                },2000)
            }
            if(event.touches[0].pageY-pre_touch_y>20){
                console.log('----')
                $('.wrapper_1 .element').addClass('slow')
                setTimeout(function(){
                    $('.wrapper_1 .element').removeClass('slow')
                    $('.wrapper_1 .element').removeClass('show')
                },2000)
            }


            value_x = map_range(event.touches[0].pageX-pre_touch_x,10,30,0,0.5)
            value_y = map_range(event.touches[0].pageY-pre_touch_y,10,30,0,0.5)
            pre_touch_x = event.touches[0].pageX
            pre_touch_y = event.touches[0].pageY


        })

})
            function map_range(value, low1, high1, low2, high2) {
                return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
            }