


$("#js-rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 4000,
    complete: function () {
        
    }
});
var Compass = {
    init: function() {
        $(".triggers li").hover(function() {
            var e = $("a", this).data("title");
			var ce = 'hp_'+$(this).data("title");
			 $(".home-page").toggleClass(ce);
            $(".description").show().html(e)
        }, function() {
		var ce = 'hp_'+$(this).data("title");
		$(".home-page").removeClass(ce);
            $(".description").hide().html("")
        });
		
        this.loader.start();
        this.arrange();
        this.preload();
       
       
    },
    arrange: function() {
        var e = $(".triggers li").size(),
            t = 360 / e;
        if ("TransitionEvent" in window || "WebKitTransitionEvent" in window || "OTransitionEvent" in window) {
            $(".triggers li").each(function(e) {
                var n = e + 1,
                    r = t * e,
                    i = 45 - r,
                    s = {
                        transform: "rotate(" + r + "deg) translate(0, -160px)",
                        "animation-delay": "1." + n + "s"
                    },
                    o = {
                        transform: "rotate(" + i + "deg)"
                    };
                $(this).css(s);
                $(this).find("i").css(o)
            });
            $(".home-main").addClass("animate")
        } else {
            var n = 175,
                r = 0,
                i = 2 * Math.PI / $(".triggers li").length;
            $(".triggers li").each(function(e) {
                var t = Math.round(100 + n * Math.cos(r) - $(this).width() / 2),
                    s = Math.round(100 + n * Math.sin(r) - $(this).height() / 2);
                $(this).css({
                    left: t + "px",
                    top: s + "px"
                });
                r += i
            });
            $(".triggers").css({
                "margin-left": "-100px",
                "margin-top": "-150px"
            });
            $(".triggers li").css("opacity", "1")
        }
    },
    preload: function() {
        this.loader.stop()
    },
    loader: {
        start: function() {
            $(".loader").addClass("show")
        },
        stop: function() {
            $(".loader").removeClass("show")
        }
    }
};
Compass.init();