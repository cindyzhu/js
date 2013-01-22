window.onload = function(){
    document.onmousedown = function(){
       document.onmousemove = function(e){
         document.body.innerHTML +="<div style='width:5px;height:5px;position:relative; background-color:#000;left:"+e.pageX+"px;top:"+e.pageY+"px'></div>";
       }
       document.onmouseup = function(e){
        document.onmousemove = null;
       }
    }
}