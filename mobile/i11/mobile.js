YUI().use('node', 'event-touch',function(Y){
    var ybd    = Y.namespace('Yahoo-Big-Deals'); 
    ybd.module = {
        Moblie: {
            init : function() {
                var iPassSecs       = 0,//how many seconds after the page was ready.
                    iLeft           = 0,//offsetX of initial position.
                    iIndex          = 0,
                    iTouchOffsetX   = 0,
                    iTouchStartX    = -1,
                    iTouchEndX      = -1,
                    iSeconds        = Y.all(".lave_time").get('value'),
                    dDeals          = Y.all('.preload'),
                    iAvailWidth     = dDeals.item(0).get('offsetWidth') / 2,//availWidth of browser.
                    iSpeeds         = [iAvailWidth / 16,iAvailWidth / 8],
                    iSpeed          = iSpeeds[0],
                    iShiftWidth     = iAvailWidth / 2,//when offsetX greater than iShiftWidth move speed will be change.
                    iDealsCount     = dDeals.size(),
                    dShowCountDown  = Y.all('.preload .time'),
                    oTimer          = undefined,
                    sCountdown      = undefined,
                    bHasSwitch      = false,//deals has be switch?
                    bMoveable       = true,//is it can move?
                    updateCountdown = function(i) {
                        sCountdown = getCountdown(iSeconds[iIndex] - (i ? ++iPassSecs : iPassSecs));
                        dShowCountDown.item(iIndex).setStyle('fontSize', (isNaN(sCountdown.slice(0, 3)) ? 28 : 25) + 'px').setContent(sCountdown);
                    },
                    getCountdown    = function(iSecs) {
                        return iSecs <= 0 ? '00:00:00' : formatCountdown(Math.floor(iSecs / 3600), Math.floor(iSecs % 3600 / 60), Math.floor(iSecs % 60));
                    }
                    formatCountdown = function(h, m, s) {//format countdown: when hours/minutes/seconds is less than 10, this function will be append '0' before it, connect them with ':' and return string.
                        return (h > 9 ? h : ('0' + h)) + ':' + (m > 9 ? m : ('0' + m)) + ':' + (s > 9 ? s : ('0' + s));
                    },
                    move            = function(i) {
                        bMoveable = false;
                        if (Math.abs(iLeft) > iShiftWidth) {
                            iSpeed = iSpeeds[1];
                        }
                        dDeals.item(iIndex).setStyle('left', (iLeft += i * iSpeed) + 'px');
                        if  (Math.abs(iLeft) > iAvailWidth) {
                            bHasSwitch = true;
                            dDeals.item(iIndex).hide();
                            iIndex = (iIndex === (iDealsCount - 1) * (1 + i) / 2) ? (iDealsCount - 1) * (1 - i) / 2 : (iIndex + i * 1);
                            dDeals.item(iIndex).setStyle('left', (iLeft = -1 * i * iAvailWidth) + 'px').show();
                            updateCountdown();
                            return;
                        }
                        if (bHasSwitch && iLeft * -i < 0) {
                            dDeals.item(iIndex).setStyle('left', '0px');
                            iLeft = 0;
                            iTouchStartX = -1;
                            bMoveable = true;
                            bHasSwitch = false;
                            oTimer.cancel();
                        }
                    };
                
                Y.later(1000, null, updateCountdown, 1, true);  
                Y.on('click', function(e) {
                    e.halt();
                    if (bMoveable) {
                        oTimer = Y.later(30, null, move, e.target.hasClass('show_next') ? 1 : -1, true);
                    }
                }, '.show_prev, .show_next');
                Y.on('touchstart', function(e) {
                    if (bMoveable) {
                        iTouchStartX = e.targetTouches[0].pageX;
                    }
                }, '.ybdlimitedtime');
                Y.on('touchend', function(e) {
                    if (bMoveable && iTouchStartX > -1) {
                        iTouchEndX = e.changedTouches[0].pageX;
                        iTouchOffsetX = iTouchStartX - iTouchEndX;
                        if(Math.abs(iTouchOffsetX) > 8){
                            oTimer = Y.later(30, null, move, iTouchOffsetX < 0 ? 1 : -1, true);
                        } else {
                            iTouchStartX = -1;
                        }
                    }
                }, '.ybdlimitedtime');
            }
        }
    }
    ybd.module.Moblie.init();
});