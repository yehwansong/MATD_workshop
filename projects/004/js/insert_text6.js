var texts6 = [' P.5=Border_less=Beyoglu=',' 12-15(THU-SUN)=/==MAY=22',' Irmak=Cd==No:13====34435'];
var left_array = []

var random = Math.floor(Math.random()*texts6.length)
var county_6 = 1

function random_text(texts1)
{
return texts6[random]; 
}

var text6 = random_text(texts6)


value_x 
value_y
var counted_6 = 0
var countryy_6 = -40




animation_6()
variablefont_6()

function variablefont_6(){
    counted_6 ++
    value_x = (counted_6%125)/125*3 - 0.75
    value_y = 0

    setTimeout(function(){
        variablefont_6()
    },60)
}


function animation_6(){
    
    countryy_6 ++

    if(Math.floor(countryy_6/5)==countryy_6/5){
        $('.wrapper_6 .element_'+((countryy_6/5)%25)).empty()
        $('.wrapper_6 .element_'+((countryy_6/5)%25)).html(texts6[(random+county_6)%texts6.length].split('')[(countryy_6/5)%25])
    }

    if(countryy_6%125 == 0){
        county_6++
    }
    

    setTimeout(function(){
        animation_6()
    },30)
} 




    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div id="page2" class="wrapper wrapper_'+counter_init+' wrapper_text6"></div>')
        
        
        for (var i = 0; i < text6.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element element_"+(i)+"'>"+text6.split('')[i]+"</span>")
            if(i==text6.split('').length-1){
            $('.wrapper_'+counter_init).css({'width':$('.wrapper_'+counter_init).outerWidth()})
            $('.wrapper_'+counter_init).css({'height':$('.wrapper_'+counter_init).outerHeight()})

                $('.wrapper_'+counter_init+' span').each(function(index){
                    left_array.push($(this).offset().left - $(this).parent().offset().left)
                    if(index == $('.wrapper_'+counter_init+' span').length-1){
                    }
                })
            }
        }

    })






