define(["jquery","jquery.s2"],function(){
	$.fn.event = function(msg){
		var answer = "", cur = 0, __result, check = "";
		for(var i = 0 ; i < $("#answer li").length; i++) {
			answer += $("#answer li").eq(i).attr("id")+",";
		}
		$("#words li").click(function(){
			__getEmpty();
			if(cur < answer.length) {
				$("#answer li:eq(" + cur + ")").text($(this).html());
				$("#answer li:eq(" + cur + ")").attr("node-value",$(this).attr("id"));
				$(this).css({"position": "relative","top":"-30px","z-index":"-1"});
				/*if(check.length > 0){
					check.splice(cur,0,$(this).attr("id"));
				} else {
					check[cur] = $(this).attr("id");
				}*/
				__result();
			}
		});
		$("#answer li").click(function(){
			if($(this).text()){
				$(this).text("");
				$("#words #"+$(this).attr("node-value")).css({"top":"0px","z-index":"0"});
				$("#answer li").css("color","#fff");
				$(this).attr("node-value","");
				cur  = $(this).index();
				$(".mask").css("display","none");
			}
		})
		__getEmpty = function(){
			for(var i = 0; i< answer.length;i++){
				if($("#answer li:eq("+ i +")").text() == "" ){
					cur = i;
					break;
				}
			}
		}
		__result = function(){
			check = "";
			for(var i=0; i< $("#answer li").length; i++){
				if($("#answer li:eq("+ i +")").attr("node-value")) {
					check += $("#answer li:eq("+ i +")").attr("node-value") + ",";
				}
			}
			if(check.length > answer.length-1){
				if(check == answer){
					defaultItem +=1 ;
					setTimeout(function(){
						$.fn.game(defaultItem);
					},500);
				} else{
					$("#answer li").css("color","red");
				}
				$(".mask").css("display","block");
			}
		}
	}
})