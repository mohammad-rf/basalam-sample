
$(function () {
    let megaMenu = $('.mega-menu')
    let megaBtn = $('#mega-btn')



    megaBtn.hover( function () {
        megaMenu.css('display','block');
    }
   
    )

    megaMenu.mouseleave(function(){
        megaMenu.hide(300)
    })

})
