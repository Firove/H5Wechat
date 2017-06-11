
export function mobilwmtouch(obj) {
        var stoux, stouy;
        var etoux, etouy;
        var xdire, ydire;
        obj.addEventListener("touchstart", function (e) {
            stoux = e.targetTouches[0].clientX;
            stouy = e.targetTouches[0].clientY;
//console.log(stoux);
        }, false);
        obj.addEventListener("touchend", function (e) {
            etoux = e.changedTouches[0].clientX;
            etouy = e.changedTouches[0].clientY;
            xdire = etoux - stoux;
            ydire = etouy - stouy;
            var chazhi = Math.abs(xdire) - Math.abs(ydire);
            if (xdire > 0 && chazhi > 0) {
                obj.dispatchEvent(evenzc('touright'));
            } else if (ydire > 0 && chazhi < 0) {
                obj.dispatchEvent(evenzc('toudown'));
            } else if (xdire < 0 && chazhi > 0) {
                obj.dispatchEvent(evenzc('touleft'));
            } else if (ydire < 0 && chazhi < 0) {
                obj.dispatchEvent(evenzc('touup'));
            }
        }, false);
    }

    export function evenzc(eve) {
        // if (typeof document.CustomEvent === 'function') {
        //     this.event = new document.CustomEvent(eve, {//自定义事件名称
        //         bubbles: false,//是否冒泡
        //         cancelable: false//是否可以停止捕获
        //     });
        //     if (!document["evetself" + eve]) {
        //         document["evetself" + eve] = this.event;
        //     }
        // } else if (typeof document.createEvent === 'function') {
        //     this.event = document.createEvent('HTMLEvents');
        //     this.event.initEvent(eve, false, false);
        //     if (!document["evetself" + eve]) {
        //         document["evetself" + eve] = this.event;
        //     }
        // } else {
        //     return false;
        // }
        // return document["evetself" + eve];
        var event = document.createEvent( "CustomEvent");
        event.initCustomEvent( eve, false,false,1 );
        return event;
    };