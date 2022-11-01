var font_family = 'JESUS'
var line_height = 1
var letter_space = 0
var text = 'JESUS A'
var left_array = []


    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div class="wrapper wrapper_'+counter_init+' wrapper_text"></div>')
        for (var i = 0; i < text.split('').length; i++) {
            $('.wrapper_'+counter_init).append("<span class='element element_"+i+"'>"+text.split('')[i]+"</span>")
            if(i==text.split('').length-1){
            $('.wrapper_'+counter_init).css({'width':$('.wrapper_'+counter_init).outerWidth()})
            $('.wrapper_'+counter_init).css({'height':$('.wrapper_'+counter_init).outerHeight()})
                $('.wrapper_'+counter_init+' span').each(function(index){
                    left_array.push($(this).offset().left - $(this).parent().offset().left)
                    if(index == $('.wrapper_'+counter_init+' span').length-1){
                        $('.wrapper_'+counter_init+' span').each(function(index){
                            // $(this).css({'left':left_array[index]+'px'})
                            $(this).css({'position':'absolute'})
                        })
                    }
                })
            }
        }
    })