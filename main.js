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
$(function(){
    var h5 = new H5;
    h5
        .addPage('face')
            .addComponent('bg',{
                text: 'face'
            })
        .addPage('face')
            .addComponent('bg',{
                text: 'face'
            })
    .loader();
});

