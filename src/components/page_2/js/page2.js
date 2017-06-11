/**
 * Created by 文利 on 2017/5/4.
 */
export default rotate;
import {animaRight,animaLeft} from "../../../common/js/animaLR";
import {mobilwmtouch} from "../../../common/js/huadong.js";
function rotate() {
    const text = [
        "2015-16赛季NBA总决赛MVP","2003-04赛季NBA最佳新秀","2006年全明星赛MVP","2008年全明星赛MVP",
        "2008-09赛季NBA常规赛MVP","2009-10赛季NBA常规赛MVP","2011-12赛季NBA常规赛MVP","2012-13赛季NBA常规赛MVP",
        "2011-12赛季NBA总冠军","2011-12赛季NBA总决赛MVP","2012-13赛季NBA总冠军","2012-13赛季NBA总决赛MVP",
        "2015-16赛季NBA总冠军"
    ];
    const position = [];
    var page2_jiangbei = require('../../page_1/img/jiangbei.png');
    var page2_jiangbei1 = require('../img/jb2.png');
    var page2_jiangbei2 = require('../img/jb4.png');
    var page2_jiangbei3 = require('../img/jb1.png');
    var page2_jiangbei4 = require('../img/jb3.png');
    const src = [
        [page2_jiangbei1,"2015-16赛季NBA总决赛MVP","NBA总决赛抢七决战，骑士93-89战胜勇士，以4-3的比分夺得队史首座冠军奖杯，他们成为历史上第一支以1-3落后逆转夺冠的球队。詹姆斯拿到27分11篮板11助攻3盖帽的生涯第七次总决赛三双数据，这也是2016年总决赛唯一的三双。7场比赛詹姆斯场均29.7分、11.3个篮板、8.9个助攻、2.4个抢断、2.3盖帽。最终，詹姆斯全票当选15-16赛季总决赛MVP"],
        [page2_jiangbei2,"2003-04赛季NBA最佳新秀","詹姆斯这个赛季平均每场贡献20.9分、5.9次助攻和5.5个篮板球，是继奥斯卡•罗伯逊及迈克尔•乔丹后，NBA史上第三位于新秀球季就得到如此数据的球员。4月20日詹姆斯击败卡梅隆•安东尼获得了赛季最佳新秀称号"],
        [page2_jiangbei3,"2006年全明星赛MVP","2006年2月21日全明星赛，在落后21分的情况下，东部全明星在詹姆斯的火烫手感和底特律活塞队的4名全明星团队合作的引领下以122比120战胜了西部全明星。年仅21岁的詹姆斯，本场比赛得到29分，6个篮板及2次助攻，以21岁51天成为了史上最年轻的全明星MVP。"],
        [page2_jiangbei3,"2008年全明星赛MVP","本赛季詹姆斯连续4年入选东部联盟全明星，2008年2月18日，在新奥尔良全明星赛上，协助东部联盟以134-128击败西部联盟，詹姆斯以27分、8篮板、9次助攻，2个抢断及2个盖帽的成绩获得2008年NBA全明星赛MVP"],
        [page2_jiangbei4,"2008-09赛季NBA常规赛MVP","3月25日骑士队击败新泽西篮网后，协助球队取得自成立以来最好的成绩。凭借2008-2009赛季出色的表现詹姆斯成为常规赛最有价值球员，他本人也成为即2001年的艾弗森后，2001-2009年9年来第一个出自东部的MVP。"],
        [page2_jiangbei4,"2009-10赛季NBA常规赛MVP","詹姆斯带领骑士以61胜的战绩再次笑傲全联盟，他也蝉联了这个赛季的常规赛MVP，也成为NBA史上第十位连续两个赛季获此荣誉的球员。这个赛季詹姆斯常规赛场均贡献8.6次助攻，超越伯德的场均7.6次助攻，成为NBA历史上单季场均助攻最多的小前锋。"],
        [page2_jiangbei4,"2011-12赛季NBA常规赛MVP","2011-12赛季，受到劳资谈判影响，常规赛缩水，詹姆斯在其所参加的62场常规赛中全部首发，场均上场37.5分钟，得到27.1分、7.9个篮板和6.2次助攻，在投篮命中率、三分球命中率上均创造了个人生涯新高。凭借出色的表现，詹姆斯第三次加冕常规赛MVP，这是他2008-2012赛季4个赛季第3次获此殊荣，同时“小皇帝”成为继迈克尔-乔丹之后首位至少3夺常规赛MVP之人。"],
        [page2_jiangbei4,"2012-13赛季NBA常规赛MVP","本赛季詹姆斯率领球队在2月3日~3月25日缔造了NBA史上第二长的27连胜，他在连胜期间打出场均27.0分、8.1篮板、8.0助攻、1.9抢断、57.5%命中率的数据，常规赛后毫无悬念地获得MVP。这是詹姆斯5年内第4次获此殊荣，他也成为了NBA史上第5位至少4次获得常规赛MVP的球员。"],
        [page2_jiangbei,"2011-12赛季NBA总冠军","2012总决赛中面对雷霆，热火在先失一场情况下连赢四场，以4-1夺取2012年NBA总冠军。詹姆斯平生第一次捧起总冠军奖杯"],
        [page2_jiangbei1,"2011-12赛季NBA总决赛MVP","詹姆斯在自己的第三次总决赛上场均轰下28.6分10.2篮板7.4助攻，投篮命中率47.2%。并在最后一场中他打出三双，贡献26分、11个篮板和13次助攻，当之无愧地成为总决赛MVP。"],
        [page2_jiangbei,"2012-13赛季NBA总冠军","总决赛对阵马刺队，热火在第六战凭借雷阿伦的三分打进加时赛并扳平总比分。抢七战詹姆斯表现出色独得37分、12篮板和4助攻，帮助热火队4：3击败马刺队卫冕总冠军。"],
        [page2_jiangbei1,"2012-13赛季NBA总决赛MVP","7场系列赛，詹姆斯平均25.3分、10.9篮板、外加7次助攻再次获得NBA总决赛MVP。詹姆斯连续两年包办了常规赛和总决赛的MVP。"],
        [page2_jiangbei,"2015-16赛季NBA总冠军","回归骑士队的詹姆斯率领球队连续两年与金州勇士队会师总决赛。在前四战大部分1：3落后的情况下，詹姆斯与欧文双双爆发，率队连扳三场最终完成了NBA总决赛历史上最伟大的逆转，获得2016年NBA总冠军。终结了克利夫兰长达52年的冠军荒。"]
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