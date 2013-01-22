window.onload = function(){
var eleX,eleY,areaX,areaY;
    areaX = $(".small_area").getStyle("left");
    areaY = $(".small_area").getStyle("top");
    eleX = $(".small").getStyle("left");
    eleY = $(".small").getStyle("top");
    $(".small").onmousedown = function(e){
        this.onmousemove = function(e){
            var e = e || window.event,X;
            if(e.pageX){
                X = e.pageX;
                Y = e.pageY;
            }else{
                X = e.clientX+document.body.scrollLeft - document.body.clientLeft;
                Y = e.clientY+document.body.scrollTop - document.body.clientTop;
            }
            /*
            if(X > (parseInt($(".box").getStyle("width"))-parseInt(this.getStyle("width")))){
                X = parseInt($(".box").getStyle("width"))-parseInt(this.getStyle("width"));
                this.style.left = X;
            }else if(X < 0){
                X = 0 ;
                this.style.left = 0;
            }else
            {
                this.style.left = X - parseInt(this.getStyle("width"))/2
            }
            if(Y >= parseInt($(".box").getStyle("height"))-parseInt(this.getStyle("height"))){
                Y = parseInt($(".box").getStyle("height"))-parseInt(this.getStyle("height"));
                this.style.top = Y;
            }else if(Y < 0){
                Y = 0 ;
                this.style.top = 0;
            }else
            {
                this.style.top = Y - parseInt(this.getStyle("height"))/2;
            }*/
            this.style.left = X - parseInt(this.getStyle("width"))/2;
            this.style.top = Y - parseInt(this.getStyle("height"))/2;
            $("#line").style.width = X+"px";
        } 
        this.onmouseup = function(){
            if(Math.abs(parseInt(this.getStyle("left"))- parseInt(areaX)) > 3 && Math.abs(parseInt(this.getStyle("top"))- parseInt(areaY)) > 3){
                this.style.left = eleX;
                this.style.top = eleY;
            }else{
                this.style.left = $(".small_area").getStyle("left");
                this.style.top = $(".small_area").getStyle("top");
                test = function(){
                   alert("Your are successfunl!");
                }
                setTimeout("test()",1000);
            }
            this.onmousemove = null;
        }
    }
   
}