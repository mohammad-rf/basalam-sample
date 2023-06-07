
$(function () {
    let megaMenu = $('.mega-menu')
    let megaBtn = $('#mega-btn')
    
    megaBtn.hover( function () {
        megaMenu.css('display','block');
    })
    megaMenu.mouseleave(function(){
        megaMenu.hide(300)
    })

// tab active
    let tabCart = $('.tabs > div')
   
    tabCart.on('click', function () {
        $('.tabs > div > span').removeClass('active')
        $(this).children().addClass('active')

      })
    })
    
 





