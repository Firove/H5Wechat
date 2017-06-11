/**
 * Created by 文利 on 2017/4/26.
 */
import $ from 'jquery';
import 'jquery-ui';
import H5 from './src/common/js/H5.js';
import './src/common/style/H5.css';
import './src/common/style/base.css';
import './src/common/style/H5ComponentBase.css';
import './src/common/style/preload.less';
import rotate from './src/components/page_2/js/page2.js';
import rotateshoe from './src/components/page_3/js/page3.js';
import './src/common/js/huadong.js';
import './src/common/style/detail.less';
import './src/common/style/shoedetail.less';
window.jQuery = window.$ = require('jquery');
import './src/components/face/style/face.less';
import './src/components/page_1/style/page1.less';
import './src/components/page_2/style/page2.less';
import './src/components/page_3/style/page3.less';
import './src/components/illusion/style/illusion.less';

$(function(){
    var face0 = require('./src/components/face/img/face.png');
    var face1 = require('./src/components/face/img/face_in.png');
    var page1_guiji = require('./src/components/page_1/img/guiji.png');
    var page1_xiezi = require('./src/components/page_1/img/xiezi.png');
    var page1_yiner = require('./src/components/page_1/img/yiner.png');
    var page1_jiangbei = require('./src/components/page_1/img/jiangbei.png');
    var page1_huangguan = require('./src/components/page_1/img/huangguan.png');
    var page2_jiangbeiCenter = require('./src/components/page_2/img/jb2.png');
    var page2_jb_left1 = require('./src/components/page_2/img/jb4.png');
    var page2_jb_left2 = require('./src/components/page_2/img/jb1.png');
    var page2_jb_left4 = require('./src/components/page_2/img/jb3.png');
    var page3_shoeqian = require('./src/components/page_3/img/shoe1.png');
    var page3_shoe_left1 = require('./src/components/page_3/img/shoe2.png');
    var page3_shoe_left2 = require('./src/components/page_3/img/shoe3.png');
    var page3_shoe_left3 = require('./src/components/page_3/img/shoe4.png');
    var page3_shoe_left4 = require('./src/components/page_3/img/shoe5.png');
    var page3_shoe_left5 = require('./src/components/page_3/img/shoe6.png');
    var page3_shoe_left6 = require('./src/components/page_3/img/shoe7.png');
    var page3_shoehou = require('./src/components/page_3/img/shoe8.png');
    var page3_shoe_right6 = require('./src/components/page_3/img/shoe9.png');
    var page3_shoe_right5 = require('./src/components/page_3/img/shoe10.png');
    var page3_shoe_right4 = require('./src/components/page_3/img/shoe11.png');
    var page3_shoe_right3 = require('./src/components/page_3/img/shoe12.png');
    var page3_shoe_right2 = require('./src/components/page_3/img/shoe13.png');
    var page3_shoe_right1 = require('./src/components/page_3/img/shoe14.png');
    var chahua1 = require('./src/components/illusion/img/chahua1.jpg');
    var chahua2 = require('./src/components/illusion/img/chahua2.jpg');
    var chahua3 = require('./src/components/illusion/img/chahua3.jpg');
    var chahua4 = require('./src/components/illusion/img/chahua4.jpg');
    var chahua5 = require('./src/components/illusion/img/chahua5.jpg');
    var chahua6 = require('./src/components/illusion/img/chahua6.jpg');
    var chahua7 = require('./src/components/illusion/img/chahua7.jpg');
    var chahua8 = require('./src/components/illusion/img/chahua8.jpg');
    var chahua9 = require('./src/components/illusion/img/chahua9.jpg');
    var chahua10 = require('./src/components/illusion/img/chahua10.jpg');
    var chahua11 = require('./src/components/illusion/img/chahua11.jpg');
    var chahua12 = require('./src/components/illusion/img/chahua12.jpg');
    var chahua13 = require('./src/components/illusion/img/chahua13.jpg');
    var chahua14 = require('./src/components/illusion/img/chahua14.jpg');
    var chahua15 = require('./src/components/illusion/img/chahua15.jpg');
    var chahua16 = require('./src/components/illusion/img/chahua16.jpg');
    var chahua17 = require('./src/components/illusion/img/chahua17.jpg');
    var chahua18 = require('./src/components/illusion/img/chahua18.jpg');
    var chahua19 = require('./src/components/illusion/img/chahua19.jpg');
    var chahua20 = require('./src/components/illusion/img/chahua20.jpg');
    var chahua21 = require('./src/components/illusion/img/chahua21.jpg');
    var chahua22 = require('./src/components/illusion/img/chahua22.jpg');
    var chahua23 = require('./src/components/illusion/img/chahua23.jpg');
    var chahua24 = require('./src/components/illusion/img/chahua24.jpg');
    var chahua25 = require('./src/components/illusion/img/chahua25.jpg');
    var chahua26 = require('./src/components/illusion/img/chahua26.jpg');
    var chahua27 = require('./src/components/illusion/img/chahua27.jpg');

    var home = require('./src/components/page_2/img/home.png');
    var back = require('./src/components/page_3/img/back.png');
    var bg = require('./src/components/page_1/img/bg.png');
    var imgs = [
        face0,face1,page1_guiji,page1_xiezi,page1_yiner,page1_jiangbei,page1_huangguan,
        page2_jiangbeiCenter,page2_jb_left1,page2_jb_left2,page2_jb_left4,page3_shoeqian,
        page3_shoe_left1,page3_shoe_left2,page3_shoe_left3,page3_shoe_left4,page3_shoe_left5,
        page3_shoe_left6,page3_shoehou,page3_shoe_right6,page3_shoe_right5,page3_shoe_right4,
        page3_shoe_right3,page3_shoe_right2,page3_shoe_right1,home,back,bg,chahua1,chahua2,chahua3,
        chahua4,chahua5,chahua6,chahua7,chahua8,chahua9,chahua10,chahua11,chahua12,chahua13,chahua14,
        chahua15,chahua16,chahua17,chahua18,chahua19,chahua20,chahua21,chahua22,chahua23,chahua24,
        chahua25,chahua26,chahua27
    ];
    const len = imgs.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        let imgObj = new Image();
        imgObj.onload = imgObj.onerror = function (){
            count++;
            console.log(count);
            if (count >= len){
                $('.preload:first').hide();
                return;
            }
            var process = ((count/len)*100).toFixed(2) + '%';
            $('.process:first').text(process);
        };
        imgObj.src = imgs[i];
    }




    var h5 = new H5;
    h5
        .addPage('face')
            .addComponent('face',{
                css: {
                    position: 'absolute',
                    backgroundSize:'contain',
                    marginLeft: '-14rem',
                    left: '50%',
                    top: '13%',
                    width:'28rem',
                    height: '44rem'
                },
                bg: face0
            })
            .addComponent('go',{
                css: {
                    position: 'absolute',
                    backgroundSize:'contain',
                    left: '50%',
                    width:'24rem',
                    marginLeft: '-12rem',
                    height: '5rem',
                    bottom: '13%'
                },
                bg: face1,
                onclick:function () {
                    $.fn.fullpage.moveTo(2);
                }
            })
        .addPage('page1')
            .addComponent('guiji',{
                bg: page1_guiji,
                css: {
                    backgroundSize:'100% 100%',
                    top:'50%',
                    marginTop: '-15.8rem',
                    height: '32rem',
                },
                width: '100%',
            })
            .addComponent('xiezi',{
                bg: page1_xiezi,
                css: {
                    position: 'absolute',
                    backgroundSize:'contain',
                    top: '42%',
                    right: '0%',
                    zIndex:'10',
                    opacity:0,
                    width: '24rem',
                    height: '23rem',
                },
                animateIn:{opacity:1,top: '42%', right: '0%',},
                animateOut: {opacity:0,top: '42%', right: '0%',},
                onclick:function () {
                    $.fn.fullpage.moveTo(4);
                }
             })
            .addComponent('yiner',{
                bg: page1_yiner,

                css: {
                    position: 'absolute',
                    backgroundSize:'contain',
                    top: '20%',
                    left: '30%',
                    zIndex:'0',
                    opacity:0,
                    width: '7rem',
                    height: '9rem',
                },
                animateIn:{opacity:1,top: '20%',left: '30%'},
                animateOut: {opacity:0,top: '20%',left: '30%'},
                onclick:function () {
                    $.fn.fullpage.moveTo(5);
                }
            })
            .addComponent('jiangbei',{
                bg: page1_jiangbei,
                css: {
                    position: 'absolute',
                    backgroundSize:'contain',
                    top: '38%',
                    left: '0%',
                    zIndex:'10',
                    opacity:0,
                    width: '10rem',
                    height: '17rem'
                },
                animateIn:{opacity:1, top: '38%',left: '0%',},
                animateOut: {opacity:0, top: '38%',left: '0%'},
                onclick:function () {
                    $.fn.fullpage.moveTo(3);
                }
            })
            .addComponent('huangguan',{
                bg: page1_huangguan,
                css: {
                    position: 'absolute',
                    backgroundSize:'100% 100%',
                    top: '18%',
                    left: '50%',
                    marginLeft: '-11rem',
                    zIndex:'3',
                    opacity: 0,
                    width: '22rem',
                    height: '15rem'
                },
                animateIn:{opacity:1, top: '30%'},
                animateOut: {opacity:0, top: '18%'},

            })
            .addComponent('text',{
                text: 'LBJ宇宙开启皇帝专属旅程',
                css: {
                    fontSize: '2rem',
                    position: 'absolute',
                    color: '#ffffff',
                    //textAlign: 'center',
                    width: '100%',
                    textAlign: 'center',
                    bottom: '0%',
                    opacity:0
                },
                animateIn:{opacity:1, bottom: '10%'},
                animateOut: {opacity:0, bottom: '0%'},
            })
        .addPage('page2')
            .addComponent('zhongjian',{
                bg: page2_jiangbeiCenter,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '44%',
                    left: '38%',
                    zIndex: '100',
                    width: '9.5rem',
                    height: '16.4rem',
                },
            })
            .addComponent('zuo1',{
                bg: page2_jb_left1,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '44%',
                    left: '21%',
                    zIndex: '95',
                    width: '7rem',
                    height: '12.8rem',
                }
            })
            .addComponent('zuo2',{
                bg: page2_jb_left2,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '41%',
                    left: '8%',
                    zIndex: '90',
                    width: '6.4rem',
                    height: '12rem',
                }
            })
            .addComponent('zuo3',{
                bg: page2_jb_left2,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '37%',
                    left: '4%',
                    zIndex: '85',
                    width: '5.4rem',
                    height: '10rem'
                }
            })
            .addComponent('zuo4',{
                bg: page2_jb_left4,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '33%',
                    left: '16%',
                    zIndex: '80',
                    width: '4.3rem',
                    height: '8rem',
                }
            })
            .addComponent('zuo5',{
                bg: page2_jb_left4,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '31%',
                    left: '29%',
                    zIndex: '75',
                    width: '3.6rem',
                    height: '6.6rem',
                }
            })
            .addComponent('zuo6',{
                bg: page2_jb_left4,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '30%',
                    left: '40%',
                    zIndex: '70',
                    width: '3.3rem',
                    height: '6rem',
                }
            })
            .addComponent('you6',{
                bg: page2_jb_left4,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    zIndex: '70',
                    width: '3.3rem',
                    height: '6rem'
                },
            })
            .addComponent('you5',{
                bg: page1_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '31%',
                    left: '61%',
                    zIndex: '75',
                    width: '3.6rem',
                    height: '6.6rem',
                }
            })
            .addComponent('you4',{
                bg: page2_jiangbeiCenter,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '33%',
                    left: '72.5%',
                    zIndex: '80',
                    width: '4.3rem',
                    height: '8rem',
                },

            })
            .addComponent('you3',{
                bg: page1_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '37%',
                    left: '81%',
                    zIndex: '85',
                    width: '5.4rem',
                    height: '10rem'
                }
            })
            .addComponent('you2',{
                bg: page2_jiangbeiCenter,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '41%',
                    left: '75%',
                    zIndex: '90',
                    width: '6.4rem',
                    height: '12rem',
                }
            })
            .addComponent('you1',{
                bg: page1_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '44%',
                    left: '60%',
                    zIndex: '95',
                    width: '7rem',
                    height: '12.8rem'
                }
            })
            .addComponent('text',{
                text: '2015-16赛季NBA总决赛MVP',
                css: {
                    fontSize: '2rem',
                    position: 'absolute',
                    color: '#ffffff',
                    width: '100%',
                    textAlign: 'center',
                    opacity:0,
                    top: '90%'
                },
                animateIn:{opacity:1, top: '78%'},
                animateOut: {opacity:0, top: '100%'},
            })
            .addComponent('home',{
                bg: home,
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick:function () {
                    $.fn.fullpage.moveTo(2);
                }
            })
        .addPage('page3')
            .addComponent('shoe1',{
                bg: page3_shoeqian,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '40%',
                    left: '21%',
                    zIndex: '100',
                    width: '19.1rem',
                    height: '13rem',
                }                
            })
            .addComponent('shoezuo1',{
                bg: page3_shoe_left1,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '40%',
                    left: '7%',
                    zIndex: '95',
                    width: '15rem',
                    height: '14.5rem',
                },
                
                
            })
            .addComponent('shoezuo2',{
                bg: page3_shoe_left2,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '38%',
                    left: '4%',
                    zIndex: '90',
                    width: '15rem',
                    height: '7.8rem',
                }
            })
          .addComponent('shoezuo3',{
                bg: page3_shoe_left3,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '34%',
                    left: '0.1%',
                    zIndex: '85',
                    width: '16.8rem',
                    height: '8rem',
                }
            })
            .addComponent('shoezuo4',{
                bg: page3_shoe_left4,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '31%',
                    left: '0.1%',
                    zIndex: '80',
                    width: '9.5rem',
                    height: '6.45rem',
                }
            })
            .addComponent('shoezuo5',{
                bg: page3_shoe_left5,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '28%',
                    left: '7%',
                    zIndex: '75',
                    width: '7.95rem',
                    height: '5.4rem',
                }
                
            })
            .addComponent('shoezuo6',{
                bg: page3_shoe_left6,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '25%',
                    left: '20%',
                    zIndex: '70',
                    width: '7.15rem',
                    height: '4.85rem',
                }
                
            })
            .addComponent('shoehou',{
                bg: page3_shoehou,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '24%',
                    left: '38%',
                    zIndex: '65',
                    width: '6.7rem',
                    height: '4.5rem',
                }
            })
          .addComponent('shoeyou6',{
                bg: page3_shoe_right6,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '24%',
                    left: '50%',
                    zIndex: '70',
                    width: '7.15rem',
                    height: '4.85rem',
                }
            })
         .addComponent('shoeyou5',{
                bg: page3_shoe_right5,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '25%',
                    left: '60%',
                    zIndex: '75',
                    width: '7.95rem',
                    height: '5.4rem',
                },                               
            })
            .addComponent('shoeyou4',{
                bg: page3_shoe_right4,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '26.5%',
                    left: '66%',
                    zIndex: '80',
                    width: '9.45rem',
                    height: '6.45rem',
                }
            })
            .addComponent('shoeyou3',{
                bg: page3_shoe_right3,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '30%',
                    left: '63%',
                    zIndex: '85',
                    width: '11.75rem',
                    height: '8rem',
                }
            })
            .addComponent('shoeyou2',{
                bg: page3_shoe_right2,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '35%',
                    left: '65%',
                    zIndex: '90',
                    width: '15rem',
                    height: '7.8rem',
                }
            })
            .addComponent('shoeyou1',{
                bg: page3_shoe_right1,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '38%',
                    left: '48%',
                    zIndex: '95',
                    width: '15rem',
                    height: '14.5rem',
                }
            })
            .addComponent('text',{
                text: '2003 NIKE AIR ZOOM GENERATION',
                css: {
                    fontSize: '2rem',
                    position: 'absolute',
                    width: '100%',
                    color: 'white',
                    textAlign: 'center',
                    //padding:'0 1rem',
                    top: '75%',
                    opacity:0
                },
                animateIn:{opacity:1, top: '75%'},
                animateOut: {opacity:0, top: '100%'},
            })
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion1')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion2')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion3')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion4')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion5')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion6')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion7')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion8')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion9')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion10')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion11')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion12')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion13')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion14')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion15')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion16')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion17')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion18')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion19')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion20')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion21')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion22')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion23')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion24')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion25')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion26')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
        .addPage('illusion27')
            .addComponent('home',{
                bg: home,                
                css: {
                    position: 'absolute',
                    backgroundSize: 'contain',
                    height: '4.6rem',
                    width: '4.6rem',
                    marginLeft: '-2.3rem',
                    left: '50%',
                    bottom:'5%'
                },
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })

    .loader();
    rotate();
    rotateshoe();

});

