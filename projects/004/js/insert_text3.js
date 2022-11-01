var texts3 = [' P.6=Offprint====London==',' 13-15(FRI-SUN)=/=MAY==22',' Tate=Modern=London===SE1'];
var left_array = []

var random = Math.floor(Math.random()*texts3.length)
var county_3 = 1

function random_text(texts1)
{
return texts3[random]; 
}

var text3 = random_text(texts3)


value_x 
value_y
var counted_3 = 0
var countryy_3 = -40




animation_3()
variablefont_3()

function variablefont_3(){
    counted_3 ++
    value_x = (counted_3%125)/125*3 - 0.75
    value_y = 0

    setTimeout(function(){
        variablefont_3()
    },60)
}


function animation_3(){
    
    countryy_3 ++

    if(Math.floor(countryy_3/5)==countryy_3/5){
        $('.wrapper_3 .element_'+((countryy_3/5)%25)).empty()
        $('.wrapper_3 .element_'+((countryy_3/5)%25)).html(texts3[(random+county_3)%texts3.length].split('')[(countryy_3/5)%25])
    }

    if(countryy_3%125 == 0){
        county_3++
    }
    

    setTimeout(function(){
        animation_3()
    },30)
} 




    $(document).ready(function(){
counter_init++
        ready = true
        $('body').append('<div id="page2" class="wrapper wrapper_'+counter_init+' wrapper_text3"></div>')
        
        
        for (var i = 0; i < text3.split('').length; i++) {
        	$('.wrapper_'+counter_init).append("<span class='element element_"+(i)+"'>"+text3.split('')[i]+"</span>")
            if(i==text3.split('').length-1){
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






