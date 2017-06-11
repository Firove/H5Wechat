/**
 * Created by 文利 on 2017/6/11.
 */
export  function animaRight($aDiv,classStr,text,position) {
    if($(classStr+" :animated").length <= 0) {
        let last = position.pop();
        position.unshift(last);

        let lastText = text.pop();
        text.unshift(lastText);
        $(classStr+" .h5_component_name_text:first").text(text[0]);
        $aDiv.each(function (i) {
            $(this).animate({
                zIndex: position[i][4],
                width: position[i][0],
                height: position[i][1],
                left: position[i][2],
                top: position[i][3]
            }, 600, 'linear')
        });
    }
}
export function animaLeft($aDiv,classStr,text,position) {
    if($(classStr+" :animated").length <= 0) {
        let first = position.shift();
        position.push(first);
        let firstText = text.shift();
        text.push(firstText);
        $(classStr+" .h5_component_name_text:first").text(text[0]);
        $aDiv.each(function (i) {
            $(this).animate({
                zIndex: position[i][4],
                width: position[i][0],
                height: position[i][1],
                left: position[i][2],
                top: position[i][3]
            }, 600, 'linear')
        });
    }
}
