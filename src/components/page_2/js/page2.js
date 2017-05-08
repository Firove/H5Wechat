/**
 * Created by 文利 on 2017/5/4.
 */
export default rotate;
function rotate() {
    const position = [];
    let $aDiv = $('.h5_page_page2 .h5_component:lt(13)');
    $aDiv.each(function(i){
        position.push([$(this).width() , $(this).height() , $(this).css('left') , $(this).css('top'),$(this).css('zIndex')]);
    });
    $('.h5_page_page2').click(anima);
    function anima() {
        let num = 0;
        // let dtd = $.Deferred();
        // let complete = function(){
        //     num ++;
        //     if(num >= $aDiv.length){
        //         dtd.resolve();
        //     }
        // };
        let last = position.pop();
        position.unshift(last);
        $aDiv.each(function (i) {
            $(this).animate({
                width: position[i][0],
                height: position[i][1],
                left: position[i][2],
                top: position[i][3],
                zIndex: position[i][4]
            },600,'linear')
        });
        // return dtd.promise();
    }
}