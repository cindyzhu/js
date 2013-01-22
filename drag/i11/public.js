 var $;
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