// $(document).ready(function(){
//     $(document).mousemove(function(event) {
//     	console.log(event.pageX)
//     	console.log(event.pageY)

//         if(event.pageX < window.outerWidth/2){
//         $('.element').css({'left':event.pageX+'px'})

//         } else {
//             $('.element').css({'left':event.pageX-20+'px'})

//         }
//     	$('.element').css({'top':event.pageY-50+'px'})

//     });
  
// })
// $(document).ready(function(){
//     $(document).mousemove(function(event) {
//      console.log(event.pageX)
//      console.log(event.pageY)

//         if(event.pageX < window.outerWidth/2){
//         $('.element').css({'left':event.pageX+'px'})

//         } else {
//             $('.element').css({'left':event.pageX-20+'px'})

//         }
//      $('.element').css({'top':event.pageY-50+'px'})

//     });
  
// })

$(document).ready(function(){
    $(document).mousemove(function(event) {
        var val_x = event.pageX-30
        if(val_x < 0){val_x = 0}
        var val_y = event.pageY-30
        if(val_y < 0){val_y = 0}
        $('.old_element').css({'left':val_x+'px'})
        $('.old_element').css({'top':val_y+'px'})

    });
    $(document).click(function(){
        $('.wrapper_1').append($('.old_element').eq(Math.floor(Math.random()*$('.old_element').length)).clone().removeClass('old_element'))
    })
  
})