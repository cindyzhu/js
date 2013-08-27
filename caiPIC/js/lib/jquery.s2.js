define(["jquery","jquery.ui"],function(){
	$.fn.game = function(currentItme){
		//game 
		var removeItem, gameItem = [], msg;
		//最后一个
		gameItem = [
			{
				title : "网络红人",
				bgImg : "xlg.jpg",
				answer : "X_L_G",
				string : "n_奶,c_茶,m_妹,X_犀,L_利,G_哥,x_小,s_沈,y_阳,l_邋,t_遢,d_大,w_王,x_哈,y_燕,z_子,l_刘,d_德,h_华,s_斯,c_曹",
				words : function(){
					return __getArray(this.string);
				}
			},{
				title : "校园网络红人",
				bgImg : "ncm.jpg",
				answer : "N_C_M",
				string : "N_奶,C_茶,M_妹,f_凤,j_姐,b_白,x_小,g_郭,m_美,m_美,s_珊,f_芙,r_蓉,x_哈,y_燕,z_子,l_刘,x_欣,h_华,s_斯,c_曹",
				words : function(){
					return __getArray(this.string);
				}
			},{
				title : "职场网络红人",
				bgImg : "dn.jpg",
				answer : "D_N",
				string : "n_奶,c_茶,m_妹,j_姐,b_白,x_小,g_郭,d_冬,f_芙,r_蓉,l_刘,D_度,w_王,x_哈,y_燕,z_子,l_刘,N_娘,h_华,s_斯,c_曹",
				words : function(){
					return __getArray(this.string);
				}
			}
		]
		//创建混合数组
		__getArray = function(string){
			var array = string.split(","), num, min, randomItem, wordsList = [], j = 0, flag = false;
			min = array.length;
			while(j < array.length) {
				num = parseInt(Math.random()*min) ;
			    randomItem = array[num];
			    //如果为空 不调用去除函数
			    if(randomItem != "") {
			    	flag = __removeItem(randomItem, array);
			    } else {
			    	flag = false;
			    }
			    //如果为true创建新数组 累加；
				if(flag){
					wordsList.push(randomItem);
					j++;
					array[num] = "";
				};
			}
			return wordsList;
		}
		//去除数组的多余项
		__removeItem = function(item, newArray){
			for(var i = 0; i < newArray.length; i++) {
				if(newArray[i] == item) {
					return true;
					break;
				} 
			}
		}
		//创建页面元素
		__setDom = function(){
			var dom = gameItem[currentItme],i = 0, j = 0, answerLi = "", wordsLi ="", words, answer;
			words = gameItem[currentItme].words();
			answer = dom.answer.split("_");
			while(i < answer.length){
				answerLi += "<li id="+ answer[i]+"></li>";
				i++;
			}
			while(j < words.length){
				var curWords = words[j].split("_");
				wordsLi += "<li id=" + curWords[0] + ">" + curWords[1] + "</li>";
				j++;
			}
			$("#answer").append(answerLi);
			$("#words").append(wordsLi);
			$(".title").text(dom.title);
			$(".s2 .content").css({"background":"url('js/images/pic/"+ dom.bgImg +"') center 0px no-repeat","background-size":"100%"});
		}
		if(currentItme == gameItem.length){
			currentItme = currentItme -1;
			alert( "亲～ 恭喜你过关啦!");
		}
		$.fn.s3();
		$.fn.s2();
		__setDom();
		$.fn.event();	
	}
});