/** .-------------------------------------------------------------------
 * |  Software: [Sofnet LomUI Framework]
 * |-------------------------------------------------------------------
 * |  Author: 王迈新
 * |  Copyright (c) 2024, www.iorouter.online. All Rights Reserved.
 * '-------------------------------------------------------------------*/



const lomyer = {


    /*
    * Last edit time: 2024-9-25 21:08
    * Module: LomUI Framework Layer
    * Auther: WangMaixin
    */
    msg: function(popText) {

        var message = '';

        // 针对纯白页面的适配
        var BackgroundColor = $('body').css('background-color');
        // console.log(BackgroundColor);
        if(BackgroundColor == 'rgba(0, 0, 0, 0)') {
            $('.pop_container').css('background-color','#f5f5f5');
        }

        var a = popText;
        a = (a == undefined ? false : a);
        a == false ? LomError('[LomUI]Please check the parameters') : a;
    
        popupHTMLCode();

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
            // 删除HTML代码
            setTimeout(function() {
                document.getElementById('popup').remove();
            },4000);
        },10);
    
        message = true;
        
    
        //优化建议
        //1.更加便捷的调用，HTML只需要输入方法就可以调用，无需添加HTML代码[2024-9-23完成]
        //2.针对开发者传入的参数进行过滤，防止错误类型的数据进入此方法
    
        // 使用方法
        // 基础参数
        //  content：弹出层内容
        // 调用方法
        // lomyer.msg([content]);
        // 提示
        // 此方法必须传参使用，未传参可能会产生错误信息
    
    
        return message;
    }




}





