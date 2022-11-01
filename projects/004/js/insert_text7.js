var texts7 = [' P.4=Miss=Read====Berlin=',' 29-01(FRI-SUN)=/==APR=22=',' J.F.D=Allee=10=====10557'];
var left_array = []

var random = Math.floor(Math.random()*texts7.length)
var county_7 = 1

function random_text(texts1)
{
return texts7[random]; 
}

var text7 = random_text(texts7)


value_x 
value_y
var counted_7 = 0
var countryy_7 = -40




animation_7()
variablefont_7()

function variablefont_7(){
    counted_7 ++
    value_x = (counted_7%125)/125*3 - 0.75
    value_y = 0

    setTimeout(function(){
        variablefont_7()
    },60)
}


function animation_7(){
    
    countryy_7 ++

    if(Math.floor(countryy_7/5)==countryy_7/5){
        $('.wrapper_7 .element_'+((countryy_7/5)%25)).empty()
        $('.wrapper_7 .element_'+((countryy_7/5)%25)).html(texts7[(random+county_7)%texts7.length].split('')[(countryy_7/5)%25])
    }

    if(countryy_7%125 == 0){
        county_7++
    }
    

    setTimeout(function(){
        animation_7()
    },30)
} 




    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div id="page2" class="wrapper wrapper_'+counter_init+' wrapper_text7"></div>')
        
        
        for (var i = 0; i < text7.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element element_"+(i)+"'>"+text7.split('')[i]+"</span>")
            if(i==text7.split('').length-1){
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






