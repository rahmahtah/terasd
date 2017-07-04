( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    
    var res_flag = 0;
    document.querySelector("#res_but").addEventListener("click", function() {
    	var x = document.querySelector("#res_span");
    	if (res_flag === 0) {
    		x.innerHTML = screen.width + "x" + screen.height;
    		res_flag = 1;
    	} else {
    		x.innerHTML = "";
    		res_flag = 0;
    	} 
    });
    
    var flag_g = 0;
    $("#change_color").click(function() {
    	if (flag_g === 0) {
    		$("#colors23").css({"color": "#f23314"});
    		flag_g = 1;
    	} else {
    		$("#colors23").css({"color": "#ffffff"});
    		flag_g = 0;
    	}
    });
    
    var x = document.getElementById("draw").getContext("2d");
    x.font = 'italic 8pt Calibri';
    x.fillText("text1", 12, 23);
    x.fillStyle = '#ff32ff';
    x.fillText("tesfds", 23, 56);
    x.font = '28pt Arial';
    x.fillText("fdsaf", 53, 64);
    
    var xd = 0;
    var yd = 0;
    var ctx = document.getElementById("draw2").getContext("2d");
    var to_right = 1;
	var to_down = 1;
    
    $("#virubai").click(function() {
        	var intid = setInterval(function(){
            	ctx.beginPath();
            	ctx.rect(0, 0, 360, 500);
            	ctx.fillStyle = "#ffffff";
            	ctx.fill();
            	if (xd <= 0) {
            		to_right = 1;
            	}
            	if (xd >= 260) {
            		to_right = 0;
            	}
            	if (yd <= 0) {
            		to_down = 1;
            	}
            	if (yd >= 400) {
            		to_down = 0;
            	}
            	if (to_down === 0) {
            		yd -= 6;
            	} 
            	if (to_down === 1) {
            		yd += 5;
            	}
            	if (to_right === 0) {
            		xd -= 12;
            	} 
            	if (to_right === 1){
            		xd += 8;
            	}
            	
            	ctx.beginPath();
            	ctx.rect(xd, yd, 100, 100);
            	ctx.fillStyle = "red";
            	ctx.fill();
        	}, 10);
        	setTimeout(function() {clearInterval(intid);}, 20000);  
    });
    
    // SHAHMATI
    $("#virubai3").click(function() {
    	var ctx = document.getElementById("draw3").getContext("2d");
    	var xd = 0;
    	var xy = 0;
    	var color = 0;
    	ctx.beginPath();
    	ctx.rect(0, 0, 320, 320);
    	ctx.fillStyle = "#ffffff";
    	ctx.fill();
    	for (var col = 0; col !== 8; col++) {
    		for (var row = 0; row !== 8; row++) {
    			ctx.beginPath();
    	    	ctx.rect(xd, yd, 40, 40);
    	    	if (color === 0) {
    	    		ctx.fillStyle = "#000000";
    	    	} else {
    	    		ctx.fillStyle = "#ffffff";
    	    	}
    	    	ctx.fill();
    	    	xd += 40;
    	    	if (color === 0) {
        			color = 1;
        		} else {
        			color = 0;
        		}
    		}
    		if (color === 0) {
    			color = 1;
    		} else {
    			color = 0;
    		}
    		xd = 0;
    		
    		yd += 40;
    	}
    	xd = 0;
    	yd = 0;
    });
    
} () );