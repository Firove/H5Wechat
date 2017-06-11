/**
 * Created by 文利 on 2017/4/26.
 */
import $ from 'jquery';
import 'jquery-ui';
import H5 from './src/common/js/H5.js';
import './src/common/style/H5.css';
import './src/common/style/base.css';
import './src/common/style/H5ComponentBase.css';
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

$(function(){
    var face0 = require('./src/components/face/img/face.png');
    var face1 = require('./src/components/face/img/face_in.png');

    var page1_guiji = require('./src/components/page_1/img/guiji.png');
    var page1_xiezi = require('./src/components/page_1/img/xiezi.png');
    var page1_yiner = require('./src/components/page_1/img/yiner.png');
    var page1_jiangbei = require('./src/components/page_1/img/jiangbei.png');
    var page1_huangguan = require('./src/components/page_1/img/huangguan.png');
    var page2_jiangbei = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_left1 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_left2 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_left3 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_left4 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_left5 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_left6 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_right6 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_right5 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_right4 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_right3 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_right2 = require('./src/components/page_2/img/jb_left1.png');
    var page2_jb_right1 = require('./src/components/page_2/img/jb_left1.png');

    var page3_shoe1 = require('./src/components/page_3/img/shoe0.png');
    var page3_shoe_left1 = require('./src/components/page_3/img/shoe-left-1.png');
    var page3_shoe_left2 = require('./src/components/page_3/img/shoe-left-2.png');
    var page3_shoe_left3 = require('./src/components/page_3/img/shoe-left-3.png');
    var page3_shoe_left4 = require('./src/components/page_3/img/shoe-left-4.png');
    var page3_shoe_left5 = require('./src/components/page_3/img/shoe-left-5.png');
    var page3_shoe_left6 = require('./src/components/page_3/img/shoe-left-6.png');
    var page3_shoe_right6 = require('./src/components/page_3/img/shoe-right-6.png');
    var page3_shoe_right5 = require('./src/components/page_3/img/shoe-right-5.png');
    var page3_shoe_right4 = require('./src/components/page_3/img/shoe-right-4.png');
    var page3_shoe_right3 = require('./src/components/page_3/img/shoe-right-3.png');
    var page3_shoe_right2 = require('./src/components/page_3/img/shoe-right-2.png');
    var page3_shoe_right1 = require('./src/components/page_3/img/shoe-right-1.png');
    var page3_shoe14 = require('./src/components/page_3/img/shoe14.png');

    var home = require('./src/components/page_2/img/home.png');
    var back = require('./src/components/page_3/img/back.png');
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
                animateOut: {opacity:0,top: '20%',left: '30%'}
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
                    marginLeft: '-110px',
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
                bg: page2_jiangbei,
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
                bg: page2_jb_left3,
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
                bg: page2_jb_left5,
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
                bg: page2_jb_left6,
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
                bg: page2_jb_right6,
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
                bg: page2_jb_right5,
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
                bg: page2_jb_right4,
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
                bg: page2_jb_right3,
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
                bg: page2_jb_right2,
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
                bg: page2_jb_right1,
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
                text: '2015-2016赛季NBA总冠军1',
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
                bg: page3_shoe1,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '42%',
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
                    top: '39%',
                    left: '7%',
                    zIndex: '95',
                    width: '17.2rem',
                    height: '16.7rem',
                },
                
                
            })
            .addComponent('shoezuo2',{
                bg: page3_shoe_left2,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '36%',
                    left: '1%',
                    zIndex: '90',
                    width: '19.1rem',
                    height: '9.95rem',
                }
            })
          .addComponent('shoezuo3',{
                bg: page3_shoe_left3,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '33%',
                    left: '-3%',
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
                    top: '30%',
                    left: '-1%',
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
                    top: '27%',
                    left: '8%',
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
                    left: '22%',
                    zIndex: '70',
                    width: '7.15rem',
                    height: '4.85rem',
                }
                
            })
            .addComponent('shoehou',{
                bg: page3_shoe14,
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
                    top: '27%',
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
                    left: '65%',
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
                    top: '33%',
                    left: '57.5%',
                    zIndex: '90',
                    width: '19.1rem',
                    height: '9.95rem',
                }
            })
            .addComponent('shoeyou1',{
                bg: page3_shoe_right1,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '38%',
                    left: '47%',
                    zIndex: '95',
                    width: '17.2rem',
                    height: '16.7rem',
                }
            })
            
            .addComponent('text',{
                text: '2003 NIKE ZOOM GENERATION',
                css: {
                    fontSize: '3.2em',
                    position: 'absolute',
                    width: '100%',
                    color: 'white',
                    textAlign: 'center',
                    top: '90%',
                    opacity:0
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
                onclick : function(){
                         $.fn.fullpage.moveTo(2)
                    }
            })
    .loader(4);
    rotate();
    rotateshoe();

});

