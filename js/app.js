$(document).ready(function(){

	// console.log("ok nar sar");

	// Start Header Section

	// Start Banner Section

	// End Banner Section

	// End Header Section

	// Start Info Section
	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		console.log(getscrollpoint);

		if(getscrollpoint >= 390){
			$(".infotexts").addClass("fromlefts");
			$(".infopics").addClass("fromrights");
		}else{
			$(".infotexts").removeClass("fromlefts");
			$(".infopics").removeClass("fromrights");
		}
	})
	// End Info Section

    // Start Adv

    $("#videos").click(function(){
        var getmodal = $(this)
    });

    // End Adv

	//Start Premises Section

    //Start lightslider
    $('#lightslider').lightSlider({
        // auto:true,   //auto:true;ko ma use chin yin .play() use ml
        loop:true,
        item:4,       
        slideMove:1,
        speed:600,
    }).play();
    // End lightslider
    //End Premises Section
        
    // Start Pricing Section

    $(window).scroll(function(){
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);

        if(getscroll >= 2450){
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms");
            $(".cardthrees").addClass("moverights");
        }else{
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms");
            $(".cardthrees").removeClass("moverights");
        }
    });

    //End Pricing Section

    // Start Join Us Section

    $("#accordion").accordion();

    // End Join Us Section

    // Start Footer Section
    $("#getyear").text(new Date().getUTCFullYear());
    // End Footer Section

    // Start Progress
    $(window).scroll(function(){
        var getprogress = $("#progersses");
        var getprogressvalue = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        // st * 100 / (pjheight - cvheigiht)

// by jQuery
        // var getscrollheight = $(document).height();
        // // console.log(getscrollheight);
        // var getclientheight = $(window).height();
        // // console.log(getclientheight);
        // var calheight = getscrollheight - getclientheight;
        // var getfinalheight = Math.round(getscrolltop * 100 / calheight);
        // // console.log(getfinalheight);

// by JavaScript
        var getscrollheight = document.documentElement.scrollHeight;
        // console.log(getscrollheight);
        var getclientheight = document.documentElement.clientHeight;
        // console.log(getclientheight);
        var calheight = getscrollheight - getclientheight;
        var getfinalheight = Math.round(getscrolltop * 100 / calheight);
        // // console.log(getfinalheight);



        getprogressvalue.text(`${getfinalheight}%`)
        getprogress.css({
            "background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
        })

    });
    // End Progress
});


