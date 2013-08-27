var frame = {
html : '<div class="wrap" id="D_wrap"><div class="header" id="D_header"></div><div class="main_page" id="D_mian"><div class="left" id="D_left"></div><div class="center" id="D_center"></div><div class="right" id="D_right"></div></div><div class="footer" id="D_footer"></div></div>',
css :'<style>.wrap{border:1px solid #404040; width:1000px; margin:0px auto;}.wrap .header{width:100%; height:150px;border-bottom:1px solid #404040;}.wrap .main_page{height:600px;}.wrap .main_page .left{width:200px; height:100%; float:left;border-right:1px solid #404040;}.wrap .main_page .center{width:590px; height:100%;float:left;}.wrap .main_page .right{width:200px; height:100%;float:right;border-left:1px solid #404040;}.wrap .footer{height:150px;border-top:1px solid #404040;}</style>'
};
var top_nav = {
	html : '<ul class="top_nav"><li>保存桌面</li><li>加入收藏</li></ul>',
	css : '<style>.top_nav{ float:right; margin:10px;}.top_nav li{float:left; margin:0px 5px;}</style>'
}
var left_nav = {
	html : '<ul class="nav_left"><li>导航一</li><li>导航二</li><li>导航三</li><li>导航四</li><li>导航五</li><li>导航六</li></ul>',
	css : '<style>.nav_left{background-color:gray;}.nav_left li{border-bottom:1px solid #000; line-height:40px; text-align:center; color:#fff;}</style>',
}
var right_box = {
	html :'<div class="item_box"><div class="hd"><h2>最新公告</h2><a href="">更多>></a></div><div class="bd"><ul class="item_list"><li>链接一</li><li>链接一</li><li>链接一</li><li>链接一</li></ul></div><div>',
	css : '<style>.item_box{width:100%; float:right;}.item_box .hd{height:40px; line-height:40px;background-color:#cccccc; color:#000; }.item_box .hd h2{font-size: 14px;display: inline-block;height: 40px;line-height: 18px;margin-left: 10px;}.item_box .hd a{float:right;}.item_box li{line-height:40px;text-indent:24px;}</style>'
}
var footer = {
	html :'<div class="copy_right"><p>版权归xxx所有<br/><a href="">联系我们</a><a href="">联系我们</a><a href="">联系我们</a></p></div>',
	css : '<style>.copy_right{margin:10px auto; text-align:center;}.copy_right a{margin: 10px;}</style>'
}
var center = {
	html :'<div class="out_pic"><ul class="trun_pic" id="scroll"><li><img src="pic/test1.jpg"/></li><li><img src="pic/test2.jpg"/></li><li><img src="pic/test3.jpg"/></li></ul></div>',
	srcJs : 'scroll.js',
	js : '<script>var aa= function(){ console.log(12313123);} aa()</script>',
	css : '<style>.out_pic{overflow:hidden; width:500px; margin:0 auto:}.out_pic .trun_pic{width:10000px; position:relative;}.out_pic .trun_pic li{display:inline-block; width:500px; height:400px;}</style>'
}
