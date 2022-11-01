
            var image_width = 400
            var image_height = 100
            var horizontal_slice = 1
            var virtical_slice  = 4
            var name_of_image_file = ['img1.png','img2.jpeg','img2.jpeg','img2.jpeg']
            var outline = true

        $(document).ready(function(){
            counter_init++
            ready = true
            $('body').append('<div class="wrapper  wrapper_'+counter_init+' wrapper_image"\
                                style="width:'+image_width+'px;\
                                height:'+image_height+'px"></div>')
            for (var i = horizontal_slice-1; i >= 0; i--) {
                for (var j = virtical_slice-1; j >= 0; j--) {
                    $('.wrapper').append('<div class="element elem_hor_'+i+' elem_vir_'+j+'"\
                        style="width:'+image_width/virtical_slice+'px;\
                        height:'+image_height/horizontal_slice+'px;\
                        left:'+(image_width/virtical_slice)*j+'px;\
                        top:'+(image_height/horizontal_slice)*i+'px;\
                        background-image:url(img/'+name_of_image_file[j]+');\
                        background-size:'+100+'% '+100+'%;\
                        background-position:'+-1*100*j+'% '+-1*100*i+'%\
                        "></div>')
                    console.log(j)
                }
            }
            if(outline){
                $('.wrapper_'+counter_init).find('.element').css({'border':'0.5px solid red'})
            }
        })