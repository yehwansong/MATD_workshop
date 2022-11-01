$(document).ready(function(){
  for (var i = 30; i >= 0; i--) {
    $('body').append('<img src="img/raz1.png" class="img img_'+i+'">') 
    ///$('.img_'+i).css({'transform':'rotate('+(360/30)*i+'deg) scale('+(i%2+0.5)/2+')'})
    // $('.img_'+i).css({'transform':'rotate('+(30/3)*i+'deg) scale('+((i%5)/5+0.5)+')'})///
    // $('.img_'+i).css({'transform':'rotateY('+(30/3)*i+'deg)'})
    // $('.img_'+i).css({'transform':'rotateZ('+(i*2-30)+'deg)'})

    // $('.img_'+i).css({'transform':'rotateZ('+(i*2-30)+'deg)'})
    // $('.img_'+i).css({'z-index':i%10})


    // $('.img_'+i).css({'transform':'rotateZ('+(i*2)+'deg)'})

    $('.img_'+i).css({'transform':'scaleY('+((i)/100+0.5)+') translateX('+i*100+'px)'})


  }
  // for (var j = 30; j >= 0; j--) {
  //   $('body').append('<img src="img/raz1.png" class="img img2_'+j+'">') 
  //   $('.img2_'+j).css({'transform':'rotateZ('+(j*-2)+'deg)'})
  // }
})
