var texts4 = [' P.5=Border_less=Beyoglu=',' 12-15(THU-SUN)=/==MAY=22',' Irmak=Cd==No:13====34435'];
var left_array = []

var random = Math.floor(Math.random()*texts4.length)
var county_4 = 1

function random_text(texts1)
{
return texts4[random]; 
}

var text4 = random_text(texts4)


value_x 
value_y
var counted_4 = 0
var countryy_4 = -40




animation_4()
variablefont_4()

function variablefont_4(){
    counted_4 ++
    value_x = (counted_4%125)/125*3 - 0.75
    value_y = 0

    setTimeout(function(){
        variablefont_4()
    },60)
}


function animation_4(){
    
    countryy_4 ++

    if(Math.floor(countryy_4/5)==countryy_4/5){
        $('.wrapper_4 .element_'+((countryy_4/5)%25)).empty()
        $('.wrapper_4 .element_'+((countryy_4/5)%25)).html(texts4[(random+county_4)%texts4.length].split('')[(countryy_4/5)%25])
    }

    if(countryy_4%125 == 0){
        county_4++
    }
    

    setTimeout(function(){
        animation_4()
    },30)
} 




    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div id="page2" class="wrapper wrapper_'+counter_init+' wrapper_text4"></div>')
        
        
        for (var i = 0; i < text4.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element element_"+(i)+"'>"+text4.split('')[i]+"</span>")
            if(i==text4.split('').length-1){
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






