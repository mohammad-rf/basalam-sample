let shop = document.getElementById('cards')



let shopItemData = [{
    id:'qweiop',
    price:'104000',
    title:' عسل طبیعی چهل گیاه 1 کیلویی سبلان(مستقیم از زنبوردار)',
    img:'https://statics.basalam.com/public-4/users/Llm46/06-22/Hk7byneU9ptF1hx4W3khv2oXKvZ6aub8bVN2umFBdGj6LuHmPb.jpg_256X256X70.jpg'
},
{
    id:'rtyuio',
    price:'98000',
    title:'عسل گون گز طبیعی 1 کیلویی (مستقیم از زنبوردار) '  ,
    img:'https://statics.basalam.com/public-3/users/bxaag/05-13/fbEgGFhvxm5cBctIxPpnFLQdqiAgIZhjnHmmYLM5YZtZrscwUT.jpg_256X256X70.jpg'
},
{
    id:'tyuty',
    price:'15000',
    title:'عسل گون معمولی مستقیم از زنبوردار یک کیلوگرم برداشت 1402 ((پلمپ شده ))',
    img:'https://statics.basalam.com/public/users/2RBRK/2104/BON37cnAzdBQbrrsCLP8FhQwOyQvBQQmz0Y0f3nO.jpeg_256X256X70.jpeg'
},
{
    id:'wredf',
    price:'19000',
    title:'عسل گون معمولی مستقیم از زنبوردار یک کیلوگرم برداشت 1402 ((پلمپ شده ))',
    img:'https://statics.basalam.com/public-3/users/bxaag/11-04/7qqoR0OjELDkKS4VOkx1wOT6IVVO931KsKr6cdrmbNw2wQJSee.jpg_256X256X70.jpg'
}
]


let generateShopItems = () => {
  return (shop.innerHTML = shopItemData
    .map((x) => {
        let {id,price,title,img} = x;
       return `
        <div class="col-4 col-lg-3">
            <div id=item-${x.id} class="card rounded-0 p-3 ">
                <a href="">
                    <img class="w-100 object-fit-cover"
                        src="${x.img}"
                        alt="">
                </a>
                <div class="card-body p-0 mt-3">
                    <a class="card-title" href="">
                           ${x.title}
                    </a>
                    <div class="card-subtitle mt-2 ">
                        اردبیل |
                        عسل طبیعی سبلان حامد
                    </div>
                    <div
                        class="card-price d-flex align-items-center justify-content-between  mt-2 ">
                        <div>
                            <button onclick="addToCart(${x.id})" class="btn border-0 rounded-1 d-flex align-items-center justify-content-center">
                                <i class="fa-solid fa-plus text-white"></i>
                            </button>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-end">
                            <span class="mt-1">
                                ${x.price}
                                <span class="">تومان</span>
                            </span>
                            <span class=" mt-1">
                                    کیلویی ${x.price}
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

generateShopItems()

let addToCart = () => {
    console.log(id);

}