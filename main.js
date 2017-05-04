/**
 * Created by 文利 on 2017/4/26.
 */
// import lunbo from './src/components/lunbo/lunbo.js';
// import './src/components/lunbo/lunbo.less';
import $ from 'jquery';
import 'jquery-ui';
import H5 from './src/common/js/H5.js';
import './src/common/style/H5.css';
import './src/common/style/H5ComponentBase.css';
window.jQuery = window.$ = require('jquery');

import './src/components/face/style/face.less';
import './src/components/page_1/style/page1.less';
$(function(){
    var face0 = require('./src/components/face/img/face.png');
    var face1 = require('./src/components/face/img/face_in.png');

    var page1_guiji = require('./src/components/page_1/img/guiji.png');
    var page1_xiezi = require('./src/components/page_1/img/xiezi.png');
    var page1_yiner = require('./src/components/page_1/img/yiner.png');
    var page1_jiangbei = require('./src/components/page_1/img/jiangbei.png');
    var page1_huangguan = require('./src/components/page_1/img/huangguan.png');
    var h5 = new H5;
    h5
        .addPage('face')
            .addComponent('bg',{
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
                    marginTop: '-158px'
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
                    backgroundSize:'100% 100%',
                    top: '42%',
                    left: '34%',
                    zIndex:'10'
                },
             })
            .addComponent('yinger',{
                bg: page1_yiner,
                width: '137',
                height: '182',
                css: {
                    position: 'absolute',
                    backgroundSize:'100% 100%',
                    top: '20%',
                    left: '30%',
                    zIndex:'0'
                },
            })
            .addComponent('jiangbei',{
                bg: page1_jiangbei,
                width: '200',
                height: '344',
                css: {
                    position: 'absolute',
                    backgroundSize:'100% 100%',
                    top: '38%',
                    left: '0%',
                    zIndex:'10'
                },
            })
            .addComponent('huangguan',{
                bg: page1_huangguan,
                width: '441',
                height: '293',
                css: {
                    position: 'absolute',
                    backgroundSize:'100% 100%',
                    top: '28%',
                    left: '25%',
                    zIndex:'5'
                },
            })
    .loader();
});

