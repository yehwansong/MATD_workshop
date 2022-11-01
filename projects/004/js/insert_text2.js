var texts2 = [' U.1.Offprint=====Paris==',' 10-13(FRI-SUN)=/=NOV2022',' B.d==Morland=======75004'];
var left_array = []

var random = Math.floor(Math.random()*texts2.length)
var county = 1

function random_text(texts2)
{
return texts2[random]; 
}

var text2 = random_text(texts2)


value_x 
value_y
var counted = 0
var countryy = -40


animation()
variablefont()

function variablefont(){
    counted ++
    value_x = (counted%125)/125*3 - 0.75
    value_y = 0

    setTimeout(function(){
        variablefont()
    },60)
}


function animation(){
    
    countryy ++

    if(Math.floor(countryy/5)==countryy/5){
        $('.wrapper_2 .element_'+((countryy/5)%25)).empty()
        $('.wrapper_2 .element_'+((countryy/5)%25)).html(texts2[(random+county)%texts2.length].split('')[(countryy/5)%25])
    }

    if(countryy%125 == 0){
        county++
    }
    

    setTimeout(function(){
        animation()
    },30)
} 




    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div id="page2" class="wrapper wrapper_'+counter_init+' wrapper_text2"></div>')
        
        
        for (var i = 0; i < text2.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element element_"+(i)+"'>"+text2.split('')[i]+"</span>")
            if(i==text2.split('').length-1){
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






