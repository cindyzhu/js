(function($){
	var droppNode, flag = 0;
	$("#tab_0").show();
	$(".e_tab li").click(function(){
		$(this).addClass("active");
		$("#tab_"+$(this).index()).siblings().not(".e_tab").not(".e_btn").hide();
		$("#tab_"+$(this).index()).show();
		$(this).siblings().removeClass("active");
		
	});
	$("#tab_0 li").click(function(){
		var id = eval($(this).attr("id"));
		$(this).css("cursor","pointer");
		$(".u24").append(id.html+id.css);
		droppNode = $("div[id^='D_']");
	})

	$("ul[id^='tab_']").accordion();
	$("ul[id^='tab_'] li").draggable({
			appendTo: "body",
			helper: "clone",
			cursor : "move"
	});
	$("ul[id^='tab_0']").unbind("draggable");
	//$(document).on("click",$("div[id^='D_']"),function(){console.log(111111);});
	var state =0;
	var addJs = function(file){
		var js = document.createElement('script');
		js.type = 'text/javascript';
		js.src = file;
		if(js.readyState){
		    js.onreadystatechange = function(){
		        if (js.readyState == "loaded" || js.readyState == "complete"){
		            document.getElementsByTagName('head')[0].appendChild(js);
		            state = 1
		        }
		    };
		}else{
		    document.getElementsByTagName('head')[0].appendChild(js);
		    js.onload = function(){
		        state = 1 ;
		    };
		}
	}
	$(document).on("mouseover",$("div[id^='D_']") ,function(){
		$("div[id^='D_']").droppable({
			activeClass: "ui-state-default",
			hoverClass: "ui-state-hover",
			accept: ":not(.ui-sortable-helper)",
			greedy : true,
			tolerance : "intersect",//至少50%覆盖
			drop: function( event, ui ) {
				var htmlObj = eval(ui.draggable.attr("id")),html;
				html = htmlObj.html + htmlObj.css;
				/*if(htmlObj.srcJs){
					addJs(htmlObj.srcJs);
				}*/
				//if(state==1) {
					if(htmlObj.js){
						html += htmlObj.js;
					}
					$(this).append(html);
				//}
			}
		});
	})

})(jQuery)