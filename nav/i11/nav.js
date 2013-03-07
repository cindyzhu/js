   YUI().use('node','nodelist','event',function(Y){
        var menuList = Y.all('#nav>li'),
            links =  Y.all('#nav li a'),
            secondMenu = Y.all('#nav>li ul li');
            selectMenu = Y.all('#nav>li ul li.first');
        /*reset style*/    
        links.set('target','_top');
        Y.all('li ul').setStyle('display','none');
        /*menu event*/
        menuList.on('mouseenter',function(e){
          this.setStyle('color','#fff');
          selectMenu.addClass('on');
          if(e.currentTarget.one('ul')){
           e.currentTarget.one('ul').setStyle('display','block');}
           e.currentTarget.setStyle('color','#FFD600'); 
          
        });
        menuList.on('mouseleave',function(e){
          if(e.currentTarget.one('ul')){
           e.currentTarget.one('ul').setStyle('display','none');}
           e.currentTarget.setStyle('color','#fff'); 
        });
         /*secondMenu event*/
        secondMenu.on('mouseover',function(e){ 
               selectMenu.removeClass('on');
               e.currentTarget.addClass('on');           
        });  
        secondMenu.on('mouseout',function(e){
            e.currentTarget.removeClass('on');
        });       
    });