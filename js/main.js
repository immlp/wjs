/**
 * Created by jack on 2018/10/7.
 */
'use strict';

$(function(){


    /**/
    function resize(){
        var isLargeScreen = $(window).width() > 768;

        var $items = $('#home_slide>.carousel-inner>.item');
        for(var i = 0; i< $items.length; i++){
            var $item=$($items[i]);

            var imgSrc = isLargeScreen ? $item.data('image-large') : $item.data('image-small');
            var imgAlt = $item.data('image-alt');


            $item.css('background-image','url('+$item.data('image-large')+')');//大屏幕时显示，小屏幕时隐藏
            $item.html('<img src="'+imgSrc+'" alt="'+imgAlt+'">');//小屏幕时显示，大屏幕时隐藏


            //console.log($item[i].data('image-large'));
            //$item[0].style.backgroundImage=
        }
    }
    $(window).on('resize',function(){
        resize();
        console.log(window.innerWidth);
    }).trigger('resize');


});