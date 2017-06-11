export default rotateshoe;
import {mobilwmtouch,evenzc} from "../../../common/js/huadong.js";
import {animaRight,animaLeft} from "../../../common/js/animaLR";
function rotateshoe() {
    const texts = [
        "2003 NIKE AIR ZOOM GENERATION", "2004 NIKE AIR ZOOM LEBRON II", "2005 NIKE AIR ZOOM LEBRON III",
        "2005 NIKE AIR ZOOM LEBRON III", "2007 NIKE AIR ZOOM LEBRON V", "2008 NIKE AIR ZOOM LEBRON VI",
        "2009 NIKE AIR MAX LEBRON VII", "2010 NIKE AIR MAX LEBRON VIII", "2011 NIKE AIR MAX LEBRON IX",
        "2012 NIKE LEBRON X", "2013 NIKE LEBRON XI", "2014 NIKE LEBRON XII",
        "2015 NIKE LEBRON XIII", "2016 NIKE LEBRON XIV"
    ];
    const positions = [];
    var page3_shoeqian = require('../img/shoe1.png');
    var page3_shoe_left1 = require('../img/shoe2.png');
    var page3_shoe_left2 = require('../img/shoe3.png');
    var page3_shoe_left3 = require('../img/shoe4.png');
    var page3_shoe_left4 = require('../img/shoe5.png');
    var page3_shoe_left5 = require('../img/shoe6.png');
    var page3_shoe_left6 = require('../img/shoe7.png');
    var page3_shoehou = require('../img/shoe8.png');
    var page3_shoe_right6 = require('../img/shoe9.png');
    var page3_shoe_right5 = require('../img/shoe10.png');
    var page3_shoe_right4 = require('../img/shoe11.png');
    var page3_shoe_right3 = require('../img/shoe12.png');
    var page3_shoe_right2 = require('../img/shoe13.png');
    var page3_shoe_right1 = require('../img/shoe14.png');

    const srcs = [
        [page3_shoeqian, "2003 NIKE AIR ZOOM GENERATION", "勒布朗.詹姆斯加入NBA不到几个月NIKE就为其推出了第一双篮球鞋-----NIKE AIR ZOOM GENERATION。鞋子是用的sphrene内村，十分透气，缓震配备了前掌zoom，后掌air sole的科技，中底搭载有碳纤维板。"],
        [page3_shoe_left1, "2004 NIKE AIR ZOOM LEBRON II", "延续整个系列的这种风格与Air Jordan的高贵所对立，也许正象征着一个崇尚力量的时代将要回归。该鞋搭载了前掌双气室Zoom +后掌Cage Zoom，从穿着效果来看，脚感堪称一流。"],
        [page3_shoe_left2, "2005 NIKE AIR ZOOM LEBRON III", "中底的Phylon材质，大容量的多气室冲击式Zoom Air气垫和Pebax材质的后跟外壳组成了Zoom LeBron III的避震系统。Pebax笼状结构也做了一番瘦身，减少了其厚度，以保证达到高延展性与高反应性的要求。"],
        [page3_shoe_left3, "2006 NIKE AIR ZOOM LEBRON IV", "鞋身内部采用了内靴设计，使得脚在鞋内包裹性和稳定性都得到了很好的保证，尤其是鞋身与内靴的双重包裹让脚在鞋内备加感觉安全。鞋帮处那带有小皇帝詹姆斯个人LOGO的魔术帖，为脚踝安全系数的提升做了很大的贡献。"],
        [page3_shoe_left4, "2007 NIKE AIR ZOOM LEBRON V", "外观设计理念依旧是为詹姆斯展示帝王般的气质，外观设计上运用了曾经在Zoom LeBron 3上使用的手法——利用皮革对保护材料进行遮盖。这可不是画蛇添足，而是节省成本的好办法。而点缀在球鞋上的金属饰物则告诉人们这是一双不折不扣的Zoom。"],
        [page3_shoe_left5, "2008 NIKE AIR ZOOM LEBRON VI", "结合完美性能与时尚外观，以结实耐用、强度与舒适等概念研发。鞋舌内里布满LeBron James给篮球的情书手稿，展现LeBron James对篮球永不熄灭的热情、一种持续前进的生活与态度。"],
        [page3_shoe_left6, "2009 NIKE AIR MAX LEBRON VII", "使用了flywire 和max气垫后改为air max lebron 7)旨在提供最大的舒适性和稳定性，球鞋采用了耐克公司最先推出的创新缓震技术-专为篮球运动设计全掌Max Air气垫单元。与以前的专业篮球鞋相比，新款詹姆斯7代篮球鞋鞋面的Flywire技术采用了具有更高抗张强度的纤维。"],
        [page3_shoehou, "2010 NIKE AIR MAX LEBRON VIII", "采用“皮革+Flywire”的组合鞋面，支撑性和包裹感相比上代有了很大的提升。鞋身外侧TPU 制成的 Swoosh Logo美观，对鞋面也有一定的支撑性，鞋领和鞋跟之间的高度差有所增加，提供稳定的同时也提升了跟腱部位的舒适性。"],
        [page3_shoe_right6, "2011 NIKE AIR MAX LEBRON IX", "进入联盟的第一年就拥有了自己的签名球鞋...在这之前,只有乔丹希尔艾弗森等少数的几位前辈做到过，拥有自己的第9双签名鞋，排在他前面的,也只有乔丹和艾弗森。NIKE ZOOM LEBRON 9陪伴詹姆斯去年拿到总冠军。"],
        [page3_shoe_right5, "2012 NIKE LEBRON X", "在伦敦奥运会的决赛中，詹姆斯穿上了最新的zoom lebron 10征战赛场，并帮助美国队夺得冠军。全新战靴也搭载了nike最新的科技max zoom和动态飞线。"],
        [page3_shoe_right4, "2013 NIKE LEBRON XI", "以轻简理念打造橡胶外底，并搭载全新 Lunarlon 缓震配置，使其成为迄今为止最轻的一双詹姆斯专属战靴。这一 NIKEiD 定制款型提供缤纷的詹姆斯11代配色选择，从鞋面到外底，玩转色彩风暴，彰显个性本色。"],
        [page3_shoe_right3, "2014 NIKE LEBRON XII", "采用后掌MAX，前掌ZOOM技术，并将采用flyknit跑鞋技术来保护脚踝。并采用全新内靴技术。并且球鞋还配备了感应芯片，可以记录穿鞋者的运动状态，通过一款手机软件，穿鞋者可以看到自己的各项数值。"],
        [page3_shoe_right2, "2015 NIKE LEBRON XIII", "鞋面部分采用由透气网眼+Flywire飞线科技+全新设计的不对称鞋带系统组成的高动态鞋面，保证了良好透气性的同时还可提供极佳的包裹性及出色的支撑性，增强足部控制。"],
        [page3_shoe_right1, "2016 NIKE LEBRON XIV", " 从中足延伸至后跟的宽版灵活固定带设计，在多种速度中提供轻盈支撑，助力自由运动。Flywire 飞线技术采用轻盈强韧的飞线设计，与鞋带系统融合，有力提升鞋款的锁定感。三层式轻盈鞋面由弹性里料、穿孔泡棉和纤薄网布匠心构成，塑就出众透气性、灵活性及支撑效果。"]
    ];
    let $bDiv = $('.h5_page_page3 .h5_component:lt(14)');
    $bDiv.each(function (i) {
        positions.push([$(this).width(), $(this).height(), $(this).css('left'), $(this).css('top'), $(this).css('zIndex')]);
        $(this).on('click', function () {
            shoeDetailDisplay(srcs[i][0]);
            $("#shoetext .shoetitle:first").text(srcs[i][1]);
            $('#shoetext .shoecontent:first').text(srcs[i][2]);
        })
    });
    $("#shoehome").on('click', function () {
        shoeDetailClose();
        $.fn.fullpage.moveTo(2);
    });
    $("#shoeback").on('click', function () {
        shoeDetailClose();
    });
    var dom = $('.h5_page_page3').get(0);
    mobilwmtouch(dom);
    dom.addEventListener('touright', function (e) {
        animaRight($bDiv, '.h5_page_page3', texts, positions);
        return false;
    });

    dom.addEventListener('touleft', function (e) {
        animaLeft($bDiv, '.h5_page_page3', texts, positions);
        return false;
    });
}
function shoeDetailDisplay(srcs) {
    $("#shoedetail #shoedisplay").attr('src', srcs);
    $("#shoedetail").show();
}
function shoeDetailClose() {
    $("#shoedetail").hide();
}