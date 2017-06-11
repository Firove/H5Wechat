/**
 * Created by 文利 on 2017/5/4.
 */
export default rotate;
import {animaRight,animaLeft} from "../../../common/js/animaLR";
import {mobilwmtouch} from "../../../common/js/huadong.js";
function rotate() {
    const text = [
        "2015-2016赛季NBA总冠军1","2015-2016赛季NBA总冠军2","2015-2016赛季NBA总冠军3",
        "2015-2016赛季NBA总冠军4","2015-2016赛季NBA总冠军5","2015-2016赛季NBA总冠军6",
        "2015-2016赛季NBA总冠军7","2015-2016赛季NBA总冠军8","2015-2016赛季NBA总冠军9",
        "2015-2016赛季NBA总冠军10","2015-2016赛季NBA总冠军11","2015-2016赛季NBA总冠军12",
        "2015-2016赛季NBA总冠军13"
    ];
    const position = [];
    var page2_jiangbei = require('../img/jb_left1.png');
    var page2_jb_left1 = require('../img/jb_left1.png');
    var page2_jb_left2 = require('../img/jb_left1.png');
    var page2_jb_left3 = require('../img/jb_left1.png');
    var page2_jb_left4 = require('../img/jb_left1.png');
    var page2_jb_left5 = require('../img/jb_left1.png');
    var page2_jb_left6 = require('../img/jb_left1.png');
    var page2_jb_right6 = require('../img/jb_left1.png');
    var page2_jb_right5 = require('../img/jb_left1.png');
    var page2_jb_right4 = require('../img/jb_left1.png');
    var page2_jb_right3 = require('../img/jb_left1.png');
    var page2_jb_right2 = require('../img/jb_left1.png');
    var page2_jb_right1 = require('../img/jb_left1.png');
    const src = [
        [page2_jiangbei,"111","5555555"],
        [page2_jb_left1,222,"5555555"],
        [page2_jb_left2,333,"5555555"],
        [page2_jb_left3,444,"5555555"],
        [page2_jb_left4,555,"5555555"],
        [page2_jb_left5,666,"5555555"],
        [page2_jb_left6,777,"5555555"],
        [page2_jb_right6,888,"5555555"],
        [page2_jb_right5,999,"5555555"],
        [page2_jb_right4,100,"5555555"],
        [page2_jb_right3,200,"5555555"],
        [page2_jb_right2,300,"5555555"],
        [page2_jb_right1,400,"5555555"]
    ];
    let $aDiv = $('.h5_page_page2 .h5_component:lt(13)');
    $aDiv.each(function(i){
        position.push([$(this).width() , $(this).height() , $(this).css('left') , $(this).css('top'),$(this).css('zIndex')]);
        $(this).on('click',function () {
            jbDetailDisplay(src[i][0]);
            $("#desc .title:first").text(src[i][1]);
            $('#desc .content:first').text(src[i][2]);
        })
    });
    $("#home").on('click',function () {
        jbDetailClose();
        $.fn.fullpage.moveTo(2);
    });
    $("#back").on('click',function () {
        jbDetailClose();
    });
    var dom = $('.h5_page_page2').get(0);
    mobilwmtouch(dom);
    dom.addEventListener('touright',function (e) {
        animaRight($aDiv,'.h5_page_page2',text,position);
        return false;
    });
    dom.addEventListener('touleft',function (e) {
        animaLeft($aDiv,'.h5_page_page2',text,position);
        return false;
    });
}
function jbDetailDisplay(src){
    $("#jbdetail #jb").attr('src',src);
    $("#jbdetail").show();
}
function jbDetailClose(){
    $("#jbdetail").hide();
}