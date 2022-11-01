var font_family = 'LenzbourgmixVF.woff2'
var line_height = 1
var letter_space = 1
var text_3 = 'gGh.iIm.lLt.oOj.'
var left_array = []


    $(document).ready(function(){
counter_init++
        ready = true
        $('.division_1').append('<div class="wrapper wrapper_'+counter_init+' wrapper_text_3"></div>')
        for (var i = 0; i < text_3.split('').length; i++) {
            $('.division_1 .wrapper_'+counter_init).append("<span class='element '>"+text_3.split('')[i]+"</span>")
            if(i==text_3.split('').length-1){

                $('.wrapper_'+counter_init+' span').each(function(index){
                    left_array.push($(this).offset().left - $(this).parent().offset().left)
                })
            }
        }

        // $('.division_2').append('<div class="wrapper wrapper_'+counter_init+' wrapper_text_3"></div>')
        // for (var i = 0; i < text_3.split('').length; i++) {
        //     $('.division_2 .wrapper_'+counter_init).append("<span class='element '>"+text_3.split('')[i]+"</span>")
        //     if(i==text_3.split('').length-1){

        //         $('.wrapper_'+counter_init+' span').each(function(index){
        //             left_array.push($(this).offset().left - $(this).parent().offset().left)
        //         })
        //     }
        // }
    })