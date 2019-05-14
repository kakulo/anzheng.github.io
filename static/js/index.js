(function($){
    $(function(){

        
        //ie < 8
        var html = $('html');
        var update =  '<div class="update-plz">'+
                            '<div class="e-wrapper">'+
                                '<div class="e-wow">Oh,your browser is too old,please update to improve your experience！</div>'+
                                '<div class="e-rec">see below:</div>'+
                                '<div class="e-list">'+
                                    '<a class="t-link" target="_blank" href="http://www.google.cn/chrome/browser/"><i class="i-ico s-chrome"></i><span class="t-txt">chrome</span></a>'+
                                    '<a class="t-link" target="_blank" href="http://www.firefox.com.cn/download/"><i class="i-ico s-firefox"></i><span class="t-txt">firefox</span></a>'+
                                    '<a class="t-link" target="_blank" href="http://windows.microsoft.com/zh-cn/internet-explorer/download-ie"><i class="i-ico s-ie"></i><span class="t-txt">ie8+</span></a>'+
                                    '<a class="t-link" target="_blank" href="http://www.opera.com/zh-cn"><i class="i-ico s-opera"></i><span class="t-txt">opera</span></a>'+
                                    '<a class="t-link" target="_blank" href="https://www.apple.com/cn/safari/"><i class="i-ico s-safari"></i><span class="t-txt">safari</span></a>'+
                                '</div>'+
                            '</div>'+
                    '</div>';
        
        if(html.hasClass('no-hashchange')){
            $('body').append($(update));
            return;
        }


        //移除加载动画
        (function(){
            var loader = $('#loader');

            setTimeout(function(){

                loader.fadeOut(200,function(){
                    loader.remove();
                });

            },1000);
            
            
        })();

        //导航渐变
        (function(){
            var nav = $('#js-g-nav');
            var win = $(window);
            var point = 632;

            function changeNav() {
                var top = win.scrollTop();
                var percent = top / point;
                nav.css({
                    background: 'rgba(0,0,0,' + percent + ')'
                });


                if (top > point / 2) {
                    nav.addClass('is-reverse');
                } else {
                    nav.removeClass('is-reverse');
                }

                if(html.hasClass('no-canvas')){
                    nav.css({
                        background: '#000'
                    });
                }

            }

            win.on('scroll', changeNav);
            changeNav();
        })();


        //手机端导航
        (function(){
            var menu = $('.m-menu');
            var nav = $('.m-nav');
            var shadow = $('.m-shadow');
            menu.click(function(){
                nav.addClass('is-open');
                shadow.show();
            });

            shadow.click(function(){
                shadow.hide();
                nav.removeClass('is-open');
            });
        })();


        //导航锚点
        (function(){
            $('#js-g-nav,#js-m-nav').find('a[href^="#"]').click(function(e) {
                e.preventDefault();
                $(window).stop(true).scrollTo(this.hash, {
                    duration:1000, 
                    interrupt:true,
                    offset:{
                        top:-100
                    }
                });
            });
        })();


        //触发动画
        (function(){

            if(html.hasClass('no-canvas')){
                return;
            }

            window.sr = ScrollReveal();

            if(sr.isSupported()){
                sr.reveal('.reveal-master',{reset:true});
                sr.reveal('.reveal-news',{reset:true});
                sr.reveal('.reveal-achieve',{reset:true});
                sr.reveal('.reveal-public',{reset:true});
                sr.reveal('.reveal-project',{reset:true});
                sr.reveal('.reveal-education',{reset:true});
                sr.reveal('.reveal-activity',{reset:true});
                sr.reveal('.reveal-line',{reset:true});
                sr.reveal('.reveal-reference',{reset:true});
                sr.reveal('.reveal-affiliation',{reset:true});
                sr.reveal('.reveal-contact',{reset:true});
                sr.reveal('.reveal-touch',{reset:true});
                sr.reveal('.reveal-copyright',{reset:true});
            }
            
        })();


        //回到顶部
        (function(){
            var toTop = $('<div class="top-up"><i class="icon-up"></i></div>');
            var body = $('body');
            var win = $(window);
            win.on('scroll',function(){
                var top = $(this).scrollTop();
                if(top > 200){
                    body.append(toTop);

                }else{
                    toTop.remove();
                }
            });

            body.on('click','.top-up',function(){
                $(window).scrollTo(0);
            });

        })();



        //弹出
        $('.js-bibtex').click(function(){
            var that = $(this);
            layer.open({
                content:that.next().clone().show().prop('outerHTML'),
                btn:'close',
                title:'Code'
            });
        });
        

        //project
        (function(){
            $('.js-view-project').click(function(){
                var that = $(this);
                var pane = that.next();
                pane.fadeIn(200);
            });

            $('.js-close-project').click(function(){
                var that = $(this);
                var pane = that.parent();
                pane.fadeOut(200);
            });
        })();


        (function(){

            if(html.hasClass('touch')){
                return;
            }

            var Scene3D = {
                background: $("#js-scene-background"),
                avatar: $("#js-scene-avatar"),
                maxWidth: $(window).width(),
                maxHeight: $(window).height(),
                move: function(layer, x, y) {
                    layer.css("transform", "translate3d(" + x + "px, " + y + "px, 0)");
                }
            };

            $(window).on("resize", function() {

                Scene3D.maxWidth = $(window).width();
                Scene3D.maxHeight = $(window).height();

            }).on("mousemove", function(event) {

                eventX = event.pageX;
                eventY = event.pageY;
                percentX = (eventX - Scene3D.maxWidth / 2) / Scene3D.maxWidth;
                percentY = (eventY - Scene3D.maxHeight / 2) / Scene3D.maxHeight;

                Scene3D.move(Scene3D.background, percentX * 40, percentY * 15);
                Scene3D.move(Scene3D.avatar, percentX * 100, percentY * 40);
                

            });

        })();
    });
})(jQuery);