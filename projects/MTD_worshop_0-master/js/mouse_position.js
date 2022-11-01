

$(document).ready(function(){
        document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        }, { passive: false });

     $(document).mousemove(function(event) {

        console.log(event.clientX)

            value_x = (event.clientX)/$('body').outerWidth();
            value_y = (event.clientY)/$('body').outerHeight();

///////////////grid folowin mouse/////////
            $(".division_1").css({"height":event.clientY+"px"})
            $(".division_1").css({"window":event.clientX+"px"})

            $(".division_2").css({"height":event.clientY/2+"px"})

            $(".division_3").css({"top":event.clientY/2+"px"})
            $(".division_3").css({"height":event.clientY/2+"px"})

            $(".division_4").css({"top":event.clientY+"px"})
            $(".division_4").css({"height":(window.innerHeight - event.clientY)+"px"})




    });
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