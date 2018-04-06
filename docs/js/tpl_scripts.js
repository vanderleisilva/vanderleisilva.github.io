
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

jQuery(document).ready(function(){
    // jQuery.tpl_is_chrome
    $.tpl_is_chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
    $.tpl_is_ie = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
    // Template Mo menu hide
    jQuery.fn.tplMenuHide = function(){
        return this.each(function(){
            $(this)
                .removeClass("shadow-top-down")
                .animate({opacity: 0,top: 120}, 240,"easeOutSine",function(){
                    $(this).hide();
                });
            return true;
        });
    }
    // Template Mo menu show
    jQuery.fn.tplMenuShow = function(){
        return this.each(function(){
            $(this)
                .addClass("shadow-top-down")
                .show()
                .css({opacity: 0,top: 120})
                .animate({opacity: 1,top: 130}, 40,"easeInSine");
            return true;
        });
    }
    // Menu click on plus btn
    $('.show-menu a').on('click', function(e){
        // When nav is visible make nav hide
        if($('nav').is(":visible")){
            $('nav:visible').tplMenuHide();
        // When nav is not visible make nav show
        }else{
            $('nav').tplMenuShow();
        }
        return false;
    });
    // Menu hide when click on any area of document
    $(document).on('click', function(e){
        $('nav:visible').tplMenuHide();
        return true;
    });
    // Menu scroll to.
    $('a.scroll_effect').on('click', function(e){
        target_element = $(this).attr('href');
        scroll_to = $(target_element).offset().top;
        if($(window).scrollTop() != scroll_to && target_element !== undefined){
            // Chrome scroll to calculation and other browser scroll to calculation is different.
            if($.tpl_is_chrome){
                body_scroll_target = scroll_to;
            }else{
                body_scroll_target = $("body").scrollTop()+scroll_to;
            }
            $('html,body').animate({scrollTop:body_scroll_target},1000);
        }
        // If menu is visible hide the nav.
        $('nav:visible').tplMenuHide();
        return false;
    });
    // Javascropt parallax effect config for different browser.
    // Chrome broswer setting
    if($.tpl_is_chrome){
        $("html").attr("style","overflow:auto;");
        $("body").attr("style","overflow:auto;height:auto;");
        $('#tpl_home').parallax("50%", 0.1);
        $('#tpl_about').parallax("50%", 0.1);
    // Non IE broswer setting
    }else if(!$.tpl_is_ie){
        $("html").attr("style","overflow: auto;");
        $("body").attr("style","background: #455a64;overflow: auto;height: auto;");
        $('#tpl_home').parallax("50%", 0.1);
        $('#tpl_about').parallax("50%", 0.1);
    // IE broswer setting
    }else{
        $('#tpl_home').parallax("50%", 0.5);
        $('#tpl_about').parallax("50%", 0.5);
    }
});