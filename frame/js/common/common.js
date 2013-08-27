(function($){
	var init = function(){
		liEvent();
	};
	var liEvent  = function(){
		$(document).bind('contextmenu',function(){return false;});
		$(".nav_left li").bind("mouseup",function(e){
			if(e.button ==2){
				$(".deal").hide();
				$(".deal",this).show();
			}
		})
		$(".deal div").bind("click", function(){
			$(this).parent().hide();
			$(".page_info").show().css({"width":$(document).width()});
			$(".nav_left").css({"width":"200px","border-right":"5px solid #393939","height":$(document).height()});
			$("#pageInfo").attr("src",$("a", this).attr("data-href")).css({"height":$(document).height()});
			$(".wrap").css("width",$(document).width()+210+"px");
			$("body").scrollLeft(200);
		})
	}
	$(function(){
		init();
	})
})(jQuery);