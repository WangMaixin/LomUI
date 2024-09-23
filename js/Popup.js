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



/*
* Last edit time: 2024-9-22 22:30
* Module: LomUI Framework Layer
* Auther: WangMaixin
*/
function Eject(popText) { // 文字弹出框
    var message = '';

    var a = popText;
    a = (a == undefined ? false : a);
    a == false ? LomError('[LomUI]Please check the parameters') : a;

    popupHTMLCode();
    // var popHTML = '<div class="pop_container" id="popup"><p class="popText" id="popupText">未配合参数使用!</p></div>';
    // document.body.innerHTML += popHTML;
    setTimeout(function() { // 这个计时器是为了等待弹出层HTML代码添加至body内
        
        var blur = document.getElementById('popup');
        var popupText = document.getElementById('popupText');

        popupText.innerText = popText;

        // classList.toggle用于在元素中添加一个类名
        blur.classList.toggle('active');
        // 计时器
        setTimeout(function() {
            var blur = document.getElementById('popup');
            blur.classList.toggle('active'); // CSS提供的动画支持
        },3000);
    },10);

    message = true;
    

    //优化建议
    //1.更加便捷的调用，HTML只需要输入方法就可以调用，无需添加HTML代码[2024-9-23完成]
    //2.针对开发者传入的参数进行过滤，防止错误类型的数据进入此方法

    // 使用方法
    // 基础参数
    //  Text：弹出层内容
    // 调用方法
    // Eject([Text]);
    // 提示
    // 此方法必须传参使用，未传参可能会产生错误信息


    return message;
}

