var texts5 = [' P.4=Miss=Read====Berlin=',' 29-01(FRI-SUN)=/==APR=22',' J.F.D=Allee=10=====10557'];
var left_array = []

var random = Math.floor(Math.random()*texts5.length)
var county_5 = 1

function random_text(texts1)
{
return texts5[random]; 
}

var text5 = random_text(texts5)


value_x 
value_y
var counted_5 = 0
var countryy_5 = -40




animation_5()
variablefont_5()

function variablefont_5(){
    counted_5 ++
    value_x = (counted_5%125)/125*3 - 0.75
    value_y = 0

    setTimeout(function(){
        variablefont_5()
    },60)
}


function animation_5(){
    
    countryy_5 ++

    if(Math.floor(countryy_5/5)==countryy_5/5){
        $('.wrapper_5 .element_'+((countryy_5/5)%25)).empty()
        $('.wrapper_5 .element_'+((countryy_5/5)%25)).html(texts5[(random+county_5)%texts5.length].split('')[(countryy_5/5)%25])
    }

    if(countryy_5%125 == 0){
        county_5++
    }
    

    setTimeout(function(){
        animation_5()
    },30)
} 




    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div id="page2" class="wrapper wrapper_'+counter_init+' wrapper_text5"></div>')
        
        
        for (var i = 0; i < text5.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element element_"+(i)+"'>"+text5.split('')[i]+"</span>")
            if(i==text5.split('').length-1){
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






