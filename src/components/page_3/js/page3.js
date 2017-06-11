export default rotateshoe;
import {mobilwmtouch,evenzc} from "../../../common/js/huadong.js";
function rotateshoe() {
    const texts = [
        "2003 NIKE ZOOM GENERATION","2003 NIKE ZOOM GENERATION 2","2003 NIKE ZOOM GENERATION 3",
        "2003 NIKE ZOOM GENERATION 4","2003 NIKE ZOOM GENERATION 5","2003 NIKE ZOOM GENERATION 6",
        "2003 NIKE ZOOM GENERATION 7","2003 NIKE ZOOM GENERATION 8","2003 NIKE ZOOM GENERATION 9",
        "2003 NIKE ZOOM GENERATION0 10","2003 NIKE ZOOM GENERATION 11","2003 NIKE ZOOM GENERATION 12",
        "2003 NIKE ZOOM GENERATION 13","2003 NIKE ZOOM GENERATION 14"
    ];
    const positions = [];
    var page3_shoe1 = require('../img/shoe0.png');
    var page3_shoe_left1 = require('../img/shoe-left-1.png');
    var page3_shoe_left2 = require('../img/shoe-left-2.png');
    var page3_shoe_left3 = require('../img/shoe-left-3.png');
    var page3_shoe_left4 = require('../img/shoe-left-4.png');
    var page3_shoe_left5 = require('../img/shoe-left-5.png');
    var page3_shoe_left6 = require('../img/shoe-left-6.png');
    var page3_shoe_right6 = require('../img/shoe-right-6.png');
    var page3_shoe_right5 = require('../img/shoe-right-5.png');
    var page3_shoe_right4 = require('../img/shoe-right-4.png');
    var page3_shoe_right3 = require('../img/shoe-right-3.png');
    var page3_shoe_right2 = require('../img/shoe-right-2.png');
    var page3_shoe_right1 = require('../img/shoe-right-1.png');
    var page3_shoe14 = require('../img/shoe14.png');
    const srcs = [
        [page3_shoe1,"NIKE AIR ZOOM GENERATION 2003","NIKE为勒布朗詹姆斯打造的第一款签名鞋，设计灵感来自于他的悍马H2，由此开启了LEBRON系列"],
        [page3_shoe_left1,222,"detailtext"],
        [page3_shoe_left2,333,"detailtext"],
        [page3_shoe_left3,444,"detailtext"],
        [page3_shoe_left4,555,"detailtext"],
        [page3_shoe_left5,666,"detailtext"],
        [page3_shoe_left6,777,"detailtext"],
        [page3_shoe14,500,"detailtext"],
        [page3_shoe_right6,888,"detailtext"],
        [page3_shoe_right5,999,"detailtext"],
        [page3_shoe_right4,100,"detailtext"],
        [page3_shoe_right3,200,"detailtext"],
        [page3_shoe_right2,300,"detailtext"],
        [page3_shoe_right1,400,"detailtext"]
    ];
    let $bDiv = $('.h5_page_page3 .h5_component:lt(14)');
    $bDiv.each(function(i){

        positions.push([$(this).width() , $(this).height() , $(this).css('left') , $(this).css('top'),$(this).css('zIndex')]);
        $(this).on('click',function () {
            shoeDetailDisplay(srcs[i][0]);
            $("#shoetext .shoetitle:first").text(srcs[i][1]);
            $('#shoetext .shoecontent:first').text(srcs[i][2]);
        })
    });
    $("#shoehome").on('click',function () {
        shoeDetailClose();
        $.fn.fullpage.moveTo(2);
    });
    $("#shoeback").on('click',function () {
        shoeDetailClose();
    });
    var dom = $('.h5_page_page3').get(0);
    mobilwmtouch(dom);
    dom.addEventListener('touright',function (e) {
        animaRight1();
        return false;
    });

    dom.addEventListener('touleft',function (e) {
        animaLeft1();
        return false;
    });

    function animaRight1() {
        if($(".h5_page_page3 :animated").length <= 0) {
            let last = positions.pop();
            positions.unshift(last);

            let lastText = texts.pop();
            texts.unshift(lastText);
            $(".h5_page_page3 .h5_component_name_text:first").text(texts[0]);
            // console.log($(".h5_page_page2 .h5_component_name_text:first").text);
            $bDiv.each(function (i) {
                $(this).animate({
                    width: positions[i][0],
                    height: positions[i][1],
                    left: positions[i][2],
                    top: positions[i][3],
                    zIndex: positions[i][4]
                }, 600, 'linear')
            });
        }
    }
    function animaLeft1() {
        if($(".h5_page_page3 :animated").length <= 0) {
            let first = positions.shift();
            positions.push(first);
            let firstText = texts.shift();
            texts.push(firstText);
            $(".h5_page_page3 .h5_component_name_text:first").text(texts[0]);
            $bDiv.each(function (i) {
                $(this).animate({
                    width: positions[i][0],
                    height: positions[i][1],
                    left: positions[i][2],
                    top: positions[i][3],
                    zIndex: positions[i][4]
                }, 600, 'linear')
            });
        }
    }
    function shoeDetailDisplay(srcs){
        $("#shoedetail #shoedisplay").attr('src',srcs);
        $("#shoedetail").show();
    }
    function shoeDetailClose(){
        $("#shoedetail").hide();
    }

}