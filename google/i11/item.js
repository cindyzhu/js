window.onload = function(){
   var n,itemWidth,$,st;
    $ = function(ele){
        var useEle =  ele.substring("1",ele.length);      
        if(ele.indexOf("#") == 0){
                ele = document.getElementById(useEle); 
        }else if(ele.indexOf(".") == 0){
            var arry = [],currentNode,
            nodelist = document.getElementsByTagName("*");
            for(i=0; i < nodelist.length; i++){
                if(nodelist[i].className == useEle){ ele = nodelist[i]};
            }     
        }
        ele.getStyle = function(pro,uprose){
               uprose ? uprose = uprose: uprose = null ;
              //return getComputedStyle(this,null)[pro];//中括号这块比较特殊 考虑到hash算法 如果点后面跟的是字符串就必须用中括号而不能用点
              if(document.all){
                return this.currentStyle[pro];
               }else{
                return getComputedStyle(this,null)[pro];
               }  
        }
        return ele;
    }
    n=0;
    st = 0;
    move = function(){
    n+=1;
    st = -10*n;
    if( st < 0){
      $(".box").style.backgroundPosition = -67*n+"px"; 
      time = 50;
    }else
    {
       $(".box").style.backgroundPosition = "0px "+-20+"px";
       time = 500;
    }
       setTimeout(move,time)
    } 
   change = function() {
        var t , step,opacityValue;
        t = 5;
        step = itemWidth / t;
        for(i=1; i< t+1;i++){
          opacityValue = 1 - i*0.2;
                $("#but_off").style.marginLeft = -step*i +"px";
                $("#but_off").style.opacity = opacityValue;         
        }
        move();
    }
    
    $(".but-on").onclick = function(){
       change();
    };
}