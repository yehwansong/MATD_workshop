var text = '..........................................................................................................................................................................................................................';

// Set the date we're counting down to
var countDownDate = new Date("Oct 22, 2027 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  text = days + "days." + hours + "h." + minutes + "min." + seconds + "s.";
    update_text()
}, 1000);



var left_array = []
    $(document).ready(function(){
        counter_init++
        ready = true
        $('.wrapperwrapper').append('<div class="wrapper wrapper_'+counter_init+' wrapper_text"></div>')
        update_text()
    })




function update_text(){
    $('.wrapper_'+counter_init).empty()
    for (var i = 0; i < text.split('').length; i++) {
        if(text.split('')[i] === ' '){
            console.log('pewori')
            text.split('')[i] = '&nbsp;'
        }
        	$('.wrapper_'+counter_init).append("<span class='element element_"+i+"'>"+text.split('')[i]+"</span>")
            if(i==text.split('').length-1){
                $('.wrapper_'+counter_init).css({'height':$('.wrapper_'+counter_init).outerHeight()})
                $('.wrapper_'+counter_init+' span').each(function(index){
                    left_array.push($(this).offset().left - $(this).parent().offset().left)
                })
            }
        }
}
