


$(function () {
    let megaMenu = $('.mega-menu')
    let megaBtn = $('#mega-btn')


   

    megaBtn.hover(
        function () {
        megaMenu.css('display','block');
    },
    // function(){

    //     megaMenu.mouseleave().css('display','none')
    // }
    )

    megaMenu.mouseleave(function(){
        megaMenu.hide(300)
    })


})
