/** .-------------------------------------------------------------------
 * |  Software: [Sofnet LomUI Framework]
 * |-------------------------------------------------------------------
 * |  Author: 王迈新
 * |  Copyright (c) 2024, www.iorouter.online. All Rights Reserved.
 * '-------------------------------------------------------------------*/



var BackgroundColor = $('body').css('background-color');
// console.log(BackgroundColor);
if(BackgroundColor == 'rgba(0, 0, 0, 0)') {
    $('.pop_container').css('background-color','#f5f5f5');
}
// 针对纯白页面的适配


function Eject(popText) { // 弹出层
    var a = popText;
    a = (a == undefined ? false : a);
    a == false ? LomError('[LomUI]Please check the parameters') : a;
    var blur = document.getElementById('popup');
    var popupText = document.getElementById('popupText');
    popupText.innerText = popText;
    // classList.toggle用于在元素中添加一个类名
    blur.classList.toggle('active');
    // 计时器
    setTimeout(function() {
        var blur = document.getElementById('popup');
        blur.classList.toggle('active');
    },3000);
    
}
//此函数使用必须传参
