var text_2 = 'the.Next.';
update_text_2()

var left_array = []
    $(document).ready(function(){
        counter_init++
        ready = true
        $('.wrapperwrapper').append('<div class="wrapper wrapper_'+counter_init+' wrapper_text_2"></div>')
        update_text_2()
    })



function update_text_2(){
    $('.wrapper_'+counter_init).empty()
    for (var i = 0; i < text_2.split('').length; i++) {
        if(text_2.split('')[i] === ' '){
            console.log('pewori')
            text_2.split('')[i] = '&nbsp;'
        }
        	$('.wrapper_'+counter_init).append("<span class='element element_"+i+"'>"+text_2.split('')[i]+"</span>")
            if(i==text_2.split('').length-1){
                $('.wrapper_'+counter_init).css({'height':$('.wrapper_'+counter_init).outerHeight()})
                $('.wrapper_'+counter_init+' span').each(function(index){
                    left_array.push($(this).offset().left - $(this).parent().offset().left)
                })
            }
        }
}
