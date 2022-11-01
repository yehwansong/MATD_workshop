$(document).ready(function(){

    var currentUrl= window.location.href;
	var current_filter
	var current_transform

    if (currentUrl.indexOf('#') > -1) {
    }else{
    	console.log('2')
				window.location.hash='1'
				location.reload();
    }
    if (currentUrl.indexOf('#') > -1) {
        var hashTag= currentUrl.substring(currentUrl.indexOf('#')+1);
        
	        if(hashTag === '1'){
	        	$('body').addClass('js1')
	        	$('body').addClass('css1')
				current_transform = 'js1'
	        	current_filter = 'css1'
	        	$("#css1").prop("checked", true);
		    	$("#js1").prop("checked", true);
	    	}
			if(hashTag === '2'){
		    	$('body').addClass('js1')
		    	$('body').addClass('css2')
	        	current_transform = 'js1'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js1").prop("checked", true);
			}
			if(hashTag === '3'){
		    	$('body').addClass('js1')
		    	$('body').addClass('css3')
	        	current_transform = 'js1'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js1").prop("checked", true);
			}

			if(hashTag === '4'){
		    	$('body').addClass('js1')
		    	$('body').addClass('css4')
	        	current_transform = 'js1'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js1").prop("checked", true);
			}

			if(hashTag === '5'){
		    	$('body').addClass('js1')
		    	$('body').addClass('css5')
	        	current_transform = 'js1'
				current_filter = 'css5'
				$("#css5").prop("checked", true);
		    	$("#js1").prop("checked", true);
			}
						// ************** Scale_01

		    if(hashTag === '6'){
		    	$('body').addClass('js2')
		    	$('body').addClass('css1')
	        	current_filter = 'js2'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js2").prop("checked", true);
			}
			    if(hashTag === '7'){
		    	$('body').addClass('js2')
		    	$('body').addClass('css2')
	        	current_filter = 'js2'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js2").prop("checked", true);
			}
			if(hashTag === '8'){
		    	$('body').addClass('js2')
		    	$('body').addClass('css3')
	        	current_filter = 'js2'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js2").prop("checked", true);
			}

			if(hashTag === '9'){
		    	$('body').addClass('js2')
		    	$('body').addClass('css4')
		    	current_transform = 'js2'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js2").prop("checked", true);
			}

			if(hashTag === '10'){
		    	$('body').addClass('js2')
		    	$('body').addClass('css5')
		    	current_transform = 'js2'
				current_filter = 'css5'
				$("#css5").prop("checked", true);
		    	$("#js2").prop("checked", true);
			}
			    		// ************** Scale_02
			
		    if(hashTag === '11'){
		    	$('body').addClass('js3')
		    	$('body').addClass('css1')
		    	current_transform = 'js3'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js3").prop("checked", true);
			}
			    if(hashTag === '12'){
		    	$('body').addClass('js3')
		    	$('body').addClass('css2')
		    	current_transform = 'js3'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js3").prop("checked", true);
			}
			if(hashTag === '13'){
		    	$('body').addClass('js3')
		    	$('body').addClass('css3')
		    	current_transform = 'js3'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js3").prop("checked", true);
			}

			if(hashTag === '14'){
		    	$('body').addClass('js3')
		    	$('body').addClass('css4')
		    	current_transform = 'js3'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js3").prop("checked", true);
			}

			if(hashTag === '15'){
		    	$('body').addClass('js3')
		    	$('body').addClass('css5')
		    	current_transform = 'js3'
				current_filter = 'css5'
				$("#css5").prop("checked", true);
		    	$("#js3").prop("checked", true);
			}
			    		// ************** Scale_03
			
		    if(hashTag === '16'){
		    	$('body').addClass('js4')
		    	$('body').addClass('css1')
		    	current_transform = 'js4'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js4").prop("checked", true);
			}
			    if(hashTag === '17'){
		    	$('body').addClass('js4')
		    	$('body').addClass('css2')
		    	current_transform = 'js4'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js4").prop("checked", true);
			}
			if(hashTag === '18'){
		    	$('body').addClass('js4')
		    	$('body').addClass('css3')
		    	current_transform = 'js4'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js4").prop("checked", true);
			}

			if(hashTag === '19'){
		    	$('body').addClass('js4')
		    	$('body').addClass('css4')
		    	current_transform = 'js4'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js4").prop("checked", true);
			}

			if(hashTag === '20'){
		    	$('body').addClass('js4')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js4'
		    	$("#css5").prop("checked", true);
		    	$("#js4").prop("checked", true);
			}

			    		// ************** simple_05
			
		    if(hashTag === '21'){
		    	$('body').addClass('js5')
		    	$('body').addClass('css1')
		    	current_transform = 'js5'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js5").prop("checked", true);
			}
			    if(hashTag === '22'){
		    	$('body').addClass('js5')
		    	$('body').addClass('css2')
		    	current_transform = 'js5'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js5").prop("checked", true);
			}
			if(hashTag === '23'){
		    	$('body').addClass('js5')
		    	$('body').addClass('css3')
		    	current_transform = 'js5'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js5").prop("checked", true);
			}

			if(hashTag === '24'){
		    	$('body').addClass('js5')
		    	$('body').addClass('css4')
		    	current_transform = 'js5'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js5").prop("checked", true);
			}

			if(hashTag === '25'){
		    	$('body').addClass('js5')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js5'
		    	$("#css5").prop("checked", true);
		    	$("#js5").prop("checked", true);
			}

						    		// ************** simple_10
			
		    if(hashTag === '26'){
		    	$('body').addClass('js6')
		    	$('body').addClass('css1')
		    	current_transform = 'js6'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js6").prop("checked", true);
			}
			    if(hashTag === '27'){
		    	$('body').addClass('js6')
		    	$('body').addClass('css2')
		    	current_transform = 'js6'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js6").prop("checked", true);
			}
			if(hashTag === '28'){
		    	$('body').addClass('js6')
		    	$('body').addClass('css3')
		    	current_transform = 'js6'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js6").prop("checked", true);
			}

			if(hashTag === '29'){
		    	$('body').addClass('js6')
		    	$('body').addClass('css4')
		    	current_transform = 'js6'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js6").prop("checked", true);
			}

			if(hashTag === '30'){
		    	$('body').addClass('js6')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js6'
		    	$("#css5").prop("checked", true);
		    	$("#js6").prop("checked", true);
			}

						    		// ************** simple_20
			
		    if(hashTag === '31'){
		    	$('body').addClass('js7')
		    	$('body').addClass('css1')
		    	current_transform = 'js7'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js7").prop("checked", true);
			}
			    if(hashTag === '32'){
		    	$('body').addClass('js7')
		    	$('body').addClass('css2')
		    	current_transform = 'js7'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js7").prop("checked", true);
			}
			if(hashTag === '33'){
		    	$('body').addClass('js7')
		    	$('body').addClass('css3')
		    	current_transform = 'js7'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js7").prop("checked", true);
			}

			if(hashTag === '34'){
		    	$('body').addClass('js7')
		    	$('body').addClass('css4')
		    	current_transform = 'js7'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js7").prop("checked", true);
			}

			if(hashTag === '35'){
		    	$('body').addClass('js7')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js7'
		    	$("#css5").prop("checked", true);
		    	$("#js7").prop("checked", true);
			}

						    		// ************** simple_40
			
		    if(hashTag === '36'){
		    	$('body').addClass('js8')
		    	$('body').addClass('css1')
		    	current_transform = 'js8'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js8").prop("checked", true);
			}
			    if(hashTag === '37'){
		    	$('body').addClass('js8')
		    	$('body').addClass('css2')
		    	current_transform = 'js8'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js8").prop("checked", true);
			}
			if(hashTag === '38'){
		    	$('body').addClass('js8')
		    	$('body').addClass('css3')
		    	current_transform = 'js8'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js8").prop("checked", true);
			}

			if(hashTag === '39'){
		    	$('body').addClass('js8')
		    	$('body').addClass('css4')
		    	current_transform = 'js8'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js8").prop("checked", true);
			}

			if(hashTag === '40'){
		    	$('body').addClass('js8')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js8'
		    	$("#css5").prop("checked", true);
		    	$("#js8").prop("checked", true);
			}

						    		// ************** simple_80
			
		    if(hashTag === '41'){
		    	$('body').addClass('js9')
		    	$('body').addClass('css1')
		    	current_transform = 'js9'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js9").prop("checked", true);
			}
			    if(hashTag === '42'){
		    	$('body').addClass('js9')
		    	$('body').addClass('css2')
		    	current_transform = 'js9'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js9").prop("checked", true);
			}
			if(hashTag === '43'){
		    	$('body').addClass('js9')
		    	$('body').addClass('css3')
		    	current_transform = 'js9'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js9").prop("checked", true);
			}

			if(hashTag === '44'){
		    	$('body').addClass('js9')
		    	$('body').addClass('css4')
		    	current_transform = 'js9'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js9").prop("checked", true);
			}

			if(hashTag === '45'){
		    	$('body').addClass('js9')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js9'
		    	$("#css5").prop("checked", true);
		    	$("#js9").prop("checked", true);
			}

						    		// ************** spriral_01
			
		    if(hashTag === '46'){
		    	$('body').addClass('js10')
		    	$('body').addClass('css1')
		    	current_transform = 'js10'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js10").prop("checked", true);
			}
			    if(hashTag === '47'){
		    	$('body').addClass('js10')
		    	$('body').addClass('css2')
		    	current_transform = 'js10'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js10").prop("checked", true);
			}
			if(hashTag === '48'){
		    	$('body').addClass('js10')
		    	$('body').addClass('css3')
		    	current_transform = 'js10'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js10").prop("checked", true);
			}

			if(hashTag === '49'){
		    	$('body').addClass('js10')
		    	$('body').addClass('css4')
		    	current_transform = 'js10'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js10").prop("checked", true);
			}

			if(hashTag === '50'){
		    	$('body').addClass('js10')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js10'
		    	$("#css5").prop("checked", true);
		    	$("#js10").prop("checked", true);
			}

						    		// ************** spiral_02
			
		    if(hashTag === '51'){
		    	$('body').addClass('js11')
		    	$('body').addClass('css1')
		    	current_transform = 'js11'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js11").prop("checked", true);
			}
			    if(hashTag === '52'){
		    	$('body').addClass('js11')
		    	$('body').addClass('css2')
		    	current_transform = 'js11'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js11").prop("checked", true);
			}
			if(hashTag === '53'){
		    	$('body').addClass('js11')
		    	$('body').addClass('css3')
		    	current_transform = 'js11'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js11").prop("checked", true);
			}

			if(hashTag === '54'){
		    	$('body').addClass('js11')
		    	$('body').addClass('css4')
		    	current_transform = 'js11'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js11").prop("checked", true);
			}

			if(hashTag === '55'){
		    	$('body').addClass('js11')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js11'
		    	$("#css5").prop("checked", true);
		    	$("#js11").prop("checked", true);
			}

						    		// ************** spiral_02
			
		    if(hashTag === '56'){
		    	$('body').addClass('js12')
		    	$('body').addClass('css1')
		    	current_transform = 'js12'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js12").prop("checked", true);
			}
			    if(hashTag === '57'){
		    	$('body').addClass('js12')
		    	$('body').addClass('css2')
		    	current_transform = 'js12'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js12").prop("checked", true);
			}
			if(hashTag === '58'){
		    	$('body').addClass('js12')
		    	$('body').addClass('css3')
		    	current_transform = 'js12'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js12").prop("checked", true);
			}

			if(hashTag === '59'){
		    	$('body').addClass('js12')
		    	$('body').addClass('css4')
		    	current_transform = 'js12'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js12").prop("checked", true);
			}

			if(hashTag === '60'){
		    	$('body').addClass('js12')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js12'
		    	$("#css5").prop("checked", true);
		    	$("#js12").prop("checked", true);
			}

						    		// ************** spiral_03
			
		    if(hashTag === '61'){
		    	$('body').addClass('js13')
		    	$('body').addClass('css1')
		    	current_transform = 'js13'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js13").prop("checked", true);
			}
			    if(hashTag === '62'){
		    	$('body').addClass('js13')
		    	$('body').addClass('css2')
		    	current_transform = 'js13'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js13").prop("checked", true);
			}
			if(hashTag === '63'){
		    	$('body').addClass('js13')
		    	$('body').addClass('css3')
		    	current_transform = 'js13'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js13").prop("checked", true);
			}

			if(hashTag === '64'){
		    	$('body').addClass('js13')
		    	$('body').addClass('css4')
		    	current_transform = 'js13'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js13").prop("checked", true);
			}

			if(hashTag === '65'){
		    	$('body').addClass('js13')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js13'
		    	$("#css5").prop("checked", true);
		    	$("#js13").prop("checked", true);
			}

						    		// ************** tri_01
			
		    if(hashTag === '66'){
		    	$('body').addClass('js14')
		    	$('body').addClass('css1')
		    	current_transform = 'js14'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js14").prop("checked", true);
			}
			    if(hashTag === '67'){
		    	$('body').addClass('js14')
		    	$('body').addClass('css2')
		    	current_transform = 'js14'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js14").prop("checked", true);
			}
			if(hashTag === '68'){
		    	$('body').addClass('js14')
		    	$('body').addClass('css3')
		    	current_transform = 'js14'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js14").prop("checked", true);
			}

			if(hashTag === '69'){
		    	$('body').addClass('js14')
		    	$('body').addClass('css4')
		    	current_transform = 'js14'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js14").prop("checked", true);
			}

			if(hashTag === '70'){
		    	$('body').addClass('js14')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js14'
		    	$("#css5").prop("checked", true);
		    	$("#js14").prop("checked", true);
			}

						    		// ************** tri_02
			
		    if(hashTag === '71'){
		    	$('body').addClass('js15')
		    	$('body').addClass('css1')
		    	current_transform = 'js15'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js15").prop("checked", true);
			}
			    if(hashTag === '72'){
		    	$('body').addClass('js15')
		    	$('body').addClass('css2')
		    	current_transform = 'js15'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js15").prop("checked", true);
			}
			if(hashTag === '73'){
		    	$('body').addClass('js15')
		    	$('body').addClass('css3')
		    	current_transform = 'js15'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js15").prop("checked", true);
			}

			if(hashTag === '74'){
		    	$('body').addClass('js15')
		    	$('body').addClass('css4')
		    	current_transform = 'js15'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js15").prop("checked", true);
			}

			if(hashTag === '75'){
		    	$('body').addClass('js15')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js15'
		    	$("#css5").prop("checked", true);
		    	$("#js15").prop("checked", true);
			}

						    		// ************** trans_01
			
		    if(hashTag === '76'){
		    	$('body').addClass('js16')
		    	$('body').addClass('css1')
		    	current_transform = 'js16'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js16").prop("checked", true);
			}
			    if(hashTag === '77'){
		    	$('body').addClass('js16')
		    	$('body').addClass('css2')
		    	current_transform = 'js16'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js16").prop("checked", true);
			}
			if(hashTag === '78'){
		    	$('body').addClass('js16')
		    	$('body').addClass('css3')
		    	current_transform = 'js16'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js16").prop("checked", true);
			}

			if(hashTag === '79'){
		    	$('body').addClass('js16')
		    	$('body').addClass('css4')
		    	current_transform = 'js16'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js16").prop("checked", true);
			}

			if(hashTag === '80'){
		    	$('body').addClass('js16')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js16'
		    	$("#css5").prop("checked", true);
		    	$("#js16").prop("checked", true);
			}

						    		// ************** trans_02
			
		    if(hashTag === '81'){
		    	$('body').addClass('js17')
		    	$('body').addClass('css1')
		    	current_transform = 'js17'
				current_filter = 'css1'
				$("#css1").prop("checked", true);
		    	$("#js17").prop("checked", true);
			}
			    if(hashTag === '82'){
		    	$('body').addClass('js17')
		    	$('body').addClass('css2')
		    	current_transform = 'js17'
				current_filter = 'css2'
				$("#css2").prop("checked", true);
		    	$("#js17").prop("checked", true);
			}
			if(hashTag === '83'){
		    	$('body').addClass('js17')
		    	$('body').addClass('css3')
		    	current_transform = 'js17'
				current_filter = 'css3'
				$("#css3").prop("checked", true);
		    	$("#js17").prop("checked", true);
			}

			if(hashTag === '84'){
		    	$('body').addClass('js17')
		    	$('body').addClass('css4')
		    	current_transform = 'js17'
				current_filter = 'css4'
				$("#css4").prop("checked", true);
		    	$("#js17").prop("checked", true);
			}

			if(hashTag === '85'){
		    	$('body').addClass('js17')
		    	$('body').addClass('css5')
	        	current_filter = 'css5'
				current_transform = 'js17'
		    	$("#css5").prop("checked", true);
		    	$("#js17").prop("checked", true);
			}
    }
    $('.css_option input').on('change', function() {
    	current_filter = $('input[name=filter]:checked')[0].id
    	change_hash()
	});
    $('.js_option input').on('change', function() {
    	current_transform = $('input[name=transform]:checked')[0].id
    	change_hash()
	});

	function change_hash(){
		if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js1'){
				window.location.hash='1'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js1'){
				window.location.hash='2'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js1'){
				window.location.hash='3'
				location.reload();
			}
		if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js1'){
				window.location.hash='4'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js1'){
				window.location.hash='5'
				location.reload();
			}


			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js2'){
				window.location.hash='6'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js2'){
				window.location.hash='7'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js2'){
				window.location.hash='8'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js2'){
				window.location.hash='9'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js2'){
				window.location.hash='10'
				location.reload();
			}


			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js3'){
				window.location.hash='11'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js3'){
				window.location.hash='12'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js3'){
				window.location.hash='13'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js3'){
				window.location.hash='14'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js3'){
				window.location.hash='15'
				location.reload();
			}



			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js4'){
				window.location.hash='16'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js4'){
				window.location.hash='17'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js4'){
				window.location.hash='18'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js4'){
				window.location.hash='19'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js4'){
				window.location.hash='20'
				location.reload();
			}


			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js5'){
				window.location.hash='21'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js5'){
				window.location.hash='22'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js5'){
				window.location.hash='23'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js5'){
				window.location.hash='24'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js5'){
				window.location.hash='25'
				location.reload();
			}

			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js6'){
				window.location.hash='26'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js6'){
				window.location.hash='27'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js6'){
				window.location.hash='28'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js6'){
				window.location.hash='29'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js6'){
				window.location.hash='30'
				location.reload();
			}

			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js7'){
				window.location.hash='31'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js7'){
				window.location.hash='32'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js7'){
				window.location.hash='33'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js7'){
				window.location.hash='34'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js7'){
				window.location.hash='35'
				location.reload();
			}

			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js8'){
				window.location.hash='36'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js8'){
				window.location.hash='37'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js8'){
				window.location.hash='38'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js8'){
				window.location.hash='39'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js8'){
				window.location.hash='40'
				location.reload();
			}

			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js9'){
				window.location.hash='41'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js9'){
				window.location.hash='42'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js9'){
				window.location.hash='43'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js9'){
				window.location.hash='44'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js9'){
				window.location.hash='45'
				location.reload();
			}


			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js10'){
				window.location.hash='46'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js10'){
				window.location.hash='47'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js10'){
				window.location.hash='48'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js10'){
				window.location.hash='49'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js10'){
				window.location.hash='50'
				location.reload();
			}



			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js11'){
				window.location.hash='51'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js11'){
				window.location.hash='52'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js11'){
				window.location.hash='53'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js11'){
				window.location.hash='54'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js11'){
				window.location.hash='55'
				location.reload();
			}

			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js12'){
				window.location.hash='56'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js12'){
				window.location.hash='57'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js12'){
				window.location.hash='58'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js12'){
				window.location.hash='59'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js12'){
				window.location.hash='60'
				location.reload();
			}


			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js13'){
				window.location.hash='61'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js13'){
				window.location.hash='62'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js13'){
				window.location.hash='63'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js13'){
				window.location.hash='64'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js13'){
				window.location.hash='65'
				location.reload();
			}


			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js14'){
				window.location.hash='66'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js14'){
				window.location.hash='67'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js14'){
				window.location.hash='68'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js14'){
				window.location.hash='69'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js14'){
				window.location.hash='70'
				location.reload();
			}


			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js15'){
				window.location.hash='71'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js15'){
				window.location.hash='72'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js15'){
				window.location.hash='73'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js15'){
				window.location.hash='74'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js15'){
				window.location.hash='75'
				location.reload();
			}

			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js16'){
				window.location.hash='76'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js16'){
				window.location.hash='77'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js16'){
				window.location.hash='78'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js16'){
				window.location.hash='79'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js16'){
				window.location.hash='80'
				location.reload();
			}

			if(current_filter.split(' ')[0] === 'css1' && current_transform.split(' ')[0] === 'js17'){
				window.location.hash='81'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css2' && current_transform.split(' ')[0] === 'js17'){
				window.location.hash='82'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css3' && current_transform.split(' ')[0] === 'js17'){
				window.location.hash='83'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css4' && current_transform.split(' ')[0] === 'js17'){
				window.location.hash='84'
				location.reload();
			}
			if(current_filter.split(' ')[0] === 'css5' && current_transform.split(' ')[0] === 'js17'){
				window.location.hash='85'
				location.reload();
			}

		}
})