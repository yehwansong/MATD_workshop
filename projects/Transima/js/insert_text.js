var text = 'transima'
var left_array = []


    $(document).ready(function(){
        counter_init++
        ready = true
        $('body').append('<div class="wrapper wrapper_'+counter_init+' wrapper_text"></div>')
        for (var i = 0; i < text.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element '>"+text.split('')[i]+"</span>")
            if(i==text.split('').length-1){

                $('.wrapper_'+counter_init+' span').each(function(index){
                    left_array.push($(this).offset().left - $(this).parent().offset().left)
                    if(index == $('.wrapper_'+counter_init+' span').length-1){

                    }
                })
            }
        }
    })