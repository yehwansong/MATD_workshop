
            var image_width = 1400
            var image_height = 800
            var horizontal_slice = 8
            var virtical_slice  = 14
            var name_of_image_file = []
            var outline = true

        $(document).ready(function(){
            var text_array = ["more",  "a",  "h",  "b",  "a",  "08",  "equa",  "01",  "s",  "spac",  "a",  "y",  "o",  "06",  "spac",  "03",  "c",  "t",  "n",  "spac",  "t",  "00",  "04",  "00",  "h",  "y",  "d",  "c",  "e",  "spac",  "space",  "spac",  "o",  "p",  "hyph",  "h",  "a",  "c",  "w",  "k",  "o",  "e",  "d",  "i",  "r",  "h",  "e",  "i",  "l",  "f",  "e",  "l",  "o",  "a",  "i",  "d",  "hyph",  "a",  "s",  "d",  "a",  "r",  "g",  "s",  "p",  "c",  "i",  "r",  "comm",  "a",  "h",  "excl",  "i",  "e",  "g",  "e",  "02",  "c",  "t",  "spac",  "x",  "spac",  "n",  "n",  "00",  "t",  "s",  "colo",  "e",  "spac",  "e",  "spac",  "02",  "e",  "spac",  "hyph",  "l",  "spac",  "d",  "i",  "01",  "r",  "ampe",  "p",  "less",  "spac",  "spac",  "n",  "full",  "s",  "spac",  "full",]


            counter_init++
            ready = true
            $('body').append('<div class="wrapper  wrapper_'+counter_init+' wrapper_image"\
                                style="width:'+image_width+'px;\
                                height:'+image_height+'px"></div>')
            for (var i = horizontal_slice-1; i >= 0; i--) {
                for (var j = virtical_slice-1; j >= 0; j--) {
                var random = Math.floor(Math.random()*4)+1
                var random_2 = Math.floor(Math.random()*4)+1
                    // $('.wrapper').append('<div class="element weight_0 elem_hor_'+i+' elem_vir_'+j+'"\
                    //     style="width:'+image_width/virtical_slice+'px;\
                    //     height:'+image_height/horizontal_slice+'px;\
                    //     left:'+(image_width/virtical_slice)*j+'px;\
                    //     top:'+(image_height/horizontal_slice)*i+'px;\
                    //     background-image:url(img/'+random+'_16x16/200w/'+text_array[(j*8+i)]+'.png);\
                    //     background-size:'+100+'% '+100+'%;\
                    //     background-position:'+-1*100*j+'% '+-1*100*i+'%\
                    //     "></div>')
                    // $('.wrapper').append('<div class="element weight_1 elem_hor_'+i+' elem_vir_'+j+'"\
                    //     style="width:'+image_width/virtical_slice+'px;\
                    //     height:'+image_height/horizontal_slice+'px;\
                    //     left:'+(image_width/virtical_slice)*j+'px;\
                    //     top:'+(image_height/horizontal_slice)*i+'px;\
                    //     background-image:url(img/'+random+'_8x8/200w/'+text_array[(j*8+i)]+'.png);\
                    //     background-size:'+100+'% '+100+'%;\
                    //     background-position:'+-1*100*j+'% '+-1*100*i+'%\
                    //     "></div>')
                    // $('.wrapper').append('<div class="element weight_2 elem_hor_'+i+' elem_vir_'+j+'"\
                    //     style="width:'+image_width/virtical_slice+'px;\
                    //     height:'+image_height/horizontal_slice+'px;\
                    //     left:'+(image_width/virtical_slice)*j+'px;\
                    //     top:'+(image_height/horizontal_slice)*i+'px;\
                    //     background-image:url(img/'+random+'_5x5/200w/'+text_array[(j*8+i)]+'.png);\
                    //     background-size:'+100+'% '+100+'%;\
                    //     background-position:'+-1*100*j+'% '+-1*100*i+'%\
                    //     "></div>')
                    $('.wrapper').append('<div class="element weight_3 elem_hor_'+i+' elem_vir_'+j+'"\
                        style="width:'+image_width/virtical_slice+'px;\
                        height:'+image_height/horizontal_slice+'px;\
                        left:'+(image_width/virtical_slice)*j+'px;\
                        top:'+(image_height/horizontal_slice)*i+'px;\
                        background-size:'+100+'% '+100+'%;\
                        background-position:'+-1*100*j+'% '+-1*100*i+'%\
                        "></div>')
                    $("head").append("<style>\
                        .weight_3.elem_hor_"+i+".elem_vir_"+j+"{background-image:url(img/"+random+"_4x4/200w/"+text_array[(j*8+i)]+".png)}\
                        .weight_2.elem_hor_"+i+".elem_vir_"+j+"{background-image:url(img/"+random+"_5x5/200w/"+text_array[(j*8+i)]+".png)}\
                        .weight_1.elem_hor_"+i+".elem_vir_"+j+"{background-image:url(img/"+random+"_8x8/200w/"+text_array[(j*8+i)]+".png)}\
                        .weight_0.elem_hor_"+i+".elem_vir_"+j+"{background-image:url(img/"+random+"_16x16/200w/"+text_array[(j*8+i)]+".png)}\
                    }</style>")

                }
            }
            if(outline){
                $('.wrapper_'+counter_init).find('.element').css({'border':'0.0px solid white'})
            } 
            $('.element').mouseenter(function(){

                var current_w = parseInt($(this).attr('class').split('weight_')[1].split(' ')[0])
                if(current_w-1 < 0){
                    $(this).removeClass("weight_"+current_w).addClass("weight_"+3)
                }else{
                    $(this).removeClass("weight_"+current_w).addClass("weight_"+(current_w-1))
                }

                // if(current_w+1 > 3){
                //     $(this).removeClass("weight_"+current_w).addClass("weight_"+0)
                // }else{
                //     $(this).removeClass("weight_"+current_w).addClass("weight_"+(current_w+1))
                // }

            })
        })

