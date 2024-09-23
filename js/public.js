/** .-------------------------------------------------------------------
 * |  Software: [Sofnet LomUI Framework]
 * |-------------------------------------------------------------------
 * |  Author: 王迈新
 * |  Copyright (c) 2024, www.iorouter.online. All Rights Reserved.
 * '-------------------------------------------------------------------*/


$("#minit_input").on("click",function (){
var focus = document.getElementById('minit_input');
    focus.classList.toggle('active');
    setTimeout(function() {
        var focus = document.getElementById('minit_input');
        focus.classList.toggle('active');
    },200);   // input表单点击缩放事件
})
// input表单点击缩放
$("#minit_btn").on("click",function (){
    var focus = document.getElementById('minit_btn');
    focus.classList.toggle('active');
    setTimeout(function() {
        var focus = document.getElementById('minit_btn');
        focus.classList.toggle('active');
    },200);   // input表单点击缩放事件
})
// input表单点击缩放




// Default function
/*
* Last edit time: 2024-9-23 21:03
* Module: ErrorConsoleOutput
* Auther: WangMaixin
*/
function LomError(Text) {

    // 如果Text的内容为undefined则是前面的变量否则是后面的变量
    // 三元表达式
    Text = (Text == undefined ? '[LomUI]Please check the parameters' : Text);
    // 手动抛出异常
    throw new Error(Text);
    
    return;
}



/*
* Last edit time: 2024-9-23 21:04
* Module: LayerHTMLCode
* Auther: WangMaixin
*/
function popupHTMLCode() {
    var popHTML = '<div class="pop_container" id="popup"><p class="popText" id="popupText">未配合参数使用!</p></div>';
    
    // 后续版本的代码应注意少使用innerHTML，大量的innerHTML会影响程序性能
    document.body.innerHTML += popHTML;

    return;
}

