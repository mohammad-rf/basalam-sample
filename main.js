let shop = document.getElementById('cards')
let basket = JSON.parse(localStorage.getItem('data')) || [];


let generateShopItems = () => {
  
    return (shop.innerHTML = shopItemData
        .map((x) => {
            let { id, price, title, img } = x;
            return `
        <div class="col-4 col-lg-3 p-0">
            <div id=${id} class="card rounded-0 p-3 ">
                <a href="">
                    <img class="w-100 object-fit-cover"
                        src="${img}"
                        alt="">
                </a>
                <div class="card-body p-0 mt-3">
                    <a class="card-title" href="">
                           ${title}
                    </a>
                    <div class="card-subtitle mt-2 ">
                        اردبیل |
                        عسل طبیعی سبلان حامد
                    </div>
                    <div
                        class="card-price d-flex align-items-center justify-content-between  mt-2 ">
                        <div>
                            <button onclick="addToCart(${id})" class="btn border-0 rounded-1 d-flex align-items-center justify-content-center">
                                <i class="fa-solid fa-plus text-white"></i>
                            </button>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-end">
                            <span class="mt-1">
                                ${price}
                                <span class="">تومان</span>
                            </span>
                            <span class=" mt-1">
                                    کیلویی ${price}
                                <span class="">تومان</span>
                            </span>
                        </div>
                    </div>
                    <div class="card-link  d-flex justify-content-end mt-1">
                        <div> 1,000 گرم</div>
                        <div>غرفه برتر</div>
                        <div>ارسال رایگان</div>
                    </div>
                </div>
            </div>
        </div>
        `
        }).join('')
    )
}

generateShopItems();

let addToCart = (id) => {
    // console.log(id);
    let selectedItem = id;
    //  search the basket for the reapeted ids

    let search = basket.find((x) => x.id === selectedItem.id);

    //if the selected id was reapeted  and exised on the basket dont do any thing

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else return;

    localStorage.setItem('data', JSON.stringify(basket))

    calculation();
}









     




