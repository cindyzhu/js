(function(w) {
//初始参数配置
  var C = {
   fillStyle : '#DDD',
   x : '0',
   y : '0',
   width : '100',
   height: '100'
  }
  //对传入的参数做处理
  var deal = {
     //对传入的参数做处理
     common : function(obj,x,y,w,h) {
       if(obj) {
        obj = obj;
        } else{ 
        console.log('undefied object');
        return false;} 
        x ? x = x : x = C.x; 
        y ? y = y : y = C.y; 
        w ? w = w : w = C.w; 
        h ? h = h : h = C.h; 
     }
  }
//简单画图
 var draw = { 
    //绘制方形图 1代表实心 2代表空心的
     drawBox : function(obj,type,x,y,w,h,fillStyle) {
        deal.common(obj,x,y,w,h);
        fillStyle ? fillStyle = fillStyle : fillStyle = C.fillStyle; 
        console.log(fillStyle);
        if(type ==1) {
         obj.fillStyle = fillStyle;
         obj.fillRect(x,y,w,h);  
        }else{
         obj.strokeStyle = fillStyle; 
         obj.strokeRect(x,y,w,h);
        }    
     },
     //绘制圆形图
     drawCircle : function() {
     
     },
     drawLine :  function(ele,sx,sy,ex,ey) {
        ele.beginPath();
        ele.moveTo(sx,sy);
        ele.lineTo(ex,ey);
        ele.stroke();
        //ele.closePath();
     },  
     clearImage : function(ele,x,y,w,h) {
     deal.common(ele,x,y,w,h);
     ele.clearRect(x,y,w,h);
     }
 }

 var node = {
   //getElementByIdd的封装
   $ : function(Id) {
    return document.getElementById(Id);
   },
   innerHtml : function(innerText) {
     var Ele = document.createElement(innerText.tag);
     Ele.innerHTML = innerText.html;
     document.body.appendChild(Ele);
    }
 
 }
 w.drawBox = draw.drawBox;
 w.clearImage = draw.clearImage;
 w.drawLine = draw.drawLine;
 w.$ = node.$;
 w.innerHtml = node.innerHtml;
})(window)
 
