
const shoppingCart = document.getElementById('shopping-cart');


let basket = JSON.parse(localStorage.getItem('data')) || [];





const generateShoppingCart = () => {

    if (basket.length === 0) {
        shoppingCart.innerHTML =
            `<div class="cart-empty ">
                <div class="container mx-auto pt-4 pt-lg-5 mb-4 mb-lg-5 text-center">
                    <img class="mb-3 w-100"
                        src="https://statics.basalam.com/public-2/admin/67gZL/04-30/zODlVbCzBSQxemJBFTwtA9dPd8txNdMd43cCvnIiTIKbIrZVBc.SVG"
                        alt="">
                    <span class="d-block mb-3">سبد خرید شما خالی‌ست! </span>
                    <p class="fs-6 text-secondary">انگار هنوز چیزی به سبد خریدتان اضافه نکرده‌اید.</p>
                </div>
            </div> `
    }
    else {
        shoppingCart.innerHTML =
            basket.map((x) => {
                let search = shopItemData.find((y) => y.id === x.id) || [];
                return `
            <div class="cart-item mt-1">
            <div class="container-fluid p-0 mt-1">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span>ازغرفه</span>
                <span>یک کالا</span>
            </div>
            <div class="d-flex pt-3">
                <a class="me-3" href="">
                    <img src="${search.img}"
                        alt="">
                </a>
                <div class="w-100 d-flex flex-column justify-content-between">
                    <div class="d-flex justify-content-between align-items-center">
                        <a class="text-black fw-bold" href="">
                        ${search.title}
                            </a>
                        <div>
                            <button class="btn text-black fw-bold d-flex align-items-center">
                                سبدخریدبعدی
                                <i class="fa-solid fa-angle-left ms-1"></i>
                            </button>
                        </div>
                    </div>
                    <!-- pluse minuse and price off price -->
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <div class="d-flex align-items-center">
                                <div class="pluse-minuse me-3 p-1 rounded-1">
                                    <i onclick="increment(${x.id})" class="fa-solid fa-plus fs-5 text-secondary"></i>
                                    <span id="${x.id}" class="quantity mx-1 fs-6">
                                        ${x.item} </span>
                                    <i onclick="decrement(${x.id})" class="fa-solid fa-minus fs-5 text-secondary"></i>
                                </div>
                                <i onclick="trash(${x.id})" class="fa-regular fa-trash-can fs-5"></i>
                            </div>
                            <div></div>
                        </div>
                        <div class="card-price">
                            <span id="item-price" class="fw-bold fs-5">${search.price * x.item}</span>
                            <span class="text-secondary">تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>`
            }).join('')

    }
}

generateShoppingCart()

const increment = (id) => {
    let selectedItem = id;
    let search = basket.find((X) => selectedItem.id === X.id)
    // because basket array is refrense type when we change the object of bassket (search ) ==>basket arr will change too
    search.item++


    generateShoppingCart();
    generatePriceDetails();
    update(selectedItem.id);
    localStorage.setItem('data', JSON.stringify(basket))
}
const decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((X) => selectedItem.id === X.id)

    if (search.item === 0) return
    else search.item--;
    ;

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0)
    generateShoppingCart();
    generatePriceDetails();
    localStorage.setItem('data', JSON.stringify(basket))
}
const trash = (id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id)

    generatePriceDetails();
    generateShoppingCart();
    localStorage.setItem('data', JSON.stringify(basket));
    calculation();
}
const update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;

    calculation();
    
}    





// shop price details second part of cart 

const generatePriceDetails = () => {
    const priceDetails = document.getElementById('price-details-wrapper');
    
    
    if (basket.length !== 0) {
            let a= $('#cart-wrapper').addClass('col-lg-8')
            let amount = basket
            .map((x) => {
              let filterData = shopItemData.find((y) => y.id === x.id );  
              return filterData.price * x.item;
            })  
            .reduce((x, y) => x + y, 0);
            return(priceDetails.innerHTML=
                `
                            <div class="shopping-details ">
                                                <div  class="price-details">
                                                    <p class="fw-bold">جزئیات قیمت</p>
                                                    <div>
                                                        <span>قیمت محصولات:</span>
                                                        <span class="fw-bold">${amount}</span>
                                                    </div>    
                                                    <!-- تخفیف کحصولات که خالی هست فعلا -->
                                                    <div class="off-product">
                                                        <span>(-) تخفیف محصولات:</span>
                                                        <span>0</span>
                                                    </div>    
                                                    <hr>
                                                    <div>
                                                        <span>هزینه ارسال (از 1 غرفه)</span>
                                                        <span>وابسته به آدرس</span>
                                                    </div>    
                                                    <hr>
                                                    <div class="fw-bolder ">
                                                        <span>مبلغ قابل پرداخت</span>
                                                        <span>${amount}</span>
                                                    </div>    
                                                    <button class="btn px-3">
                                                        تایید و وارد کردن آدرس
                                                    </button>    
                                                    <div class="mt-3 mb-0">
                                                        <span class="me-2"><i class="fa-solid fa-check"></i></span>
                                                        تسویه با غرفه‌دار فقط بعد از رضایت مشتری
                                                    </div>    
                                                </div>    
                                            </div>`);     
        
        } else return;                                    
    

  


};        

generatePriceDetails();

