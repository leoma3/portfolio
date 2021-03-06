$(document).on('click', 'a.from-left', function(event) {
	if (this.getAttribute("href") == "resume.pdf"){return;}
    event.preventDefault();
    event.stopPropagation();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
});

$(document).ready(function() {
	// background image does not work so well on mobiles even for responsive website
	// using js to handle iOS and andriod respectively
    if (getMobileOperatingSystem()=="iOS") {
    	alert("Hey you are using " + getMobileOperatingSystem() + " and the experience is much better on a desktop. Just saying.");
        $("#first-self").css({

            "min-height": "80vh",
            "background-position": "0 15vh",
            "background-size": "contain"
            // "margin-top": "3.2em"
            // "height": "10px",
            // "display": "none"
        });
        $("#self-empty").css({
            // "background-image": "none",
        	// "background-color": "black",
            // "min-height": "10vh"
        });

        $("#self-normal, #uc-mockup, #data-vis, #eds-wiring, #second-self").css({
            "min-height": "7vh",
            "background-image": "none",
            "background-color": "black"
        });

        // $("#uc-mockup").css({
        //     "min-height": "7vh",
        //     "background-image": "none",
        //     "background-color": "white"
        // });
        // $("#data-vis").css({
        //     "min-height": "7vh",
        //     "background-image": "none",
        //     "background-color": "white"

        // });
        // $("#eds-wiring").css({
        //     "min-height": "7vh",
        //     "background-image": "none",
        //     "background-color": "white"
        // });

        // $("#second-self").css({
        // 	"min-height": "7vh",
        //     "background-image": "none",
        //     "background-color": "white"
        // });

        $("#self-hover").css({
            "background-image": "none",
            "background-color": "white"
        });
    } else if (getMobileOperatingSystem()=="Android"){
    	alert("Hey you are using " + getMobileOperatingSystem() + " and the experience is much better on a desktop. Just saying.");
        $("#self").css({
            "background-color": "black",
            "min-height": "100vw",
            "margin-top": "3.2em",
            "background-size": "cover"
        });
    	$("#self-empty").css({
        	"background-image": "none",
            "background-color": "white"
        });
        $("#self-normal, #uc-mockup").css({
            "min-height": "100vw",
            "background-size" : "contain"
        });
        $(".content-offset span").css({
        	"top": "-4.5em"
        });
        $("#self-hover").css({
        	"background-image":"none"
        });
    }


    $("#welcome-ms").fadeIn(1000, function() {
    	$(this).css({
    		display: "flex"
    	});
        $(this).animate({
            width: "100%",
        }, 1000, function() {
            $(this).animate({
                color: "rgba(255, 255, 255, 1)"
            }, 1000);
        });
    });
});

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
