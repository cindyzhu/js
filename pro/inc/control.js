(function(){
	var init,bindEvent, cur = 0;
		init = function(){
			bindEvent();
		}
	    bindEvent = function(){
			$("#videoBtn").bind("click", function(){
				var html,flag =0;
				html = '<div class="video_play"><div class="close_play"></div><embed src="http://www.tudou.com/v/babSneunIWo/&resourceId=0_05_02_99&tid=0&autoPlay=false/v.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="600" height="400"></embed></div>';
				$(".mask").show();
				$('body').append(html);
	            flag = 0;
			});
			$('html').on('click', ".close_play",function(){
				$(".mask").hide();
	            $('.video_play').remove();
	             flag = 1;
	        });
		}
		showRole = function(){
			//pre
			$(".pre").bind("click", function(){
				if(cur>0){
					cur = cur-1;
					$(".images").animate({"left":-cur*106},"fast");
				}
				if(cur == 0 ){
					$(".pre").css("top","-100px");
				}else{
					$(".pre").css("top","0px");
				}
					$(".next").css("top","0px");
			});
			//next
			$(".next").bind("click", function(){
				console.log(cur,$(".images li").length);
				if(cur< $(".images li").length){
					cur = cur+1;
					$(".images").animate({"left":-cur*106},"fast");
				}
				if(cur == $(".images li").length-5){
					$(".next").css("top","-100px");
				} else{
					$(".next").css("top","0px");
					
				}
				$(".pre").css("top","0px");
			});
			//click
			$(".images li").bind("click", function(e){
				$(".active").remove();
				$(".images img").css("opacity","0.4");
				$(this).append('<div class="active"></div>')
				$("img",this).css("opacity","1");
				if($("#page2").css("display") =="none"){
					$("#page1").hide();
					$("body").attr("id","bg2");
					$("#page2").show();
				};
				$(".show_role img").attr("src","images/big_"+ ($(this).index()+1) +".jpg").css("opacity","0");
				$(".show_role img").animate({"opacity":"1"},"500");
			});
			$(".page_title").bind("click", function(){
				$("body").attr("id","bg1");
				$("#page1").show();
				$("#page2").hide();
			})
			/*$(".images img").hover(function(e){
				$(this).css("opacity","1");
			}, function(){
				$(this).css("opacity","0.4");
			})*/
		}
	$(function(){
		init();
		showRole();
	});
})(jQuery)