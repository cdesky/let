 //导航条滚动
     var all_width = document.getElementsByClassName('category_nav')[0].scrollWidth
     $('.category_nav').css({
         'width':all_width + 'px'
     })
     var myscroll=new iScroll("wrapper",{
         scrollX: true,
         scrollY: false,
         hScrollbar:false,
         vScrollbar : false,
         vScroll:false
     })

     //导航条滚动 隐藏显示二级菜单
     $(document).ready(function(){
         $("li.one").click(function(){
            $(".nav_fix").toggle();
            $("ul.one1").toggle();
         });
     })
     $(document).ready(function(){
         $("li.two").click(function(){
            $(".nav_fix").toggle();
            $("ul.two1").toggle();
         });
     })
     $(document).ready(function(){
         $("li.three").click(function(){
            $(".nav_fix").toggle();
            $("ul.three1").toggle();
         });
     })
     //导航条滚动 隐藏显示二级菜单
