var font_family = 'Cabin-VariableFont.ttf'
var line_height = 1
var letter_space = 0
var text_1 = "AESTHETIC"
var left_array = []


    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div class="wrapper wrapper_'+counter_init+' wrapper_text_1"></div>')
        for (var i = 0; i < text_1.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element '>"+text_1.split('')[i]+"</span>")
            if(i==text_1.split('').length-1){
            $('.wrapper_'+counter_init).css({'width':$('.wrapper_'+counter_init).outerWidth()})
            $('.wrapper_'+counter_init).css({'height':$('.wrapper_'+counter_init).outerHeight()})

                $('.wrapper_'+counter_init+' span').each(function(index){
                    left_array.push($(this).offset().left - $(this).parent().offset().left)
                })
            }
        }
    })