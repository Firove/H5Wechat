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
    var page2_jiangbei = require('./src/components/page_2/img/jiangbei.png');
    var home = require('./src/components/page_2/img/home.png');
    var h5 = new H5;
    h5
        .addPage('face')
            .addComponent('face',{
                css: {
                    margin: '0 auto',
                    backgroundSize:'contain',
                    top: '6%'
                },
                width: '568',
                height: '878',
                bg: face0
            })
            .addComponent('go',{
                css: {
                    margin: '15% auto 0 auto',
                    backgroundSize:'contain',

                },
                width: '483',
                height: '101',
                bg: face1
            })
        .addPage('page1')
            .addComponent('guiji',{
                bg: page1_guiji,
                css: {
                    backgroundSize:'100% 100%',
                    top:'50%',
                    marginTop: '-158px',
                },
                width: '100%',
                height: '635',
            })
            .addComponent('xiezi',{
                bg: page1_xiezi,
                width: '479',
                height: '456',
                css: {
                    position: 'absolute',
                    backgroundSize:'contain',
                    top: '42%',
                    right: '0%',
                    zIndex:'10',
                    opacity:0
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
                width: '137',
                height: '182',
                css: {
                    position: 'absolute',
                    backgroundSize:'contain',
                    top: '20%',
                    left: '30%',
                    zIndex:'0',
                    opacity:0
                },
                animateIn:{opacity:1,top: '20%',left: '30%'},
                animateOut: {opacity:0,top: '20%',left: '30%'}
            })
            .addComponent('jiangbei',{
                bg: page1_jiangbei,
                width: '200',
                height: '344',
                css: {
                    position: 'absolute',
                    backgroundSize:'contain',
                    top: '38%',
                    left: '0%',
                    zIndex:'10',
                    opacity:0
                },
                animateIn:{opacity:1, top: '38%',left: '0%',},
                animateOut: {opacity:0, top: '38%',left: '0%',}
            })
            .addComponent('huangguan',{
                bg: page1_huangguan,
                width: '441',
                height: '293',
                css: {
                    position: 'absolute',
                    backgroundSize:'100% 100%',
                    top: '18%',
                    left: '50%',
                    marginLeft: '-110px',
                    zIndex:'3',
                    opacity: 0
                },
                animateIn:{opacity:1, top: '30%'},
                animateOut: {opacity:0, top: '18%'}
            })
        .addPage('page2')
            .addComponent('zhongjian',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '44%',
                    left: '38%',
                    // marginLeft: '-48px',
                    zIndex: '100'

                },
                width: '192',
                height: '328',
            })
            .addComponent('zuo1',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '44%',
                    left: '21%',
                    zIndex: '95'
                },
                width: '140',
                height: '256',
            })
            .addComponent('zuo2',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '41%',
                    left: '8%',
                    zIndex: '90'
                },
                width: '128',
                height: '244',
            })
            .addComponent('zuo3',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '37%',
                    left: '4%',
                    zIndex: '85'
                },
                width: '108',
                height: '200',
            })
            .addComponent('zuo4',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '33%',
                    left: '16%',
                    zIndex: '80'
                },
                width: '86',
                height: '160',
            })
            .addComponent('zuo5',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '31%',
                    left: '29%',
                    zIndex: '75'
                },
                width: '72',
                height: '132',
            })
            .addComponent('zuo6',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '30%',
                    left: '40%',
                    zIndex: '70'
                },
                width: '66',
                height: '122',
            })
            .addComponent('you6',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '30%',
                    right: '40%',
                    zIndex: '70'
                },
                width: '66',
                height: '122',
            })
            .addComponent('you5',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '31%',
                    right: '29%',
                    zIndex: '75'
                },
                width: '72',
                height: '132',
            })
            .addComponent('you4',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '33%',
                    right: '16%',
                    zIndex: '80'
                },
                width: '86',
                height: '160',
            })
            .addComponent('you3',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '37%',
                    right: '4%',
                    zIndex: '85'
                },
                width: '108',
                height: '200',
            })
            .addComponent('you2',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '41%',
                    right: '8%',
                    zIndex: '90'
                },
                width: '128',
                height: '244',
            })
            .addComponent('you1',{
                bg: page2_jiangbei,
                css: {
                    backgroundSize: 'contain',
                    position: 'absolute',
                    top: '44%',
                    right: '21%',
                    zIndex: '95'
                },
                width: '140',
                height: '256',
            })
            .addComponent('text',{
                text: '2015-2016赛季NBA总冠军',
                css: {
                    fontSize: '1.3em',
                    position: 'relative',
                    color: 'white',
                    textAlign: 'center',
                    top: '78%'
                }
            })
            .addComponent('home',{
                bg: home,
                height: '92',
                width: '92',
                css: {
                    position: 'relative',
                    backgroundSize: 'contain',
                    margin: '0 auto',
                    top:'83%'
                }
            })
    .loader(3);
    rotate();//

});

