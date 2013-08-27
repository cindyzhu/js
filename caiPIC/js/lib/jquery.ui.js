define(['jquery'],function(){
	$.fn.s1 = function() {
		var items = 24, item = 0;
		$("#s1").append("<ul id='items'></ul>");
		for(var i = 0; i< items; i++) {
		  	item = i + 1; 
		  	$("#items").append("<li>" + item + "</li>");
		}
		//hover 样式
		$("#items li:eq("+ defaultItem + ")").attr("id","cur").css("opacity","1");
		$("#items li:not(#cur)").hover(
			function(){
				$(this).css("opacity","1");
			},
			function(){
				$(this).css("opacity","0.5");
			}
		)
		//默认关
		$("#items li:eq("+ defaultItem +")").append("<div id='active'></div>");
		$("#active").css({"background-color":"#FF0000","position":"relative","width":"70px","height":"70px","margin-top" : "-60px","margin-left":"-20px","border-radius":"35px","box-shadow":"0px 0px 0px 3px #6F1C0B"});
	};
	$.fn.s2 = function(){
		var html = "";
		html = "<div class='content_box'><h1 class='title'></h1>";
		html += "<div class='con_box'><div class='content'></div><ul id='answer' class='answer'></div>";
		html += "<ul id='words' class='words'></ul></div><div class='mask'></div><div class='suceess'></div>";
		$(".se").animate({left : "-400px"},"fast");
		$("#s2").append(html);
	};
	$.fn.s3 = function(){
		if($("#s2").html()) {
			$("#s2").html("");
		}
	}

});