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
    x.fillText("text1", 12, 23);
    x.fillText("tesfds", 23, 56);
    x.fillText("fdsaf", 53, 64);
} () );