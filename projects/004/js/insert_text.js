var texts1 = [' U.2.Sprint=ABF===Milano=',' 26-27(SAT-SUN=/=NOV=2022',' V.A=Maiocchi==7==2012921'];
var left_array = []

var random = Math.floor(Math.random()*texts1.length)
var county_1 = 1

function random_text(texts1)
{
return texts1[random]; 
}

var text1 = random_text(texts1)


value_x 
value_y
var counted_1 = 0
var countryy_1 = -40




animation_1()
variablefont_1()

function variablefont_1(){
    counted_1 ++
    value_x = (counted_1%125)/125*3 - 0.75
    value_y = 0

    setTimeout(function(){
        variablefont_1()
    },60)
}


function animation_1(){
    
    countryy_1 ++

    if(Math.floor(countryy_1/5)==countryy_1/5){
        $('.wrapper_1 .element_'+((countryy_1/5)%25)).empty()
        $('.wrapper_1 .element_'+((countryy_1/5)%25)).html(texts1[(random+county_1)%texts1.length].split('')[(countryy_1/5)%25])
    }

    if(countryy_1%125 == 0){
        county_1++
    }
    

    setTimeout(function(){
        animation_1()
    },30)
} 




    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div id="page2" class="wrapper wrapper_'+counter_init+' wrapper_text2"></div>')
        
        
        for (var i = 0; i < text1.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element element_"+(i)+"'>"+text1.split('')[i]+"</span>")
            if(i==text1.split('').length-1){
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






