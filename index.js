
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
    

    // number in cart icon
     basket = JSON.parse(localStorage.getItem('data')) || [];


    let calculation = () => {
        let cartIcon = document.getElementById("total-amount-wrapper");
        let amount =  basket.map((x) => x.item).reduce((x, y) => x + y, 0)

        if(amount !== 0){
            cartIcon.innerHTML = `<span class="badge position-absolute rounded-0 transl">${amount}</span>`;
        }
        else return;
       
      };
    
    calculation();



    // search filter

    // function myFunction() {
        
    //     let input, filter, ul, li, a, i, txtValue;
    //     input = document.getElementById('my-input');
    //     filter = input.value.toUpperCase();
    //     ul = document.getElementById("my-ul");
    //     li = ul.getElementsByTagName('li');
      
    //     for (i = 0; i < li.length; i++) {
    //       a = li[i].getElementsByTagName("a")[0];
    //       txtValue = a.textContent || a.innerText;
    //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "block";
    //       } else {
    //         li[i].style.display = "none";
    //       }
    //     }
    //   }
    






