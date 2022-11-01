$(document).ready(function(){  
var localcounter = counter
    counter++
var i = 180
var w = 0
var j = 180
var v = 0
var k = 180
var y = 0

    transform()

        function transform(){

            var today = new Date();
            var seconds = today.getSeconds();
            var minutes = today.getMinutes();
            var hours = today.getHours();

            if((0 <= seconds) && (seconds <= 14)){
                if (seconds == 0){
                        i = 180
                        w = 0
                }else{
                    i = 180 + (seconds * 180)/15
                    w = 0 + (seconds * 180)/15
                }
            }
            if ((15 <= seconds) && (seconds <= 29)){
                    if (seconds == 15){
                        i = 360
                        w = 180
                    }else{
                        i = 360 - ((seconds-15) * 180)/15
                        w = 180 + ((seconds-15) * 180)/15
                    }
                }

            if ((30 <= seconds) && (seconds <= 44)){
                    if (seconds == 30){
                        i = 180
                        w = 360
                    }else{
                        i = 180 - ((seconds-30) * 180)/15
                        w = 360 - ((seconds-30) * 180)/15
                    }
                }

            if ((45 <= seconds) && (seconds < 60)){
                    if (seconds == 45){
                        i = 0
                        w = 180
                    }else{
                        i = 0 + ((seconds-45) * 180)/15
                        w = 180 - ((seconds-45) * 180)/15
                    }
                }




            if((0 <= minutes) && (minutes <= 14)){
                if (minutes == 0){
                        j = 180
                        v = 0
                }else{
                    j = 185 + (minutes * 180)/15
                    v = 0 + (minutes * 180)/15
                }
            }
            if ((15 <= minutes) && (minutes <= 29)){
                    if (minutes == 15){
                        j = 360
                        v = 180
                    }else{
                        j = 360 - ((minutes-15) * 180)/15
                        v = 180 + ((minutes-15) * 180)/15
                    }
                }

            if ((30 <= minutes) && (minutes <= 44)){
                    if (minutes == 30){
                        j = 180
                        v = 360
                    }else{
                        j = 180 - ((minutes-30) * 180)/15
                        v = 360 - ((minutes-30) * 180)/15
                    }
                }

            if ((45 <= minutes) && (minutes < 60)){
                    if (minutes == 45){
                        j = 0
                        v = 175
                    }else{
                        j = 0 + ((minutes-45) * 180)/15
                        v = 180 - ((minutes-45) * 180)/15
                    }
                }



            if (hours > 12){
                hours = hours - 12
            }else{
                if (hours == 0){
                    hours = 12
                }
            }

            if((0 < hours) && (hours <= 3)){
                if (hours == 3){
                        k = 360
                        y = 185
                }else{
                    k = 180 + (hours * 180)/3
                    y = 0 + (hours * 180)/3
                }
            }
            if ((3 < hours) && (hours <= 6)){
                    if (hours == 6){
                        k = 360
                        y = 180
                    }else{
                        k = 360 - ((hours-3) * 180)/3
                        y = 180 + ((hours-3) * 180)/3
                    }
                }

            if ((6 < hours) && (hours <= 9)){
                    if (hours == 9){
                        k = 0
                        y = 175
                    }else{
                        k = 180 - ((hours-6) * 180)/3
                        y = 360 - ((hours-6) * 180)/3
                    }
                }

            if ((9 < hours) && (hours <= 12)){
                    if (hours == 12){
                        k = 0
                        y = 180
                    }else{
                        k = 0 + ((hours-9) * 180)/3
                        y = 180 - ((hours-9) * 180)/3
                    }
                }

            $('.wrapper_1').eq(localcounter).find('.element').css({'font-variation-settings':'"wdth" '+y+', "ital" '+k+' '})
            $('.wrapper_2').eq(localcounter).find('.element').css({'font-variation-settings':'"wdth" '+v+', "ital" '+j+' '})
            $('.wrapper_3').eq(localcounter).find('.element').css({'font-variation-settings':'"wdth" '+w+', "ital" '+i+' '})


            setTimeout(function(){
                transform()
            },1000)
        }
})


