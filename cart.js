
let shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem('data')) || [];


let generateShoppingCart = () => {

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
                let { id, img, title, price,item } = search
                return `
            <div class="cart-item mt-1">
            <div class="container-fluid p-0 mt-1">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span>ازغرفه</span>
                <span>یک کالا</span>
            </div>
            <div class="d-flex pt-3">
                <a class="me-3" href="">
                    <img src="${img}"
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
                                    <i onclick="increment(${id})" class="fa-solid fa-plus fs-5 text-secondary"></i>
                                    <span id="${id}" class="quantity mx-1 fs-6">
                                        1 </span>
                                    <i onclick="decrement(${id})" class="fa-solid fa-minus fs-5 text-secondary"></i>
                                </div>
                                <i onclick="trash(${id})" class="fa-regular fa-trash-can fs-5"></i>
                            </div>
                            <div></div>
                        </div>
                        <div class="card-price">
                            <span id="item-price" class="fw-bold fs-5">${search.price}</span>
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


for (let i = 0; i < basket.length; i++) {
    basket[i].item = 1
}

const increment = (id) => {
    let selectedItem = id;
    let search = basket.find((X) => selectedItem.id === X.id)
    // because basket array is refrense type when we change the object of bassket (search ) ==>basket arr will change too
    console.log('increment for = '+ selectedItem.id  );


    search.item++
    // update(selectedItem.id);
    generateShoppingCart()


    // wee

    document.getElementById(selectedItem.id ).innerHTML=search.item;

// fyfyy


    localStorage.setItem('data', JSON.stringify(basket))
    
}


const decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((X) => selectedItem.id === X.id)

    search.item--
    if (search.item === 0) {
        basket = basket.filter((x) => x.item !== 0)
    }
     else return
    // console.log(search.item);

    update(selectedItem.id);
    generateShoppingCart()
    localStorage.setItem('data', JSON.stringify(basket))

}


const trash = (id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id )

    generateShoppingCart()
}


const update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);

    document.getElementById(id).innerHTML=search.item;
}
