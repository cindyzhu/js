var carouselInit = function(carouselContainerId, carouselId, carouselSrcNode, prevId, nextId, pageNumberId, options) {
        var changeOptions = {'width':150,'height':150};
        YUI().use('scrollview', 'scrollview-paginator', function(Y) {
            var carouselContainer = Y.one(carouselContainerId);
            var srcNode = Y.one(carouselSrcNode);
	    var itemsPerPage = (options.itemsPerPage == undefined) ? Math.floor(parseInt(srcNode.getComputedStyle("width")) / (parseInt(options.width) + 5)) : parseInt(options.itemsPerPage);
	    var carouselWidth = itemsPerPage * (parseInt(options.width) + 5);
	    var carouselHeight = parseInt(options.height);
	    var scrollView = new Y.ScrollView({
                id: carouselId,
                srcNode : carouselSrcNode,
		width : carouselWidth,
                height : carouselHeight,
                flick: {
                    minDistance:10,
                    minVelocity:0.3,
                    axis: "x"
                }
            });
            // allow vertical scrolling
            scrollView._prevent.move = false;

            var sel = 'li:nth-child('+itemsPerPage+'n+1)';
            scrollView.plug(Y.Plugin.ScrollViewPaginator, {
                selector: sel
            });
            scrollView.render();
            var content = scrollView.get("contentBox");
            content.delegate("click", function(e) {
                // For mouse based devices, we need to make sure the click isn't fired
                // at the end of a drag/flick. We're use 2 as an arbitrary threshold.
                if (Math.abs(scrollView.lastScrolledAmt) >= 2) {
                    e.preventDefault();
                }
            }, "a");
            // Prevent default image drag behavior
            content.delegate("mousedown", function(e) {
                e.preventDefault();
            }, "a");
            content.all('.carousel-video-mask').on("click", function(e) {
                var amt = Math.abs(e.pageX - mx) + Math.abs(e.pageY - my);
                if (amt <= 2) {
                    var tar = e.target.hasClass('carousel-video-mask') ? e.target : e.target.ancestor('.carousel-video-mask'); 
                    tar.setStyle('display','none');
                }               
            });
            content.all('.carousel-video-mask').on("mousedown", function(e) { 
                mx = e.pageX;
                my = e.pageY;
                e.preventDefault();
            });
            Y.one(nextId).on('click', Y.bind(scrollView.pages.next, scrollView.pages));
            Y.one(prevId).on('click', Y.bind(scrollView.pages.prev, scrollView.pages));
            if (options.pagenoStyle==undefined || options.pagenoStyle=='standard') {
                // number/total style
                Y.one(pageNumberId).set('innerHTML', '1/'+scrollView.pages.get("total"));
            } else {
                // dot style
                var dots = '';
                for (var i=0; i<scrollView.pages.get("total"); i++) {
                    dots += '<div id='+carouselId+'-pagedot-'+i+' class="carousel-pagedot"></div>';
                }
                Y.one(pageNumberId).set('innerHTML',dots);
                Y.one('#'+carouselId+'-pagedot-0').addClass('carousel-pagedot-active');
                Y.all('#'+carouselId+'-pageno .carousel-pagedot').on('click', function(e) {
                    var i = parseInt(e.target.get('id').substr(e.target.get('id').lastIndexOf('-')+1));
                    var diff = scrollView.pages.get("index")-i;       
                    if (diff>0) {
                        for (var j=0; j<diff; j++) {
                            scrollView.pages.prev();
                        }
                    } else {
                        for (var j=0; j<-diff; j++) {
                            scrollView.pages.next();
                        }
                    }
                });
            }
            // disable prev/next button when after rendering carousel
            if (scrollView.pages.get("index") == 0) Y.one(prevId).setStyle('opacity', 0);
            if (scrollView.pages.get("index")+1 == scrollView.pages.get("total")) Y.one(nextId).setStyle('opacity', 0);
            // disable prev/next button when carousel reachs the first/last page
            scrollView.pages.on('indexChange', function(e) {
                if (e.newVal == 0) {
                    Y.one(prevId).setStyle('opacity', 0);
                } else {
                    Y.one(prevId).setStyle('opacity', 1);
                }
                if (e.newVal+1 == scrollView.pages.get("total")) {
                    Y.one(nextId).setStyle('opacity', 0);
                } else {
                    Y.one(nextId).setStyle('opacity', 1);
                }
                if (options.pagenoStyle==undefined || options.pagenoStyle=='standard') {
                       Y.one(pageNumberId).set('innerHTML', e.newVal+1+'/'+scrollView.pages.get("total"));
                } else {
                    Y.one('#'+carouselId+'-pagedot-'+e.prevVal).removeClass('carousel-pagedot-active');
                    Y.one('#'+carouselId+'-pagedot-'+e.newVal).addClass('carousel-pagedot-active');
                }
            });
            // change orientation
            Y.on('resize', function() {
                itemsPerPage = (options.itemsPerPage == undefined) ? Math.floor(parseInt(carouselContainer.getComputedStyle("width")) / (parseInt(options.width) + 5)) : parseInt(options.itemsPerPage);
               if (parseInt(carouselContainer.getComputedStyle("width")) > 310) {
                    carouselWidth = itemsPerPage * (changeOptions.width + 5);
                    carouselHeight = parseInt(changeOptions.height);
                } else {
                    carouselWidth = itemsPerPage * (parseInt(options.width) + 5);
                    carouselHeight = parseInt(options.height);
                }
                scrollView.setAttrs({
                        width : carouselWidth,
                        height : carouselHeight,
                });
            });
        });
};
