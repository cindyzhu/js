(function(win){
			var srcFtn = function(){
			  var scrollObj ={};
			  scrollObj.getScrollNode = document.querySelector("#scroll")
			  scrollObj.getScroll =  document.querySelectorAll("#scroll li"), i = 0, flag = 1 ;
			  scrollObj.scrollFtn = function() {
				if ( i < 0) {
					i = scrollObj.getScroll.length;
					flag = false;
				}
				if (i > scrollObj.getScroll.length - 1){
					i = 0;
					flag = true;
				}
				 scrollObj.getScrollNode.style.marginLeft = -i*500 + "px";
				 scrollObj.clearInter(i);
				 if(flag) {
					i++ ;
				 } else {
					i--;
				 }
			  }
			  
			  scrollObj.clearInter = function(i) {
				this.getScroll[i].onmouseover = function() {
					clearInterval(num);
				}
				this.getScroll[i].onmouseout = function() {
					num = setInterval(scrollObj.scrollFtn, 2000);
				}
			  }
			  scrollObj.scrollFtn();
			  var num = setInterval(scrollObj.scrollFtn, 2000);
			  scrollObj.clearInter(i);
			  }
			  window.srcFtn = srcFtn;
})(window);
			