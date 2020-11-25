$(function () {
    function chose() {
        if (num === 2 || num === 3) {
            $('.slider_bar1').children('li').eq(3).siblings().css('color', '#000')
            $('.slider_bar1').children('li').eq(3).css('color', '#fff')
        } else if (num === 6 || num === 7) {
            $('.slider_bar1').children('li').eq(6).siblings().css('color', '#000')
            $('.slider_bar1').children('li').eq(6).css('color', '#fff')
        } else if (num === 1) {
            $('.slider_bar1').children('li').eq(2).siblings().css('color', '#000')
            $('.slider_bar1').children('li').eq(2).css('color', '#fff')
        } else if (num === 4) {
            $('.slider_bar1').children('li').eq(4).siblings().css('color', '#000')
            $('.slider_bar1').children('li').eq(4).css('color', '#fff')
        } else if (num === 5) {
            $('.slider_bar1').children('li').eq(5).siblings().css('color', '#000')
            $('.slider_bar1').children('li').eq(5).css('color', '#fff')
        } else if (num === 0) {
            $('.slider_bar1').children('li').eq(1).siblings().css('color', '#000')
            $('.slider_bar1').children('li').eq(1).css('color', '#fff')
        }
    }
    var num = 0
    var lastClickTime = new Date().getTime()
    var delay = 600
    $("#myCarousel").carousel('pause')
    $('#next').click(function () {
        if(new Date().getTime()-lastClickTime < delay){
            return
        }
        lastClickTime = new Date().getTime()
        console.log(lastClickTime);
        console.log(new Date().getTime());
        num += 1
        console.log(num);
        if (num === 8) {
            num = 0
        }
        chose()
    })
    $('#back').click(function () {
        if(new Date().getTime()-lastClickTime < delay){
            return
        }
        lastClickTime = new Date().getTime()
        if (num === 0) {
            num = 8
        }
        num -= 1
        chose()
       
    })
    $(".lis0").click(function(){
        $("#myCarousel").carousel(0);
        num = 0
        chose()
    })
    $(".lis1").click(function(){
        $("#myCarousel").carousel(1);
        num = 1
        chose()
    })
    $(".lis2").click(function(){
        $("#myCarousel").carousel(2);
        num = 2
        chose()
    })
    $(".lis3").click(function(){
        $("#myCarousel").carousel(4);
        num = 4
        chose()
    })
    $(".lis4").click(function(){
        $("#myCarousel").carousel(5);
        num = 5
        chose()
    })
    $(".lis5").click(function(){
        $("#myCarousel").carousel(6);
        num = 6
        chose()
    })
    $('#lis0').click(function(){
        num = 0
        chose()
    })
    $('#lis1').click(function(){
        num = 1
        chose()
    })
    $('#lis2').click(function(){
        num = 2
        chose()
    })
    $('#lis3').click(function(){
        num = 2
        chose()
    })
    $('#lis4').click(function(){
        num = 4
        chose()
    })
    $('#lis5').click(function(){
        num = 5
        chose()
    })
    $('#lis6').click(function(){
        num = 6
        chose()
    })
    $('#lis7').click(function(){
        num = 6
        chose()
    })
})
