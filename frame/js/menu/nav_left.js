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
		})
	}
	init();
})(jQuery);