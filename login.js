//默认事件触发
var WYX_login = {
  checkFtn : {
		isPlaceholder : function(){
			var input = document.createElement('input');  
	    	return 'placeholder' in input;  
		},
		bind : function( obj, type, fn ) {
		    if (obj.attachEvent ) {
		        obj['e'+type+fn] = fn;
		        obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
		        obj.attachEvent( 'on'+type, obj[type+fn] );
		    } else {
		        obj.addEventListener( type, fn, false );
		    }
		},
		tip : function(tipInfo) {
				//调用close函数
				var checkFtn = this.WYX_login.checkFtn, $ = this.WYX_login.domFtn.$;
				checkFtn.close($(tipInfo.closeBtn), $(tipInfo.node));
				//修改提示箭头的位置
				if(tipInfo.arrow_pos){
					$("errorArrow").style.left = tipInfo.arrow_pos;
				}
				$(tipInfo.node).style.cssText = "display:block;top:" + tipInfo.pos + ";"
				$(tipInfo.infoNode).innerHTML = tipInfo.message;
		},
		close : function(closeBtn, closeNode1, closeNode2){
				closeBtn.onclick = function(){
					closeNode1.style.display = "none";
					if(closeNode2) {
						closeNode2.style.display = "none";
					}
				}
		}
	},
    domFtn : {
		$ : function(id){
			if(document.querySelector) {
				return document.querySelector("#" + id);
			} else {
				return document.getElementById(id);
			}
		},
		trim : function(trimString){
			return trimString.replace(/^\s+|\s+$/g,"");  
		}
	},
	getScrollTop : function(){
	    var scrollTop=0;
	    scrollTop = document.documentElement.scrollTop;
	    return scrollTop;
	}

} 
//默认加载函数
!(function(L){
	var $ = L.domFtn.$,
		trim = L.domFtn.trim,
		tip = L.checkFtn.tip,
		close = L.checkFtn.close,
		bind = L.checkFtn.bind;
	L.linkHref = function() {
		var file = document.createElement("link"),
			path = "images/WYX_login_style.css",
			headObj = document.getElementsByTagName("head")[0];
			file.type = "text/css";
			file.rel = "stylesheet";
			file.href = path;
			headObj.appendChild(file);
	};
	L.scriptSrc = function(){
		var file = document.createElement("script"),
			path = "http://i.sso.sina.com.cn/js/ssologin.js",
			headObj = document.getElementsByTagName("head")[0];
			file.type = "text/javascript";
			file.src = path;
			headObj.appendChild(file);
	};
	L.addHtml = function() {
		var node = document.createElement("div"), html;
		html = '<div class="login_box">';
		html += '<div class="login_title"><div class="WYX_title_info">登录/注册</div><a class="close_layer" href="javascript:void(0)" id="closeLayer">关闭</a></div><div class="WYX_login_info">已有新浪博客，新浪邮箱帐号，可直接登录</div><ul class="WYX_login_form"><li class="WYX_username_box" id="usernameBox"><input type="text" id="WYX_uname" value="请输入用户名" action-data="请输入用户名" data-type="" autocomplete = "off"/></li><li class="password_box" id="passwordBox"><input type="password" id="WYX_upwd"/><span class="enter_psw" id="tip_upwd" autocomplete = "off">请输入密码</span></li></ul>';
		html += '<div class="verifycode_box"><input maxlength="6" tabindex="3" name="verify_code" type="text" class="verify_code" value="请输入验证码" action-data="请输入验证码" id="WYX_vcode" data-type=""><img src="http://login.sina.com.cn/cgi/pin.php?r=42439320&s=0" title="" width="100" height="40" id="WYX_verifyImg"><a class="verify_refresh" id="WYX_refresh"> 刷新</a></div>';
		html += '<div class="info_list"><div class="left"><input type="checkbox" id="autoLogin" checked/>下次自动登录<a href="http://help.weibo.com/faq/q/85/12524#12524" class="auto_login"></a></div><div class="right"><a target="_blank" href="https://login.sina.com.cn/getpass.html?entry=weibo" class="text_color">忘记密码</a></div></div>';
		html += '<div class="error_box" id="WYX_tip"><div class="error_content"><span class="error_info" id="WYX_info"></span><a class="erro_close" id="erroClose" href="javascript:void(0)">关闭</a></div><div class="error_arrow" id="errorArrow"></div></div>';
		html += '<div class="reg_info"><a class="WYX_login_btn" href="javascript:void(0)"><span class="WYX_btn_l"></span><span class="WYX_btn_info" id="sub_btn">登录</span></a><div class="WYX_login_info"><span class="WYX_no_id">还没有帐号？</span><a target="_blank" href="http://weibo.com/signup/signup.php" class="text_color">立即注册！</a></div></div>';
		html += '</div>';
		node.className = "WYX_layer";
		node.id = "WYX_loginBox";
		node.innerHTML = html;
		ele = document.createElement("div");
		ele.id = "WYX_outer";
		document.body.appendChild(ele);
		document.body.appendChild(node);
	};
	L.placeholder = function() {
		var bHoverStyle = "1px solid #FFB941", bOutStyle = "1px solid #CCC";
		//触发事件
		bind($("WYX_uname"),"focus", function(){
				$("usernameBox").style.border = bHoverStyle;
				if(trim(this.getAttribute("data-type")) =="") {
					this.value  = "";
				}
			});
		bind($("WYX_uname"),"blur", function(){
				if(trim(this.value) == "") {
					this.value = this.getAttribute("action-data");
					this.setAttribute("data-type","");
				} else {
					this.setAttribute("data-type","text");
				}
				$("usernameBox").style.border = bOutStyle;
			});
		bind($("WYX_vcode"),"focus", function(){
				this.style.border = bHoverStyle;
				if(trim(this.getAttribute("data-type")) =="") {
					this.value  = "";
				}
			});
		bind($("WYX_vcode"),"blur", function(){
				if(trim(this.value) == "") {
					this.value = this.getAttribute("action-data");
					this.setAttribute("data-type","");
				} else {
					this.setAttribute("data-type","text");
				}
				$("WYX_vcode").style.border = bOutStyle;
			});
		//密码框部分的处理
		bind($("tip_upwd"),"click", function(){
				$("tip_upwd").style.display = "none";
				$("WYX_upwd").focus();
				$("passwordBox").style.border = bHoverStyle;
			});
		bind($("WYX_upwd"),"focus", function(){
				$("tip_upwd").style.display = "none";
				$("passwordBox").style.border = bHoverStyle;
			});
		bind($("WYX_upwd"),"blur", function(){
				if(trim($("WYX_upwd").value) == "") {
					this.value = "";
					$("tip_upwd").style.display = "block";
				}
				$("passwordBox").style.border = bOutStyle;
			});
		//keydown 调用函数
		var keydown = function(){
			if($("WYX_tip")) {
				$("WYX_tip").style.display = "none";
			}
		}
		//公用部分
		bind($("WYX_uname"),"keydown", keydown);
		bind($("WYX_upwd"),"keydown", keydown);
		bind($("WYX_vcode"),"keydown", keydown);
		/*bind($("WYX_refresh"),"click", function(){
			$("WYX_verifyImg").src = sinaSSOController.getPinCodeUrl();
		});*/
	};
	return L;
})(WYX_login);
//对外接口函数
!(function(L){
	//载入css文件
	var $ = L.domFtn.$,
		trim = L.domFtn.trim,
		tip = L.checkFtn.tip,
		close = L.checkFtn.close,
		username = $("WYX_uname"),
		userpwd = $("WYX_upwd");
	//提交表单函数
	var submitFtn = function(){
			if(trim($("WYX_uname").getAttribute("data-type")) == ""){
				tip({node:"WYX_tip",pos:"27px",message : "请输入用户名<a href='http://help.weibo.com/faq/q/85/12606#12606' target='_blank' class='help'>查看帮助</a>",infoNode:"WYX_info", closeBtn : "erroClose"});
				return false;
			}
			if(trim($("WYX_upwd").value) == ""){
				$("WYX_upwd").value = "";
				tip({node:"WYX_tip",pos:"68px",message : "请输入密码",infoNode:"WYX_info", closeBtn : "erroClose"});
				return false;
			}
			if(trim($("WYX_vcode").getAttribute("data-type")) == ""){
				tip({node:"WYX_tip",pos:"115px",message : "请输入验证码",infoNode:"WYX_info", closeBtn : "erroClose",arrow_pos: "10%"});
				return false;
			}
			if($("autoLogin").checked){
				day = 7;
			}
		//ssoLogin();
	}
	var dealFtn = function(){
		//默认登录框位置
		var ie6 = !!window.ActiveXObject&&!window.XMLHttpRequest;
		L.linkHref();
	 	L.addHtml();
		L.placeholder();
		L.scriptSrc();
		if(ie6) {
			$("WYX_loginBox").style.position = "absolute";
			window.onscroll = function() {
				$("WYX_loginBox").style.top = L.getScrollTop() + 200 + "px";
			}
		};
		close($("closeLayer"),$("WYX_loginBox"),$("WYX_outer"));
		if(!!window.ActiveXObject&&!window.XMLHttpRequest) {
		$("WYX_outer").style.cssText = "position: fixed;top: 0px;left: 0px;width:"+ document.documentElement.clientWidth +"px;height: "+ document.documentElement.clientHeight +"px;filter: alpha(opacity=30);background-color: rgb(0, 0, 0);opacity: 0.3;z-index: 10001;";
		}else {
		 $("WYX_outer").style.cssText = "position: relative;top: 0px;left: 0px;width:100%;height: 100%;filter: alpha(opacity=30);background-color: rgb(0, 0, 0);opacity: 0.3;z-index: 10001;";
		}
		$("sub_btn").onclick = function() {
			//wyxSsoLogin();
			submitFtn();
		}
		//$('verify_code').style.display = "none";
		
	}
	return dealFtn();
})(WYX_login);
