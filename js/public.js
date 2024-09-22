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

// 默认函数
function LomError(Text) {
    // 如果Text的内容为undefined则是前面的变量否则是后面的变量
    // 三元表达式
    Text = (Text == undefined ? '[LomUI]Please check the parameters' : Text);
    // 手动抛出异常
    throw new Error(Text);
    
    return;
}

