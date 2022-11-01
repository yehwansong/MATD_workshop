

$(document).ready(function(){
   var pre_distance = 0
   var zoomin = false
        document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        }, { passive: false });

        $(document).on('touchstart', function(e) {
            if(event.touches.length>1){
            }
        })
        $(document).on('touchmove', function(e) {
            if(event.touches.length>1){
            var distance = get_dis(event.touches[0].pageX,event.touches[0].pageY,event.touches[1].pageX,event.touches[1].pageY)
                if(pre_distance>distance) {
                    zoomin = false
                }else{
                    zoomin = true
                }
                console.log(distance)
            pre_distance = distance
            value = distance
            }

        })

})
            function get_dis(x1,y1,x2,y2){
                var a = x1 - x2;
                var b = y1 - y2;

                return Math.sqrt( a*a + b*b );
            }