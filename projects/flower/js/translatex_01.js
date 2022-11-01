$(document).ready(function(){

if($('body').hasClass('js16')){

        // LOOP
            var min_left = 100000000
            var min_top = 100000000
            var max_right = 0
            var max_bottom = 0
// *****

  for (var i = 100; i >= 0; i--) {
    $('.wrapper').append('<div class="img img_'+i+'"></div>') 

// BACKGROUND IMAGE
    $("html").css("background-color","white");

// ORIGIN

    $('.img_'+i).css({'transform-origin':'bottom'})

// POSITION

    // $('.img_'+i).css({bottom:'50vh',left:'36%',margin:'-'+($('img_').height() / 2)+'px 0 0 -'+($('img_').width() / 2)+'px'});

// SIZE

    $('.img_'+i).width(600); // Units are assumed to be pixels
    $('.img_'+i).height(600);


// GENERATOR

    $('.img_'+i).css({'transform':'rotate('+(360/30)*i+'deg) scale('+(i%2+5)/10+') translateX('+i*5+'px)'})


    // $('.img_'+i).css({'transform':'rotate('+(30/3)*i+'deg) scale('+((i%5)/5+0.5)+')'})///
    // $('.img_'+i).css({'transform':'rotateY('+(30/3)*i+'deg)'})
    // $('.img_'+i).css({'transform':'rotateZ('+(i*2-30)+'deg)'})

    // $('.img_'+i).css({'transform':'rotateZ('+(i*2-30)+'deg)'})
    // $('.img_'+i).css({'z-index':i%10})


    // $('.img_'+i).css({'transform':'rotateZ('+(i*2)+'deg)'})

    // $('.img_'+i).css({'transform':'scaleY('+((i)/100+0.5)+') translateX('+i*100+'px)'})

// *****


            if($('.img_'+i)[0].getBoundingClientRect().left<min_left){
                 min_left = $('.img_'+i)[0].getBoundingClientRect().left
            }
            if($('.img_'+i)[0].getBoundingClientRect().top<min_top){
                 min_top = $('.img_'+i)[0].getBoundingClientRect().top
            }
            if($('.img_'+i)[0].getBoundingClientRect().right>max_right){
                 max_right = $('.img_'+i)[0].getBoundingClientRect().right
            }
            if($('.img_'+i)[0].getBoundingClientRect().bottom>max_bottom){
                 max_bottom = $('.img_'+i)[0].getBoundingClientRect().bottom
            }

            if(i == 0){
                $('.wrapper').find('.img').css({'margin-left':-1*(min_left)+'px'})
                $('.wrapper').find('.img').css({'margin-top':-1*(min_top)+'px'})
                $('.wrapper').css({'width':(max_right - min_left)+'px'})
                $('.wrapper').css({'height':(max_bottom - min_top)+'px'})
                if(window.innerWidth<(max_right - min_left)){
                    $('.wrapper').css({'transform':'translate(-50%, -50%) scale('+window.innerWidth/(max_right - min_left)+')'})
                }
                if((window.innerHeight-$('body').outerHeight())<(max_bottom - min_top)){
                    $('.wrapper').css({'transform':'translate(-50%, -51%) scale('+(window.innerHeight-$('body').outerHeight())/(max_bottom - min_top)+')'})
                }
                $('.wrapper').css({'margin-top':$('body').outerHeight()/2+'px'})
            }



// *****




          }

          // IMAGE 2

          // for (var j = 30; j >= 0; j--) {
          //   $('body').append('<img src="img/raz1.png" class="img img2_'+j+'">') 
          //   $('.img2_'+j).css({'transform':'rotateZ('+(j*-2)+'deg)'})
          // }





        // UPLOAD

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('.img').css('background-image', 'url('+e.target.result +')');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function() {
            readURL(this);
        });
}


})
