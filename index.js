


$(function () {
    let megaMenu = $('.mega-menu')
    let megaBtn = $('#mega-btn')
    megaBtn.hover(
        function () {
        megaMenu.css('display','block');
    }
    )
    megaMenu.mouseleave(function(){
        megaMenu.hide(300)
    })

    const allItem = $('.mega-body-item')
    console.log(allItem);
    allItem.css('font-size','18px')

    const allLi = $('.mega-slider li')
    console.log(allLi);

    let li1 = $('#li-1')
    let item1 = $('#ul-1')
    let li2 = $('#li-2')
    let item2 = $('#ul-2')

    li1.hover(function(){
       
        item1.css('visibility','visible').css('height','auto')
    })

    li2.hover(function(){

        item2.css('visibility','visible').css('height','auto')
    })

})
