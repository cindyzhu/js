var adShow  = (function(){
  var  ie6 = !!window.ActiveXObject&&!window.XMLHttpRequest;
  var Ftn = {
		bothSide :  function(){
			posFtn("both");
		},
		jumpNode : function() {
			posFtn("jump");
		},
		topNode: function() {
			posFtn("top");
		},
		staticNode : function(){
			posFtn("static");
		}

	}
//common.js
	var common = {
		createNode : function(node, id, parentNode){
			var div = document.createElement(node);
			div.id = id;
			if(parentNode) {
				common.$(parentNode).appendChild(div);
			} else {
				document.body.appendChild(div);
			}
		},
		$ : function(id){
			if(document.querySelector) {
				return document.querySelector("#" + id);
			} else {
				return document.getElementById(id);
			}
		}

	}
//逻辑层
	var Pos = {
		both : function(){
			//插入node节点
			var top = 100;
			common.createNode("div","out_ads");
			common.createNode("div","ad_left","out_ads");
			common.createNode("div","ad_right","out_ads");
			console.log();
			//common.$("out_ads").childNodes.
			//common.$('ad_right').style.right = "0px";
			for(var i = 0; i< common.$("out_ads").childNodes.length; i++) {
				i == 0 ?  posStyle = "left:0px;" : posStyle = "right:0px;"; 
				common.$("out_ads").childNodes[i].style.cssText = "position:fixed; width:100px; height:300px ; background-color : red;"+ posStyle +"z-index:100; top:"+top+"px;";
			}
			window.onscroll = function (){
				if(ie6) {
				 common.$("out_ads").childNodes[0].style.top = common.$("out_ads").childNodes[1].style.top = document.documentElement.scrollTop + top + "px";
				 common.$("out_ads").childNodes[0].style.position = common.$("out_ads").childNodes[1].style.position = "absolute";
			    }
			}

		},
		jump :  function(){
			common.createNode("div","out_ads");
			common.$("out_ads").style.cssText = "position:fixed; z-index:1000;width:300px; height:200px; right:20px; bottom:-210px; background-color:blue;"
			if(ie6) {
				common.$("out_ads").style.position = "absolute";
			}
			var i = 0;
			var jumpDom = function(){
				var  step = 15;
				i++;
				var bottomValue = -parseInt(210 - step*i);
					common.$("out_ads").style.bottom = bottomValue +"px";
					if(bottomValue >=0){
						clearInterval(num);
					}
			}
			var num = setInterval(jumpDom, 50);
		},
		top : function(){
			common.createNode("div","out_ads");
			common.$("out_ads").style.cssText = "position:fixed; z-index:1000;width:800px; height:400px; left:50%; margin-left:-400px; top:50px; background-color:black;";
			if(ie6) {
				common.$("out_ads").style.position = "absolute";
				window.onscroll = function() {
					common.$("out_ads").style.top = document.documentElement.scrollTop + 50 + "px";
				}
			}
		},
		static: function(){
			common.createNode("div","out_ads");
			common.$("out_ads").innerHTML ="zhangsan";
		}

	}
	function posFtn(pos){
		switch(pos){
			case "both" :
			Pos.both() ;
			break ;
			case "jump" :
			Pos.jump();
			break;
			case "top" : 
			Pos.top();
			break;
			case "static" :
			Pos.static();
			break;
		}
	}

	return Ftn;

})();
//adShow.bothSide("both");
//adShow.jumpNode("jump");
//adShow.topNode("top");
//adShow.staticNode("static");
