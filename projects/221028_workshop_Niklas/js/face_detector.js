$(document).ready(function(){
  

var ctx = createCanvas("canvas1");
        const video4 = document.getElementById('videoOutput');

        const camera = new Camera(video4, {
          onFrame: async () => {
            await holistic.send({image: video4});
          },
          width: $('video').outerWidth(),
          height: $('video').outerHeight()
        });

        camera.start();


        function onResultsHolistic(results) {
            if(results.faceLandmarks){
                var distance = get_dis(results.faceLandmarks[13].x,results.faceLandmarks[13].y,results.faceLandmarks[14].x,results.faceLandmarks[14].y)
                //variable for face distance
                // var distance = get_dis_vert(results.faceLandmarks[10].x,results.faceLandmarks[10].y,results.faceLandmarks[175].x,results.faceLandmarks[175].y)
                value = map_range(distance, 0, 0.1, 0, 100)
                value_x = results.faceLandmarks[4].x
                value_x = map_range(value_x, 0, 1, 0, 100)
                value_y = results.faceLandmarks[4].y
                value_y = map_range(value_y, 0, 1, 0, 100)
            }
            if(results.leftHandLandmarks){
            }
            if(results.rightHandLandmarks){
            }
            document.body.classList.add('loaded');
            // removeLandmarks(results);
            // fpsControl.tick();
            ctx.save();
            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(results.image, 0, 0, w, h);
        }
            console.log('eh')

        const holistic = new Holistic({locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.1/${file}`;
        }});
        holistic.onResults(onResultsHolistic);

})

function get_dis(x1,y1,x2,y2){
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.sqrt( a*a + b*b );
}


// //function for face distance
// function get_dis_vert(x1,y1,x2,y2){
//   var c = x1 - x2;
//   var d = y1 - y2;

//   return Math.sqrt( c*c + d*d );
// }

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

