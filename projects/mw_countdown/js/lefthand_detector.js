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
            }
            if(results.leftHandLandmarks){
                value_y = results.leftHandLandmarks[5].y
            }
            if(results.rightHandLandmarks){
                value_x = 1-results.rightHandLandmarks[5].x
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


