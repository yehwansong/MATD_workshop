var font_family = 'tennisVF'
var line_height = 1
var letter_space = 0
var text = '11111111111KJHrewq11hjmssMkl11qwerrtyu11BNVLXMNyZ11111111111'
// var text = '11111111111iopasdfg11hjerrekl11szxcvbns11iopasdfg11111111111'
// var text = '1111a1111'
var left_array = []


    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div class="wrapper wrapper_'+counter_init+' wrapper_text"></div>')
        for (var i = 0; i < text.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element '>"+text.split('')[i]+"</span>")
            if(i==text.split('').length-1){
                setTimeout(function(){
                    $('.wrapper_'+counter_init).css({'width':$('.wrapper_'+counter_init).outerWidth()})
                    $('.wrapper_'+counter_init).css({'height':$('.wrapper_'+counter_init).outerHeight()})

                    $('.wrapper_'+counter_init+' span').each(function(index){
                        left_array.push($(this).offset().left - $(this).parent().offset().left)
                        if(index == $('.wrapper_'+counter_init+' span').length-1){
                            $('.wrapper_'+counter_init+' span').each(function(index){
                                $(this).css({'left':left_array[index]+'px'})
                                $(this).css({'position':'absolute'})
                            })

                        }
                    })

                },1000)
            }
        }
    })