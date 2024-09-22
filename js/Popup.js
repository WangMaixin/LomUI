var BackgroundColor = $('body').css('background-color');
// console.log(BackgroundColor);
if(BackgroundColor == 'rgba(0, 0, 0, 0)') {
    $('.pop_container').css('background-color','#f5f5f5');
}
// 针对纯白页面的适应


function toggle() {
    var blur = document.getElementById('popup');
    blur.classList.toggle('active');
    setTimeout(function() {
        var blur = document.getElementById('popup');
        blur.classList.toggle('active');
    },3000);
    
}
//此函数使用必须传参