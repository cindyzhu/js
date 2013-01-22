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
    if( n>0&&n<5){
        st = -20*n;
        time = 500;
    }else if(n>=5 && n<=10){
        st = -50*n;
        time = 100;
    }else{
        st = -67*n;
        time = 50;
    }
       $(".box").style.backgroundPosition = st+"px"; 
       setTimeout(move,time)
    } 
   change = function() {
        var t , step,opacityValue;
        t = 5;
        step = itemWidth / t;
      
          for(i=1; i< t+1;i++){
              opacityValue = 1 - i*0.2;
                    $("#but_off").style.cssmarginLeft = -step*i +"px";//注意此处css的用法 因为ie不兼容marginLeft
                    $("#but_off").style.opacity = opacityValue;  
            }
       
         $(".but-on").style.display = "none";
        move();
    }
    
    $(".but-on").onclick = function(){
       change();
    };
}