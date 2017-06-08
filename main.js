/**
 * Created by 文利 on 2017/4/26.
 */
// import lunbo from './src/components/lunbo/lunbo.js';
// import './src/components/lunbo/lunbo.less';
import $ from 'jquery';
import 'jquery-ui';
import H5 from './src/common/js/H5.js';
import './src/common/style/H5.css';
import './src/common/style/base.css';
import './src/common/style/H5ComponentBase.css';
import rotate from './src/components/page_2/js/page2.js';
import './src/common/style/detail.less';

window.jQuery = window.$ = require('jquery');
import './src/components/face/style/face.less';
import './src/components/page_1/style/page1.less';
import './src/components/page_2/style/page2.less';

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
    var home = require('./src/components/page_2/img/home.png');
    var h5 = new H5;
    h5
        .addPage('face')
            .addComponent('face',{
                css: {
                    margin: '0 auto',
                    backgroundSize:'contain',
                    top: '6%',
                    width:'28rem',
                    height: '44rem'
                },
                bg: face0
            })
            .addComponent('go',{
                css: {
                    margin: '15% auto 0 auto',
                    backgroundSize:'contain',
                    width:'24rem',
                    height: '5rem'
                },
                bg: face1
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
                animateOut: {opacity:0,top: '42%', right: '0%',}
             })
            // .addComponent('empty',{
            //     width: '137',
            //     height: '182',
            //     css: {
            //         position: 'absolute',
            //         top: '25%',
            //         right: '10%',
            //         zIndex:'10'
            //     },
            // })
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
                    position: 'relative',
                    color: '#ffffff',
                    textAlign: 'center',
                    top: '78%'
                }
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
    .loader(3);
    rotate();//

});

